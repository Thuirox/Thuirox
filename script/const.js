import * as THREE from './libs/three.module.js';

const debug_text = document.getElementById("debug_text");

const gyroButton = document.getElementById("gyro-button");

const cameraInitialPosition = {
    x: 0,
    y: 0,
    z: 0.001
}

const cameraInitialAngleRad = Math.atan2(cameraInitialPosition.x, cameraInitialPosition.z);
const cameraInitialAngleDeg = cameraInitialAngleRad * 180/Math.PI;


const loader = new THREE.TextureLoader();


const colors = [
    0x773344,
    0xE3B5A4,
    0xF5E9E2,
    0x0B0014,
    0xD44D5C
]

export { debug_text, gyroButton, cameraInitialAngleRad, cameraInitialAngleDeg, cameraInitialPosition, loader, colors }