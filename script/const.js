import * as THREE from './libs/three.module.js';

const debug_text = document.getElementById("debug_text");

const debugMove = false;
const debugAnimation = false;
const debugModal = false;

const gyroButton = document.getElementById("gyro-button");


const angleBetweenSphere = 0.1 * Math.PI;


let cameraInitialPositionRequested = new THREE.Vector3( 0, 0, 0.001 );

let axis = new THREE.Vector3(0, 1, 0);

cameraInitialPositionRequested.applyAxisAngle( axis, 2*angleBetweenSphere );

const cameraInitialPosition = cameraInitialPositionRequested;


const cameraInitialAngleRad = Math.atan2(cameraInitialPosition.x, cameraInitialPosition.z);
const cameraInitialAngleDeg = cameraInitialAngleRad * 180/Math.PI;


const loader = new THREE.TextureLoader();


const colors = [
    // 0x773344,
    0xE3B5A4,
    0xD44D5C,
    0xF5E9E2,
    // 0x0B0014,
]

export { 
    debug_text, 
    gyroButton, 
    cameraInitialAngleRad, 
    cameraInitialAngleDeg, 
    cameraInitialPosition, 
    loader, 
    colors, 
    debugMove, 
    debugAnimation,
    debugModal,
    angleBetweenSphere
}