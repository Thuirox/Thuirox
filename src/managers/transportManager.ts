import { type PerspectiveCamera, Vector3 } from 'three'
import { Animation } from '../animation'
import { type Room } from '../scene/room'
import { Logger } from '../helpers/logger'
import { type ControlManager } from '../controls'

type CameraAnimationArgsType = { camera: PerspectiveCamera, controlManager: ControlManager } | null
interface CameraAnimationTargetType { position: Vector3, rotation: Vector3 }

const getCameraAnimation = (): Animation<CameraAnimationTargetType, CameraAnimationArgsType> => {
  return new Animation<CameraAnimationTargetType, CameraAnimationArgsType>(
    {
      position: new Vector3(),
      rotation: new Vector3()
    }, {
      position: new Vector3(),
      rotation: new Vector3()
    },
    1000,
    (ratio: number, animation: Animation<CameraAnimationTargetType, CameraAnimationArgsType>) => {
      if (animation.args == null) {
        return
      }
      const computeFunction = (start: number, end: number, ratio: number): number => start + (end - start) * ratio
      const position = {
        x: computeFunction(animation.start.position.x, animation.end.position.x, ratio),
        y: computeFunction(animation.start.position.y, animation.end.position.y, ratio),
        z: computeFunction(animation.start.position.z, animation.end.position.z, ratio)
      }

      const { camera, controlManager } = animation.args

      camera.position.set(position.x, position.y, position.z)

      const intermediaryRotation = animation.start.rotation.clone().lerp(animation.end.rotation, ratio)
      controlManager.updateInitialRotation(intermediaryRotation)
    },
    (animation: Animation<CameraAnimationTargetType, CameraAnimationArgsType>) => {
      if (animation.args == null) {
        return
      }
      const { camera, controlManager } = animation.args

      camera.position.copy(animation.end.position)
      controlManager.updateInitialRotation(animation.end.rotation)
    }, null
  )
}
const cameraAnimation = getCameraAnimation()

class TransportManager {
  public static currentRoom: Room | null = null
  public static camera: PerspectiveCamera
  public static controlManager: ControlManager

  public static initiate (camera: PerspectiveCamera, controlManager: ControlManager): void {
    TransportManager.camera = camera
    TransportManager.controlManager = controlManager
  }

  public static setCurrentRoom (room: Room): void {
    // If the camera is already going there, don't do again the animations.
    if (this.currentRoom === room) return

    this.goToRoom(room)

    room.showChidlren()

    room.transporter?.removeLines()

    room.previous?.previous?.unload()
    room.previous?.load()
    room.load()
    room.next?.load()
    room.next?.next?.unload()

    if (this.currentRoom) {
      this.currentRoom.hideChildren()

      // Display back the lines of the cube after a delay to avoid passing through with the camera.
      const animation = new Animation<null, { room: Room | null }>(
        null, null,
        500,
        () => {},
        (animation) => {
          const { room } = animation.args
          if (room?.transporter) room.transporter.addLines()
        },
        { room: this.currentRoom }
      )

      animation.init()
    }
    this.currentRoom = room
  }

  public static goToRoom (room: Room): void {
    if (!room.mesh) {
      Logger.error(`Room mesh null: ${JSON.stringify(room)}`)
      return
    }

    const titleRelativePosition = new Vector3(0, 0, 8)

    const titleWorldPosition = room.mesh.localToWorld(titleRelativePosition)

    const targetPosition = new Vector3()
    room.mesh.getWorldPosition(targetPosition)

    const initialRotation = this.controlManager.getInitialRotation()

    const targetRotation = new Vector3().copy(targetPosition).sub(titleWorldPosition)

    cameraAnimation.setParams({
      position: new Vector3().copy(this.camera.position),
      rotation: initialRotation
    },
    {
      position: new Vector3().copy(targetPosition),
      rotation: targetRotation
    },
    {
      camera: this.camera,
      controlManager: this.controlManager
    })

    cameraAnimation.init()
  }
}

export { TransportManager }
