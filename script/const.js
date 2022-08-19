import * as THREE from './libs/three.module.js';

const debug_text = document.getElementById("debug_text");

const debugMove = false;
const debugAnimation = false;
const debugModal = false;
const debugLoading = false;

const gyroButton = document.getElementById("gyro-button");


const cameraInitialPosition = { x:0, y:0, z:0 };


const angleBetweenSphere = 0.1 * Math.PI;


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
    loader, 
    colors, 
    debugMove, 
    debugAnimation,
    debugModal,
    debugLoading,
    angleBetweenSphere,
    cameraInitialPosition
}