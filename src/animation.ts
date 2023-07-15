import { Logger } from './helpers/logger'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class AnimationController {
  private static animations: Array<Animation<any, any>> = []

  public static add (animation: Animation<any, any>): void {
    if (typeof animation.startTime === 'undefined') {
      Logger.debugAnimation('! animation added to controller but not initialized')
    }
    AnimationController.animations.push(animation)
  }

  public static update (): void {
    const currentTime = Date.now()

    AnimationController.animations.forEach((animation) => {
      const timeDifference = currentTime - animation.startTime

      if (timeDifference > animation.duration) {
        animation.animationEnd(timeDifference)
      } else {
        animation.update(timeDifference)
      }
    })

    AnimationController.animations = AnimationController.animations.filter((animation) => {
      return !animation.ended
    })
  }
}

class Animation<T, Args> {
  startTime: number = 0
  duration: number
  ended: boolean
  start: T
  end: T
  updateFct: (ratio: number, animation: Animation<T, Args>) => void
  endFct: (animation: Animation<T, Args>) => void
  args: Args
  isLooping: boolean

  constructor (
    start: T,
    end: T,
    duration: number,
    updateFct: (ratio: number, animation: Animation<T, Args>) => void,
    endFct: (animation: Animation<T, Args>) => void,
    args: Args) {
    Logger.debugAnimation('new animation created')

    this.start = start
    this.end = end

    this.duration = duration

    this.updateFct = updateFct
    this.endFct = endFct
    if (typeof this.endFct === 'undefined') {
      Logger.debugAnimation('end fct is undefined')
    }

    this.ended = true
    this.args = args
    this.isLooping = false
  }

  animationStop (): void {
    this.ended = true
  }

  isOver (): boolean {
    return this.ended
  }

  setIsLooping (isLooping: boolean): void {
    this.isLooping = isLooping
  }

  setParams (start: T, end: T, args: Args): void {
    this.setStart(start)
    this.setEnd(end)
    this.setArgs(args)
  }

  setStart (start: T): void {
    this.start = start
  }

  setEnd (end: T): void {
    this.end = end
  }

  setArgs (args: Args): void {
    this.args = args
  }

  init (toAdd: boolean = true): void {
    this.startTime = Date.now()
    this.ended = false
    if (toAdd) {
      AnimationController.add(this)
    }
  }

  animationEnd (timeDifference: number): void {
    this.ended = true
    if (typeof this.endFct !== 'undefined') {
      this.endFct(this)
    } else {
      this.update(timeDifference)
    }

    if (this.isLooping) {
      this.init(false)
    }
  }

  update (timeDifference: number): void {
    const ratio = timeDifference / this.duration
    this.updateFct(ratio, this)
  }
}

class DifferedAnimation<T, Args> extends Animation<number, undefined> {
  constructor (nextAnimation: Animation<T, Args>, differedDuration: number) {
    super(0, 0, differedDuration,
      () => {},
      () => {
        nextAnimation.init()
        AnimationController.add(nextAnimation)
      },
      undefined
    )
  }
}

export { AnimationController, Animation, DifferedAnimation }
