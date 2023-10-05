import type * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OrbitControls } from './orbitControlsLight.js'

function isMobile (): boolean {
  // Check if the user is usign a mobile device. https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

  // First method working on all devices.
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]

  const isMobile = toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem)
  })

  // Seconde method. Not compatible with all devices.
  // Especially problematic for Iphone using Safari and WebView Android when the site opens up there.
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData

  // const isMobile = navigator.userAgentData.mobile;

  return isMobile
}

function setupManualControls (camera: THREE.Camera, canvas: HTMLCanvasElement): OrbitControls {
  // Init mouse and touch controls
  const controls = new OrbitControls(camera, canvas)
  // controls.enablePan = false
  // controls.enableZoom = false
  controls.enableDamping = true

  if (isMobile()) {
    controls.rotateSpeed = 0.6
  } else {
    controls.rotateSpeed = 0.4
  }

  // reverse control
  controls.rotateSpeed *= -1

  // controls.target.set(initialTargetPosition.x, initialTargetPosition.y, initialTargetPosition.z)

  controls.update()

  controls.enabled = true

  return controls
}

export { setupManualControls, OrbitControls }
