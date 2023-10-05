import {
  EventDispatcher,
  MOUSE,
  Quaternion,
  Spherical,
  TOUCH,
  Vector2,
  Vector3,
  type Camera
} from 'three'

class OrbitControls extends EventDispatcher {
  object: Camera
  initialRotation: Vector3
  domElement: HTMLCanvasElement

  enabled: boolean = true

  enableDamping: boolean
  dampingFactor: number

  enableRotate: boolean
  rotateSpeed: number

  constructor (object: Camera, domElement: HTMLCanvasElement) {
    super()

    this.object = object
    this.initialRotation = this.object.getWorldDirection(new Vector3())
    this.domElement = domElement
    this.domElement.style.touchAction = 'none' // disable touch scroll

    // Set to false to disable this control
    this.enabled = true

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false
    this.dampingFactor = 0.05

    // Set to false to disable rotating
    this.enableRotate = true
    this.rotateSpeed = -1.0

    // Mouse buttons
    this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY }

    // Touch fingers
    this.touches = { ONE: TOUCH.ROTATE }

    // current position in spherical coordinates
    const spherical = new Spherical()
    const sphericalDelta = new Spherical()

    // this method is exposed, but perhaps it would be better if we can make it private...
    this.update = (function () {
      const offset = new Vector3()

      // so camera.up is the orbit axis
      const quat = new Quaternion().setFromUnitVectors(object.up, new Vector3(0, 1, 0))
      const quatInverse = quat.clone().invert()

      const lastQuaternion = new Quaternion()

      const twoPI = 2 * Math.PI

      return function update (deltaTime = null) {
        const position = scope.object.position
        const camera = scope.object

        // offset.copy(camera.getWorldDirection(new Vector3()))
        offset.copy(scope.initialRotation)

        // rotate offset to "y-axis-is-up" space
        offset.applyQuaternion(quat)

        // angle from z-axis around y-axis
        spherical.setFromVector3(offset)

        // if (scope.enableDamping) {
        //   spherical.theta += sphericalDelta.theta * scope.dampingFactor
        //   spherical.phi += sphericalDelta.phi * scope.dampingFactor
        // } else {
        //   spherical.theta += sphericalDelta.theta
        //   spherical.phi += sphericalDelta.phi
        // }
        spherical.theta += sphericalDelta.theta
        spherical.phi += sphericalDelta.phi

        spherical.makeSafe()

        offset.setFromSpherical(spherical)

        // new Quaternion().setFromAxisAngle()

        // rotate offset back to "camera-up-vector-is-up" space
        offset.applyQuaternion(quatInverse)

        // offset = offset.normalize() // Vector3 we want to go to

        camera.lookAt(offset.add(position))

        // console.log(v1, v2, offset.normalize())
        // console.log(offset.normalize())

        // if (scope.enableDamping) {
        //   sphericalDelta.theta *= (1 - scope.dampingFactor)
        //   sphericalDelta.phi *= (1 - scope.dampingFactor)
        // } else {
        //   sphericalDelta.set(0, 0, 0)
        // }
      }
    }())

    this.dispose = function () {
      scope.domElement.removeEventListener('contextmenu', onContextMenu)

      scope.domElement.removeEventListener('pointerdown', onPointerDown)
      scope.domElement.removeEventListener('pointercancel', onPointerUp)

      scope.domElement.removeEventListener('pointermove', onPointerMove)
      scope.domElement.removeEventListener('pointerup', onPointerUp)
    }

    const scope = this

    const scale = 1

    const rotateStart = new Vector2()
    const rotateEnd = new Vector2()
    const rotateDelta = new Vector2()

    const mouse = new Vector2()

    const pointers = []
    const pointerPositions = {}

    function rotateLeft (angle: number): void {
      if (scope.enableDamping) {
        sphericalDelta.theta -= angle * scope.dampingFactor
      } else {
        sphericalDelta.theta -= angle
      }
    }

    function rotateUp (angle: number): void {
      if (scope.enableDamping) {
        sphericalDelta.phi += angle * scope.dampingFactor
      } else {
        sphericalDelta.phi += angle
      }
    }

    function onPointerMove (event: PointerEvent): void {
      if (!scope.enabled) return

      rotateEnd.set(event.clientX, event.clientY)

      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed)

      const element = scope.domElement

      const ratio = 10 * 2 * Math.PI / element.clientHeight
      rotateLeft(ratio * rotateDelta.x) // yes, height for both
      rotateUp(ratio * rotateDelta.y)

      rotateStart.copy(rotateEnd)

      scope.update()
    }

    function onPointerDown (event: PointerEvent): void {
      if (!scope.enabled) return

      if (pointers.length === 0) {
        scope.domElement.setPointerCapture(event.pointerId)

        scope.domElement.addEventListener('pointermove', onPointerMove)
        scope.domElement.addEventListener('pointerup', onPointerUp)
      }

      rotateStart.set(event.clientX, event.clientY)

      addPointer(event)
    }

    function onContextMenu (event: MouseEvent): void {
      if (!scope.enabled) return

      event.preventDefault()
    }

    function addPointer (event: PointerEvent): void {
      pointers.push(event)
    }

    function removePointer (event: PointerEvent): void {
      delete pointerPositions[event.pointerId]

      for (let i = 0; i < pointers.length; i++) {
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1)
          return
        }
      }
    }

    function onPointerUp (event: PointerEvent): void {
      removePointer(event)

      if (pointers.length === 0) {
        scope.domElement.releasePointerCapture(event.pointerId)

        scope.domElement.removeEventListener('pointermove', onPointerMove)
        scope.domElement.removeEventListener('pointerup', onPointerUp)
      }
    }

    scope.domElement.addEventListener('contextmenu', onContextMenu)

    scope.domElement.addEventListener('pointerdown', onPointerDown)
    scope.domElement.addEventListener('pointercancel', onPointerUp)

    // force an update at start

    // this.update();
  }
}

export { OrbitControls }
