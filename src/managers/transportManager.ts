import * as THREE from 'three'
import { Animation } from '../animation'
import { type Camera } from '../scene/camera'
import { type Room } from '../scene/room'
import { Logger } from '../helpers/logger'
import { type ControlManager } from '../controls'

type CameraAnimationArgsType = { camera: Camera, controlManager: ControlManager } | null
interface CameraAnimationTargetType { position: THREE.Vector3, rotation: THREE.Vector3 }

const getCameraAnimation = (): Animation<CameraAnimationTargetType, CameraAnimationArgsType> => {
  return new Animation<CameraAnimationTargetType, CameraAnimationArgsType>(
    {
      position: new THREE.Vector3(),
      rotation: new THREE.Vector3()
    }, {
      position: new THREE.Vector3(),
      rotation: new THREE.Vector3()
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
  public static camera: Camera
  public static controlManager: ControlManager

  public static initiate (camera: Camera, controlManager: ControlManager): void {
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

    const titleRelativePosition = new THREE.Vector3(0, 0, 8)

    const titleWorldPosition = room.mesh.localToWorld(titleRelativePosition)

    const targetPosition = new THREE.Vector3()
    room.mesh.getWorldPosition(targetPosition)

    const initialRotation = this.controlManager.getInitialRotation()

    const targetRotation = new THREE.Vector3().copy(targetPosition).sub(titleWorldPosition)

    cameraAnimation.setParams({
      position: new THREE.Vector3().copy(this.camera.position),
      rotation: initialRotation
    },
    {
      position: new THREE.Vector3().copy(targetPosition),
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
