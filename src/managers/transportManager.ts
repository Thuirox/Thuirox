import * as THREE from 'three'
import { Animation } from '../animation'
import { type Camera } from '../scene/camera'
import { type Room } from '../scene/room'
import { type OrbitControls } from '../manualControls'
import { type GyroscopeControls } from '../gyroControls'
import { Logger } from '../helpers/logger'

type CameraAnimationArgsType = { camera: any, offset: THREE.Vector3, gyroscopeControls: GyroscopeControls, orbitControls: OrbitControls } | null
interface CameraAnimationTargetType { v3: THREE.Vector3, angle: number }

const getCameraAnimation = (): Animation<CameraAnimationTargetType, CameraAnimationArgsType> => {
  return new Animation<CameraAnimationTargetType, CameraAnimationArgsType>(
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
}
const cameraAnimation = getCameraAnimation()

class TransportManager {
  public static currentRoom: Room | null = null
  public static camera: Camera
  public static orbitControls: OrbitControls
  public static gyroscopeControls: GyroscopeControls

  public static initiate (camera: Camera, orbitControls: OrbitControls, gyroscopeControls: GyroscopeControls): void {
    TransportManager.camera = camera
    TransportManager.orbitControls = orbitControls
    TransportManager.gyroscopeControls = gyroscopeControls
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
    const titleWorldPosition = room.mesh.localToWorld(new THREE.Vector3(0, 0, -8))
    // Target the title emplacement of the target room
    this.orbitControls.target.set(titleWorldPosition.x, titleWorldPosition.y, titleWorldPosition.z)

    const targetPosition = new THREE.Vector3()
    room.mesh.getWorldPosition(targetPosition)

    const startAngleGyro = this.camera.angleDegOffset

    const offsetPointWorld = room.mesh.localToWorld(new THREE.Vector3(0, 0, -0.001))
    const offsetPoint = new THREE.Vector3().copy(targetPosition)

    this.camera.updatePositionOffsetPoint(offsetPoint.sub(offsetPointWorld))

    cameraAnimation.setParams({
      v3: new THREE.Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z),
      angle: startAngleGyro
    },
    {
      v3: new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z),
      angle: this.camera.angleDegOffset
    },
    {
      camera: this.camera,
      offset: this.camera.positionOffset,
      orbitControls: this.orbitControls,
      gyroscopeControls: this.gyroscopeControls

    })

    cameraAnimation.init()
  }
}

export { TransportManager }
