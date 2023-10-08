/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as THREE from 'three'

const debugModal = false
const debugLoading = false

const gyroButton = document.getElementById('gyro-button')!

const cameraInitialPosition = new THREE.Vector3(0, 0, 0)

// const cameraInitialPosition = new THREE.Vector3(40, 20, 20); // camera out of balls
// const cameraInitialPosition = new THREE.Vector3(120, 20, 20); // camera out of balls
// const cameraInitialPosition = new THREE.Vector3(7, 7, 7); // camera in first ball but out of cube

const angleBetweenSphere = 0.1 * Math.PI

const loader = new THREE.TextureLoader()

const colors = [
  // 0x773344,
  0xE3B5A4,
  0xD44D5C,
  0xF5E9E2
  // 0x0B0014,
]

export {
  gyroButton,
  loader,
  colors,
  debugModal,
  debugLoading,
  angleBetweenSphere,
  cameraInitialPosition
}
