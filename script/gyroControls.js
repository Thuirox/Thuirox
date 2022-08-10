import * as THREE from './libs/three.module.js';
import { debug_text, gyroButton } from "./const.js";

var gyroControl = false;
var camera;
var controls;


var deviceOrientation = {};


function switchGyroControl(event){
    gyroControl = !gyroControl;
    controls.enabled = !controls.enabled;
    debug_text.textContent = `GyroControl switched`;
    updateGyroOffset();
}

gyroButton.onclick = switchGyroControl;


function setupGyroControls(camera_, controls_){
    /**
     * Angles value in scene:
     *  "Anthony Bayet" labels is in 90 90 0
     *  Next room is in 270 90 0
     */
    // Init device orientation controls
    camera = camera_;
    controls = controls_;
    var setObjectQuaternion = function() {

        var zee = new THREE.Vector3( 0, 0, 1 );
        var euler = new THREE.Euler();
        var q0 = new THREE.Quaternion();
        var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

        return function( quaternion, alpha, beta, gamma, orient ) {

            euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us
            quaternion.setFromEuler( euler ); // orient the device
            quaternion.multiply( q1 ); // camera looks out the back of the device, not the top
            quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); // adjust for screen orientation
        };
    }();
    var gyroSupportDetected = false;


    window.addEventListener("deviceorientation", (event) => {
        deviceOrientation = event;
        // The first time this event is triggered with a value in the alpha field. 
        // It means that the device support this feature.
        // Then, swap the controls to the gyroscope one.
        if(!gyroSupportDetected && event.alpha != null){
            switchGyroControl(event);
            // Make appear the button to switch between controls
            document.getElementById("gyro-button").style.display = "block";
            gyroSupportDetected = true;
        }
    });

    // Text field used for debug purpose
    const gyro_text = document.getElementById("gyro_text");

    var screenOrientation = 0;
    function updateGyro(){
        gyro_text.textContent = `${deviceOrientation.alpha.toFixed(1)}\n${deviceOrientation.beta.toFixed(1)}\n${deviceOrientation.gamma.toFixed(1)}`;

        var alpha = deviceOrientation.alpha ? THREE.MathUtils.degToRad( deviceOrientation.alpha + gyroOffset.alpha ) : 0; // Z
        var beta = deviceOrientation.beta ? THREE.MathUtils.degToRad( deviceOrientation.beta + gyroOffset.beta ) : 0; // X'
        var gamma = deviceOrientation.gamma ? THREE.MathUtils.degToRad( deviceOrientation.gamma + gyroOffset.gamma ) : 0; // Y''
        var orient = screenOrientation ? THREE.MathUtils.degToRad( screenOrientation ) : 0; // O

        setObjectQuaternion( camera.quaternion, alpha, beta, gamma, orient );
    }

    return updateGyro;
}




var gyroOffset = {
    alpha: 0,
    beta: 0,
    gamma: 0
}

function updateGyroOffset(){
    gyroOffset.alpha = 270 - deviceOrientation.alpha;
}



export { setupGyroControls, gyroControl }