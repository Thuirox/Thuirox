import * as THREE from 'three'
import { GyroscopeControls } from './gyroControls'
import { setupScene } from './scene/scene.js'
import { setupManualControls } from './manualControls'
import { setupInteractions } from './interaction'
import { AnimationController } from './animation'

import { cameraInitialPosition } from './helpers/const'

import Stats from 'stats.js'
import { Camera } from './scene/camera'
import { TransportManager } from './managers/transportManager'
import { Logger } from './helpers/logger.js'
import { type OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const debug = false

THREE.Cache.enabled = true

function setupGyroControls (camera: Camera, orbitControls: OrbitControls, controlsSwitchButton: HTMLElement): GyroscopeControls {
  const onGyroAvailable = (): void => {
    orbitControls.enabled = false
    GyroscopeControls.getInstance().setEnabled()
    controlsSwitchButton.style.display = 'block'
  }

  const logOrientation = (orientation: { alpha: number | null, beta: number | null, gamma: number | null }): void => {
    const getString = (value: number | null): string => {
      return value != null ? value.toFixed(3) : '?'
    }

    Logger.screenDebug(`${getString(orientation.alpha)}\n${getString(orientation.beta)}\n${getString(orientation.gamma)}`)
  }

  GyroscopeControls.initialize(camera, { onGyroAvailable, logOrientation })

  const gyroscopeControls = GyroscopeControls.getInstance()
  gyroscopeControls.updateCameraAngleOffset(camera.angleDegOffset)
  return gyroscopeControls
}

function main (): void {
  const stats = new Stats()
  if (debug) {
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)
  }
  const canvas = document.getElementById('canvas3D') as HTMLCanvasElement
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.localClippingEnabled = true
  THREE.ColorManagement.enabled = false
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace

  // camera setup
  const fov = 70
  const aspect = 2 // the canvas default
  const near = 0.1
  const far = 250

  const camera = new Camera(fov, aspect, near, far)

  window.addEventListener('resize', onWindowResize, false)

  function onWindowResize (): void {
    const canvas = renderer.domElement

    const width = canvas.clientWidth
    const height = canvas.clientHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height, false)
  }

  onWindowResize()

  // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(
    cameraInitialPosition.x + camera.positionOffset.x,
    cameraInitialPosition.y + camera.positionOffset.y,
    cameraInitialPosition.z + camera.positionOffset.z
  )
  // camera.position.set(40, 20, 20); // camera out of balls
  // camera.position.set(7, 7, 7); // camera in first ball but out of cube

  setupInteractions(camera, canvas)

  const orbitControls: OrbitControls = setupManualControls(camera, canvas)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const controlsSwitchButton = document.getElementById('gyro-button')!
  controlsSwitchButton.onclick = () => {
    orbitControls.enabled = !orbitControls.enabled
    GyroscopeControls.getInstance().setEnabled(!orbitControls.enabled)
  }

  const gyroscopeControls = setupGyroControls(camera, orbitControls, controlsSwitchButton)

  TransportManager.initiate(camera, orbitControls, gyroscopeControls)

  const scene = new THREE.Scene()
  void setupScene(scene, camera, renderer, () => {
    if (!TransportManager.currentRoom?.mesh) {
      Logger.error(`TransportManager.currentRoom.mesh null: ${JSON.stringify(TransportManager.currentRoom)}`)
      return
    }
    const pos = TransportManager.currentRoom.mesh.getWorldPosition(new THREE.Vector3())

    camera.position.set(
      pos.x + camera.positionOffset.x,
      pos.y + camera.positionOffset.y,
      pos.z + camera.positionOffset.z
    )
    orbitControls.target.set(pos.x, pos.y, pos.z)
    // controls.target.set(0, 0, 0);
    // camera.position.set(120, 20, 20); // camera out of balls
  })

  function render (time: number): void {
    if (debug) {
      // console.log(renderer.info);
      stats.begin()
    }
    time *= 0.001 // convert time to seconds

    if (gyroscopeControls.isInUse()) {
      gyroscopeControls.updateGyro()
    } else {
      orbitControls.update()
    }

    AnimationController.update()

    renderer.render(scene, camera)
    if (debug) {
      stats.end()
    }
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}

main()
