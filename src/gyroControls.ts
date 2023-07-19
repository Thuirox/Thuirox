import * as THREE from 'three'

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
          console.log(reason)
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

class UninitializedError extends Error {
  constructor (className: string) {
    super(`${className} has not been initialized yet. Use ${className}.initialize([parameters]) first.`)
  }
}

interface GyroscopeControlsProps {
  useGyroscopeInterpolation?: boolean
  interpolationSpeed?: number
  onGyroAvailable?: () => void
  logOrientation?: (orientation: { alpha: number | null, beta: number | null, gamma: number | null }) => void
}

class GyroscopeControls {
  private usingGyroscopeControls = false
  private camera: THREE.Camera
  private deviceOrientation?: DeviceOrientationEvent

  private onGyroAvailable: () => void = () => { this.setEnabled() }
  private logOrientation: (orientation: { alpha: number | null, beta: number | null, gamma: number | null }) => void = (orientation) => { console.log(orientation) }

  private gyroscopeSupportDetected: boolean = false

  private useGyroscopeInterpolation: boolean = true
  private interpolationSpeed: number = 0.5
  private readonly screenOrientation: number = 0

  private readonly gyroOffset = {
    alpha: 0,
    beta: 0,
    gamma: 0
  }

  private cameraAngleOffset: number = 0

  private static instance?: GyroscopeControls

  private constructor (camera: THREE.Camera, props: GyroscopeControlsProps) {
    this.camera = camera
    this.updateProps(props)

    askGyroscopePermission()
      .then(canUseGyroscope => {
        if (canUseGyroscope) this.setupSupport()
      }).catch((reason) => {
        console.log(reason)
      })
  }

  public updateGyro (): void {
    if (!this.usingGyroscopeControls) {
      console.log('Trying to update gyro controls. But it is not in used.')
    } else {
      if (this.deviceOrientation == null) {
        return
      }
      this.logOrientation(this.deviceOrientation)

      const alpha = this.deviceOrientation.alpha != null ? THREE.MathUtils.degToRad(this.deviceOrientation.alpha + this.gyroOffset.alpha) : 0 // Z
      const beta = this.deviceOrientation.beta != null ? THREE.MathUtils.degToRad(this.deviceOrientation.beta + this.gyroOffset.beta) : 0 // X'
      const gamma = this.deviceOrientation.gamma != null ? THREE.MathUtils.degToRad(this.deviceOrientation.gamma + this.gyroOffset.gamma) : 0 // Y''
      const orient = this.screenOrientation != null ? THREE.MathUtils.degToRad(this.screenOrientation) : 0 // O

      // There was a bug, when alpha reached 0 the camera jumped. This is a dead simple dirty workaround fixing it.
      if (alpha === 0) {
        return
      }

      if (this.useGyroscopeInterpolation) {
        const targetQuaternion = new THREE.Quaternion(this.camera.quaternion.x, this.camera.quaternion.y, this.camera.quaternion.z, this.camera.quaternion.w)
        setObjectQuaternion(targetQuaternion, alpha, beta, gamma, orient)

        this.camera.quaternion.slerp(targetQuaternion, this.interpolationSpeed)
      } else {
        setObjectQuaternion(this.camera.quaternion, alpha, beta, gamma, orient)
      }
    }
  }

  private setupSupport (): void {
    console.log('Gyroscope controls setup')
    const onOrientationDataAvailable = (event: DeviceOrientationEvent): void => {
      this.deviceOrientation = event
      // If the first time this event is triggered with a value in the alpha field.
      // It means that the device support this feature.
      // Then, by default turn on the gyroscope control.
      if (!this.gyroscopeSupportDetected && event.alpha != null) {
        this.onGyroAvailable()
        this.gyroscopeSupportDetected = true
      }
    }

    window.addEventListener('deviceorientation', onOrientationDataAvailable)
  }

  public updateProps ({ useGyroscopeInterpolation, interpolationSpeed, onGyroAvailable, logOrientation }: GyroscopeControlsProps): void {
    if (useGyroscopeInterpolation) this.useGyroscopeInterpolation = useGyroscopeInterpolation
    if (interpolationSpeed) this.interpolationSpeed = interpolationSpeed
    if (onGyroAvailable) this.onGyroAvailable = onGyroAvailable
    if (logOrientation) this.logOrientation = logOrientation
  }

  public static initialize (camera: THREE.Camera, props: GyroscopeControlsProps = {}): GyroscopeControls {
    if (GyroscopeControls.instance == null) {
      GyroscopeControls.instance = new GyroscopeControls(camera, props)
    } else {
      GyroscopeControls.instance.camera = camera
      GyroscopeControls.instance.updateProps(props)
    }
    return GyroscopeControls.instance
  }

  public static getInstance (): GyroscopeControls {
    if (GyroscopeControls.instance == null) {
      throw new UninitializedError('GyroscopeControls')
    }

    return GyroscopeControls.instance
  }

  public setEnabled (enabled: boolean = true): void {
    this.usingGyroscopeControls = enabled
    console.log(`GyroControl enabled: ${String(enabled)}`)

    this.updateOffset()
  }

  public updateOffset (): void {
    if (this.deviceOrientation == null || this.deviceOrientation?.alpha === null) return
    this.gyroOffset.alpha = this.cameraAngleOffset - this.deviceOrientation.alpha
  }

  public updateCameraAngleOffset (value: number): void {
    this.gyroOffset.alpha += value - this.cameraAngleOffset
    this.cameraAngleOffset = value
  }

  public isInUse (): boolean {
    return this.usingGyroscopeControls
  }
}

export { GyroscopeControls }
