import * as THREE from 'three'
import { Logger } from './helpers/logger'
import { THREEx } from './libs/threex.domevents.js'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class InteractionManager {
  private static target?: MeshInteractive
  private static camera: THREE.Camera
  public static domEvents: any

  private static isMoving: boolean = false

  private static clickableElements: MeshInteractive[] = []

  public static startPosition?: { x: number, y: number }

  static targetFunction: () => void

  public static Instanciate (domEvents: any, camera: THREE.Camera): void {
    InteractionManager.domEvents = domEvents
    InteractionManager.camera = camera

    InteractionManager.setupCancelOnMove()
    InteractionManager.setupTriggerOnUp()
  }

  private static setupCancelOnMove (): void {
    // When cursor move, cancel interaction
    window.addEventListener('touchmove', function (event) {
      const endPosition = {
        x: event.changedTouches[0].screenX,
        y: event.changedTouches[0].screenY
      }

      if (typeof InteractionManager.startPosition !== 'undefined') {
        const a = InteractionManager.startPosition.x - endPosition.x
        const b = InteractionManager.startPosition.y - endPosition.y
        const dist = Math.sqrt(a * a + b * b)

        if (dist > 20 && !InteractionManager.isMoving) {
          Logger.debugAnimation('touch move')
          InteractionManager.isMoving = true
        }
      }
    })

    window.addEventListener('mousemove', function (event) {
      if (!InteractionManager.isMoving) {
        Logger.debugAnimation('mouse move')
        InteractionManager.isMoving = true
      }

      // Style pointer as cursor when hovering a clickable object
      // const modalDisplayed = [contactModalContainer, redirectModalContainer, loadingScreen].some(container => container.classList.contains('active'))
      const modalDisplayed = false
      if (!modalDisplayed) {
        const mouse = new THREE.Vector2()
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

        const raycaster = new THREE.Raycaster()
        raycaster.setFromCamera(mouse, InteractionManager.camera)
        const intersects = raycaster.intersectObjects(InteractionManager.clickableElements)

        if (intersects.length > 0) {
          document.body.style.cursor = 'pointer'
        } else {
          document.body.style.cursor = 'default'
        }
      }
    }, false)
  }

  private static setupTriggerOnUp (): void {
    // When cursor up, trigger interaction if no movement in between.
    const endFunction = (event: UIEvent): void => {
      document.body.style.cursor = 'default'
      if (typeof InteractionManager.target !== 'undefined') {
        if (!InteractionManager.isMoving) {
          InteractionManager.target.onInteraction(event)
        }
        Logger.debugAnimation('touchend global')
        InteractionManager.setTarget(undefined)
      }
    }

    window.addEventListener('mouseup', endFunction, false)
    window.addEventListener('touchend', endFunction, false)
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

class MeshInteractive extends THREE.Mesh {
  private isInteractive: boolean = false
  public readonly onInteraction: (event: UIEvent) => void

  constructor (
    onInteraction: () => void,
    geometry?: THREE.BufferGeometry<THREE.NormalBufferAttributes> | undefined,
    material?: THREE.Material | THREE.Material[] | undefined
  ) {
    super(geometry, material)

    this.onInteraction = onInteraction
    this.turnOnInteraction()
  }

  public turnOffInteraction (): void {
    if (!this.isInteractive) return

    InteractionManager.domEvents.removeEventListener(this, 'mousedown', this.setupFunction.bind(this), false)
    InteractionManager.domEvents.removeEventListener(this, 'touchstart', this.touchEnd.bind(this), false)

    InteractionManager.removeClickable(this)

    this.isInteractive = false
  }

  public turnOnInteraction (): void {
    if (this.isInteractive) return

    InteractionManager.domEvents.addEventListener(this, 'mousedown', this.setupFunction.bind(this), false)
    // this. not detected correctly when it is on a three js object (but work on global document). Using touchstart instead.
    InteractionManager.domEvents.addEventListener(this, 'touchstart', this.touchEnd.bind(this), false)

    InteractionManager.addClickable(this)

    this.isInteractive = true
  }

  private touchEnd (event: any): void {
    InteractionManager.startPosition = {
      x: event.origDomEvent.changedTouches[0].screenX,
      y: event.origDomEvent.changedTouches[0].screenY
    }
    this.setupFunction(event)
  }

  private setupFunction (event: UIEvent): void {
    Logger.debugAnimation(`event started on: ${JSON.stringify(event)}, ${JSON.stringify(this)}`)
    InteractionManager.setIsMoving(false)
    InteractionManager.setTarget(this)
  }
}

function setupInteractions (camera: THREE.Camera, canvas: HTMLCanvasElement): void {
  const domEvents = new THREEx.DomEvents(camera, canvas)
  InteractionManager.Instanciate(domEvents, camera)
}

export { setupInteractions, MeshInteractive }
