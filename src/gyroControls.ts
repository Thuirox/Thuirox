import * as THREE from 'three'
import { type OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Logger } from './helpers/logger'
import { Animation } from './animation'

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

async function askGyroscopePermission (): Promise<boolean> {
  // source : https://leemartin.dev/how-to-request-device-motion-and-orientation-permission-in-ios-13-74fc9d6cd140

  try {
    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission
    const isIOs = typeof requestPermission === 'function'
    if (isIOs) {
      return await requestPermission()
        .then(response => {
          return response === 'granted'
        })
        .catch((reason) => {
          Logger.error(reason)
          return false
        })
    } else {
      return true
    }
  } catch (error: any) {
    if (error instanceof ReferenceError) {
      return true
    } else {
      throw error
    }
  }
}

const setObjectQuaternion = (function () {
  const zee = new THREE.Vector3(0, 0, 1)
  const euler = new THREE.Euler()
  const q0 = new THREE.Quaternion()
  const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)) // - PI/2 around the x-axis

  return function (quaternion: THREE.Quaternion, alpha: number, beta: number, gamma: number, orient: number) {
    euler.set(beta, alpha, -gamma, 'YXZ') // 'ZXY' for the device, but 'YXZ' for us
    quaternion.setFromEuler(euler) // orient the device
    quaternion.multiply(q1) // camera looks out the back of the device, not the top
    quaternion.multiply(q0.setFromAxisAngle(zee, -orient)) // adjust for screen orientation
  }
}())

const gyroscopeCameraAnimation = new Animation<undefined | THREE.Quaternion, { camera: THREE.Camera | null }>(
  undefined,
  undefined,
  100,
  (_, animation) => {
    if (animation.end != null && animation.args.camera != null) {
      Logger.screenDebug(`Update ${Date.now()}`)
      animation.args.camera.quaternion.slerp(animation.end, 0.5)
    }
  },
  (animation) => {
    if (animation.end != null && animation.args.camera != null) {
      animation.args.camera.quaternion.copy(animation.end)
    }
  }, {
    camera: null
  })

function logOrientation (orientation: { alpha: number, beta: number, gamma: number }): void {
  const getString = (value: number | null): string => {
    return value != null ? value.toFixed(3) : '?'
  }

  Logger.screenDebug(`${getString(orientation.alpha)}\n${getString(orientation.beta)}\n${getString(orientation.gamma)}`)
}

class GyroscopeControls {
  private usingGyroscopeControls = false
  private readonly camera: THREE.Camera
  private readonly controls: OrbitControls
  private deviceOrientation?: DeviceOrientationEvent
  public updateGyro: () => void

  private readonly gyroButton: HTMLElement
  private gyroscopeSupportDetected: boolean = false

  private readonly useGyroscopeInterpolation: boolean = true
  private readonly screenOrientation: number = 0

  private readonly gyroOffset = {
    alpha: 0,
    beta: 0,
    gamma: 0
  }

  private cameraAngleOffset: number = 0

  private static instance?: GyroscopeControls

  private constructor (camera: THREE.Camera, controls: OrbitControls) {
    this.controls = controls
    this.camera = camera

    this.updateGyro = this.updateEmpty

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.gyroButton = document.getElementById('gyro-button')!
    this.gyroButton.onclick = this.switchGyroControl

    askGyroscopePermission()
      .then(canUseGyroscope => {
        if (canUseGyroscope) this.setupGyroscopeControls()
      }).catch((reason) => {
        Logger.error(reason)
      })
  }

  private setupGyroscopeControls (): void {
    /**
       * Angles value in scene:
       *  "Anthony Bayet" labels is in 90 90 0
       *  Next room is in 270 90 0
       */
    Logger.screenDebug('Gyroscope controls setup')
    const onOrientationDataAvailable = (event: DeviceOrientationEvent): void => {
      this.deviceOrientation = event
      // If the first time this event is triggered with a value in the alpha field.
      // It means that the device support this feature.
      // Then, swap the controls to the gyroscope one.
      if (!this.gyroscopeSupportDetected && event.alpha != null) {
        this.switchGyroControl(event)
        // Display the button to switch between controls
        this.gyroButton.style.display = 'block'
        this.gyroscopeSupportDetected = true
      }
    }

    window.addEventListener('deviceorientation', onOrientationDataAvailable)
  }

  public static getInstance (camera: THREE.Camera, controls: OrbitControls): GyroscopeControls {
    if (this.instance == null) {
      this.instance = new GyroscopeControls(camera, controls)
    }

    return this.instance
  }

  public switchGyroControl (_: any): void {
    this.usingGyroscopeControls = !this.usingGyroscopeControls
    this.controls.enabled = !this.controls.enabled

    if (this.usingGyroscopeControls) {
      this.updateGyro = this.updateFull
    } else {
      this.updateGyro = this.updateEmpty
    }

    Logger.screenDebug('GyroControl switched')

    this.updateOffset()
  }

  private updateFull (): void {
    if (this.deviceOrientation == null) {
      return
    }
    // logOrientation(this.deviceOrientation)

    const alpha = this.deviceOrientation.alpha != null ? THREE.MathUtils.degToRad(this.deviceOrientation.alpha + this.gyroOffset.alpha) : 0 // Z
    const beta = this.deviceOrientation.beta != null ? THREE.MathUtils.degToRad(this.deviceOrientation.beta + this.gyroOffset.beta) : 0 // X'
    const gamma = this.deviceOrientation.gamma != null ? THREE.MathUtils.degToRad(this.deviceOrientation.gamma + this.gyroOffset.gamma) : 0 // Y''
    const orient = this.screenOrientation != null ? THREE.MathUtils.degToRad(this.screenOrientation) : 0 // O

    // There was a bug, when alpha reached 0 the camera jumped. This is a dead simple very dirty workaround fixing it.
    if (alpha === 0) {
      return
    }

    if (this.useGyroscopeInterpolation) {
      // logOrientation({ alpha:this.camera.quaternion.x, beta:this.camera.quaternion.y, gamma:this.camera.quaternion.z})
      const targetQuaternion = new THREE.Quaternion(this.camera.quaternion.x, this.camera.quaternion.y, this.camera.quaternion.z, this.camera.quaternion.w)
      setObjectQuaternion(targetQuaternion, alpha, beta, gamma, orient)

      // Trigger camera angle animation from current to target in X milliseconds.
      gyroscopeCameraAnimation.setParams(undefined, targetQuaternion, { camera: this.camera })

      if (gyroscopeCameraAnimation.isOver()) {
        // If previous animation stopped. Set params, init and add animation to controller.
        gyroscopeCameraAnimation.init()
      } else {
        // If previous animation running. Set params, init.
        gyroscopeCameraAnimation.init(false)
      }
    } else {
      setObjectQuaternion(this.camera.quaternion, alpha, beta, gamma, orient)
    }
  }

  private updateEmpty (): void {
    console.log('trying to update gyro controls. Without function set.')
  }

  public updateOffset (): void {
    if (this.deviceOrientation == null || this.deviceOrientation?.alpha === null) return
    this.gyroOffset.alpha = this.cameraAngleOffset - this.deviceOrientation.alpha
  }

  public updateCameraAngleOffset (value: number): void {
    this.gyroOffset.alpha += value - this.cameraAngleOffset
    this.cameraAngleOffset = value
  }

  public setTarget (position: THREE.Vector3): void {
    this.controls.target.set(
      position.x,
      position.y,
      position.z
    )
  }

  public isInUse (): boolean {
    return this.usingGyroscopeControls
  }
}

export { GyroscopeControls, logOrientation }
