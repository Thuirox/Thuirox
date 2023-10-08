import { type Object3D, PointLight, type Vector3 } from 'three'
import { Animation } from '../animation'
import { Logger } from '../helpers/logger'

class LightManager {
  private readonly parent: Object3D
  private readonly position: Vector3

  private readonly turnOffAnimation: Animation<number, undefined>
  private readonly turnOnAnimation: Animation<number, undefined>

  private readonly topLight: PointLight
  private readonly bottomLight: PointLight

  constructor (parent: Object3D, position: Vector3) {
    this.position = position
    this.parent = parent

    const color = 0xFFFFFF
    const intensity = 1

    this.topLight = new PointLight(color, intensity, 30)
    this.topLight.position.set(this.position.x, this.position.y + 10, this.position.z)

    this.bottomLight = new PointLight(color, intensity, 20)
    this.bottomLight.position.set(this.position.x, this.position.y - 10, this.position.z)

    this.parent.add(this.topLight)
    this.parent.add(this.bottomLight)

    this.turnOffAnimation = new Animation<number, undefined>(
      1, 0, 1500,
      (ratio: number) => {
        if (this.topLight !== undefined) this.topLight.intensity = 1 - ratio
        if (this.bottomLight !== undefined) this.bottomLight.intensity = 1 - ratio
      }, undefined, undefined)

    this.turnOnAnimation = new Animation<number, undefined>(
      1, 0, 1500,
      (ratio: number) => {
        if (this.topLight !== undefined) this.topLight.intensity = ratio
        if (this.bottomLight !== undefined) this.bottomLight.intensity = ratio
      }, undefined, undefined)
  }

  turnOffLights (): void {
    if (this.turnOffAnimation === undefined) {
      Logger.debug('Light turn off animation not initialized yet')
    } else {
      this.turnOffAnimation.init(this.turnOffAnimation.isOver())
    }
  }

  turnOnLights (): void {
    if (this.turnOnAnimation === undefined) {
      Logger.debug('Light turn on animation not initialized yet')
    } else {
      this.turnOnAnimation.init(this.turnOnAnimation.isOver())
    }
  }
}

export { LightManager }
