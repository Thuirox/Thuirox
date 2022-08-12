const debug_text = document.getElementById("debug_text");

const gyroButton = document.getElementById("gyro-button");

const cameraInitialPosition = {
    x: 0,
    y: 0,
    z: 0.001
}

const cameraInitialAngleRad = Math.atan2(cameraInitialPosition.x, cameraInitialPosition.z);
const cameraInitialAngleDeg = cameraInitialAngleRad * 180/Math.PI;


export { debug_text, gyroButton, cameraInitialAngleRad, cameraInitialAngleDeg, cameraInitialPosition }