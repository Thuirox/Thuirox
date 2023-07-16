import * as THREE from 'three'
import { angleBetweenSphere } from '../helpers/const'

class Camera extends THREE.PerspectiveCamera {
  public positionOffset: THREE.Vector3
  private angleRadOffset: number
  public angleDegOffset: number

  constructor (fov: number, aspect: number, near: number, far: number) {
    super(fov, aspect, near, far)

    this.positionOffset = new THREE.Vector3()

    this.updatePositionOffsetAngle(2 * angleBetweenSphere)

    this.angleRadOffset = Math.atan2(this.positionOffset.x, this.positionOffset.z)
    this.angleDegOffset = this.angleRadOffset * 180 / Math.PI
  }

  private updatePositionOffsetAngle (angle: number): THREE.Vector3 {
    const positionOffset = new THREE.Vector3(0, 0, 0.001)

    const axisY = new THREE.Vector3(0, 1, 0)

    positionOffset.applyAxisAngle(axisY, angle)

    return this.updatePositionOffsetPoint(positionOffset)
  }

  public updatePositionOffsetPoint (vector: THREE.Vector3): THREE.Vector3 {
    this.positionOffset = vector

    this.angleRadOffset = Math.atan2(this.positionOffset.x, this.positionOffset.z)
    this.angleDegOffset = this.angleRadOffset * 180 / Math.PI

    return this.positionOffset
  }
}

export { Camera }
