import type * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { isMobile } from './helpers/utils'
import { cameraInitialPosition } from './helpers/const'

function setupManualControls (camera: THREE.Camera, canvas: HTMLCanvasElement): OrbitControls {
  // Init mouse and touch controls
  const controls = new OrbitControls(camera, canvas)
  controls.enablePan = false
  controls.enableZoom = false
  controls.enableDamping = true

  if (isMobile()) {
    controls.rotateSpeed = 0.7
  } else {
    controls.rotateSpeed = 0.5
  }

  // reverse control
  controls.rotateSpeed *= -1

  controls.target.set(cameraInitialPosition.x, cameraInitialPosition.y, cameraInitialPosition.z)

  controls.update()

  controls.enabled = true

  return controls
}

export { setupManualControls }
