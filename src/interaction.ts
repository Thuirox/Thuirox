import { type Camera, Vector2, Raycaster, Mesh, type BufferGeometry, type Material, type NormalBufferAttributes } from 'three'
import { Logger } from './helpers/logger'

class InteractionManager {
  private static target?: MeshInteractive
  private static camera: Camera
  private static canvas: HTMLCanvasElement

  private static isMoving: boolean = false

  private static clickableElements: MeshInteractive[] = []

  public static startPosition?: { x: number, y: number }

  private static readonly pointer: Vector2 = new Vector2()

  static targetFunction: () => void

  public static Instanciate (camera: Camera, canvas: HTMLCanvasElement): void {
    InteractionManager.camera = camera
    InteractionManager.canvas = canvas

    InteractionManager.setupMove()
    InteractionManager.setupUp()
    InteractionManager.setupDown()
  }

  private static setupMove (): void {
    function styleCursorOnHover (): void {
      // Style pointer as cursor when hovering a clickable object
      const raycaster = new Raycaster()
      raycaster.setFromCamera(InteractionManager.pointer, InteractionManager.camera)
      const intersects = raycaster.intersectObjects(InteractionManager.clickableElements)

      if (intersects.length > 0) {
        document.body.style.cursor = 'pointer'
      } else {
        document.body.style.cursor = 'default'
      }
    }

    function cancelActionOnBigMovement (event: PointerEvent): void {
      const currentPosition = {
        x: event.screenX,
        y: event.screenY
      }

      if (typeof InteractionManager.startPosition !== 'undefined') {
        const a = InteractionManager.startPosition.x - currentPosition.x
        const b = InteractionManager.startPosition.y - currentPosition.y
        const dist = Math.sqrt(a * a + b * b)

        if (dist > 20 && !InteractionManager.isMoving) {
          // TODO: Cancel also if the user moved the camera around too far
          Logger.debugInteraction('Pointer is moving')
          InteractionManager.setIsMoving(true)
        }
      } else {
        // Something went wrong on start event, let's try to recover
        InteractionManager.startPosition = { ...currentPosition }
      }
    }

    function onPointerMove (event: PointerEvent): void {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      InteractionManager.updatePointer(event)
      cancelActionOnBigMovement(event)
      styleCursorOnHover()
    }
    InteractionManager.canvas.addEventListener('pointermove', onPointerMove, false)
  }

  private static setupUp (): void {
    // When cursor up, trigger interaction if no movement happened in between
    const endFunction = (event: PointerEvent): void => {
      document.body.style.cursor = 'default'
      if (typeof InteractionManager.target !== 'undefined') {
        if (!InteractionManager.isMoving) {
          Logger.debugInteraction('alright')
          InteractionManager.target.onInteraction(event)
        }
        Logger.debugInteraction('touchend global', { target: InteractionManager.target, isMoving: InteractionManager.isMoving })
        InteractionManager.setTarget(undefined)
      }
    }

    InteractionManager.canvas.addEventListener('pointerup', endFunction, false)
  }

  private static setupDown (): void {
    // When pointer down, initialize interaction
    const startFunction = (event: PointerEvent): void => {
      InteractionManager.updatePointer(event)

      const pointedElement: MeshInteractive | undefined = InteractionManager.getPointedElement()

      Logger.debugInteraction('event started on', { event, pointedElement, clickableElements: InteractionManager.clickableElements })

      if (pointedElement) {
        InteractionManager.startPosition = {
          x: event.screenX,
          y: event.screenY
        }

        InteractionManager.setIsMoving(false)
        InteractionManager.setTarget(pointedElement)
      }
    }

    InteractionManager.canvas.addEventListener('pointerdown', startFunction, false)
  }

  private static updatePointer (event: PointerEvent): void {
    InteractionManager.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    InteractionManager.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  private static getPointedElement (): MeshInteractive | undefined {
    const raycaster = new Raycaster()
    raycaster.setFromCamera(InteractionManager.pointer, InteractionManager.camera)
    const intersects = raycaster.intersectObjects<MeshInteractive>(InteractionManager.clickableElements, false)

    if (intersects.length === 0) return undefined

    const pointerElement = intersects[0].object

    return pointerElement
  }

  public static setTarget (target: MeshInteractive | undefined): void {
    InteractionManager.target = target
  }

  public static addClickable (element: MeshInteractive): void {
    InteractionManager.clickableElements.push(element)
  }

  public static removeClickable (element: MeshInteractive): void {
    InteractionManager.clickableElements = InteractionManager.clickableElements.filter(clickable => clickable !== element)
  }

  public static setIsMoving (isMoving: boolean): void {
    InteractionManager.isMoving = isMoving
  }
}

interface Loadable {
  load: () => void
  unload: () => void
}
class MeshLoadable extends Mesh<BufferGeometry, Material> implements Loadable {
  public load (): void {}
  public unload (): void {}
}

class MeshInteractive extends MeshLoadable {
  private isInteractive: boolean = false
  public onInteraction: (event: UIEvent) => void

  constructor (
    onInteraction: () => void = () => {},
    geometry?: BufferGeometry<NormalBufferAttributes> | undefined,
    material?: Material | undefined
  ) {
    super(geometry, material)

    this.onInteraction = onInteraction
    this.turnOnInteraction()
  }

  public turnOffInteraction (): void {
    if (!this.isInteractive) return

    InteractionManager.removeClickable(this)
    this.isInteractive = false
  }

  public turnOnInteraction (): void {
    if (this.isInteractive) return

    InteractionManager.addClickable(this)
    this.isInteractive = true
  }

  public load (): void {
    this.turnOnInteraction()
  }

  public unload (): void {
    this.turnOffInteraction()
  }
}

function setupInteractions (camera: Camera, canvas: HTMLCanvasElement): void {
  InteractionManager.Instanciate(camera, canvas)
}

export { setupInteractions, MeshInteractive, MeshLoadable, type Loadable }
