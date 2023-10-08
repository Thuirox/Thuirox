import { Cache, ColorManagement, LinearSRGBColorSpace, PCFSoftShadowMap, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three'
import { setupScene } from './scene/scene'
import { setupInteractions } from './interaction'
import { AnimationController } from './animation'

import { cameraInitialPosition } from './helpers/const'

import Stats from 'stats.js'
import { TransportManager } from './managers/transportManager'
import { Logger } from './helpers/logger'
import { ControlManager, PLUGIN_KEYS, FirstPersonPlugin, GyroscopePlugin, type Orientation } from 'immersive-controls'

const debug = false

Cache.enabled = true

function setupControlManager (camera: PerspectiveCamera, canvas: HTMLCanvasElement): ControlManager {
  const controlManager = new ControlManager()

  const firstPersonPlugin = new FirstPersonPlugin(camera, canvas)

  const onGyroAvailable = (): void => {
    controlManager.addPlugin(gyroscopePlugin)
    controlManager.enableControl(PLUGIN_KEYS.gyroscopeControls)
    controlsSwitchButton.style.display = 'block'

    // Temporary fix to set gyro offset correctly
    setTimeout(() => {
      controlManager.updateOffset()
    }, 1000)
  }

  const logUpdateDirection = (orientation: Orientation): void => {
    const getString = (value: number | null): string => value != null ? value.toFixed(3) : '?'

    Logger.screenDebug(`${getString(orientation.alpha)}\n${getString(orientation.beta)}\n${getString(orientation.gamma)}`)
  }

  const gyroscopePlugin = new GyroscopePlugin(camera, onGyroAvailable, logUpdateDirection)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const controlsSwitchButton = document.getElementById('gyro-button')!
  controlsSwitchButton.onclick = () => {
    controlManager.switchControl()
  }

  controlManager.addPlugin(firstPersonPlugin)

  return controlManager
}

function main (): void {
  const stats = new Stats()
  if (debug) {
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)
  }
  const canvas = document.getElementById('canvas3D') as HTMLCanvasElement
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  renderer.localClippingEnabled = true
  ColorManagement.enabled = false
  renderer.outputColorSpace = LinearSRGBColorSpace

  // camera setup
  const fov = 70
  const aspect = 2 // the canvas default
  const near = 0.1
  const far = 250

  const camera = new PerspectiveCamera(fov, aspect, near, far)
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

  camera.position.copy(cameraInitialPosition)

  setupInteractions(camera, canvas)

  const controlManager = setupControlManager(camera, canvas)

  TransportManager.initiate(camera, controlManager)

  const scene = new Scene()
  void setupScene(scene, camera, renderer, () => {
    if (!TransportManager.currentRoom?.mesh) {
      Logger.error(`TransportManager.currentRoom.mesh null: ${JSON.stringify(TransportManager.currentRoom)}`)
      return
    }
    const pos = TransportManager.currentRoom.mesh.getWorldPosition(new Vector3())

    camera.position.copy(pos)
  })

  function render (): void {
    if (debug) {
      stats.update()
    }

    controlManager.update()

    AnimationController.update()

    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}

main()
