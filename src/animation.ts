import * as THREE from 'three'

import { Logger } from './helpers/logger'
import { type GyroscopeControls } from './gyroControls'
import { type OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

class AnimationController {
  private animations: Array<Animation<any, any>>

  constructor () {
    this.animations = []
  }

  add (animation: Animation<any, any>): void {
    if (typeof animation.startTime === 'undefined') {
      console.log('! animation added to controller but not initialized')
    }
    this.animations.push(animation)
  }

  update (): void {
    const currentTime = Date.now()

    this.animations.forEach((animation) => {
      const timeDifference = currentTime - animation.startTime

      if (timeDifference > animation.duration) {
        animation.animationEnd(timeDifference)
      } else {
        animation.update(timeDifference)
      }
    })

    this.animations = this.animations.filter((animation) => {
      return !animation.ended
    })
  }
}

const animationController = new AnimationController()

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
      animationController.add(this)
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
        animationController.add(nextAnimation)
      },
      undefined
    )
  }
}

type CameraAnimationArgsType = { camera: any, offset: THREE.Vector3, gyroscopeControls: GyroscopeControls, orbitControls: OrbitControls } | null
interface CameraAnimationTargetType { v3: THREE.Vector3, angle: number }
const cameraAnimation = new Animation<CameraAnimationTargetType, CameraAnimationArgsType>(
  {
    v3: new THREE.Vector3(),
    angle: 0
  }, {
    v3: new THREE.Vector3(),
    angle: 0
  },
  1000,
  (ratio: number, animation: Animation<CameraAnimationTargetType, CameraAnimationArgsType>) => {
    if (animation.args == null) {
      return
    }
    const computeFunction = (start: number, end: number, ratio: number): number => start + (end - start) * ratio
    const position = {
      x: computeFunction(animation.start.v3.x, animation.end.v3.x, ratio),
      y: computeFunction(animation.start.v3.y, animation.end.v3.y, ratio),
      z: computeFunction(animation.start.v3.z, animation.end.v3.z, ratio)
    }

    const { camera, offset, gyroscopeControls } = animation.args

    camera.position.set(
      position.x + offset.x,
      position.y + offset.y,
      position.z + offset.z
    )

    const angle = animation.start.angle + (animation.end.angle - animation.start.angle) * ratio
    gyroscopeControls.updateCameraAngleOffset(angle)
  },
  (animation: Animation<CameraAnimationTargetType, CameraAnimationArgsType>) => {
    if (animation.args == null) {
      return
    }
    const { camera, offset, gyroscopeControls, orbitControls } = animation.args

    const position = animation.end.v3
    camera.position.set(
      position.x + offset.x,
      position.y + offset.y,
      position.z + offset.z
    )
    orbitControls.target.set(position.x, position.y, position.z)
    gyroscopeControls.updateCameraAngleOffset(animation.end.angle)
  }, null
)

export { animationController, Animation, cameraAnimation, DifferedAnimation }
