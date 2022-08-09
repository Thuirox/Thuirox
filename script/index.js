import * as THREE from './libs/three.module.js';
import { setupScene } from './scene.js';
import { setupManualControls } from './manualControls.js';
import { THREEx } from './libs/threex.domevents.js';
import { setupInteractions } from './interaction.js';
import { gyroControl, setupGyroControls } from './gyroControls.js'

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;

    let cameraDirection = {duration:0};

    

    // camera setup
    const fov = 70;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 250;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0.001, 0, 0);
    // camera.position.set(40, 20, 20);
    
    const domEvents = new THREEx.DomEvents(camera, canvas);

    setupInteractions(domEvents);

    const controls = setupManualControls(camera, canvas);

    camera.controls = controls;

    camera.updateCameraPosition = function(x, y, z) {
        let xDiff = 0.001;
        if(camera.position.x - x < 0){
            xDiff = -xDiff;
        }
    
        this.controls.target.set(x, y, z);
        // camera.position.set(x + xDiff, y, z);
        cameraDirection = {
            startPosition: {
                x:camera.position.x,
                y:camera.position.y,
                z:camera.position.z
            },
            endPosition: {x:x, y:y, z:z},
            startTime: Date.now(),
            duration: 1000,
            diff: xDiff
        }
    
    };
    

    const updateGyro = setupGyroControls(camera, controls);


    const scene = new THREE.Scene();
    setupScene(scene, domEvents, camera, renderer);


    function render(time) {
        time *= 0.001;  // convert time to seconds

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        if(gyroControl){
            updateGyro();
        } else {
            controls.update();
        }

        // Update camera
        cameraDirection
        let currentTime = Date.now();
        if(cameraDirection.duration != 0){
            let differenceTime = currentTime - cameraDirection.startTime;

            let position;
            let ratio;

            if(differenceTime > cameraDirection.duration){
                position = cameraDirection.endPosition;
                cameraDirection.duration = 0;
            } else {
                ratio = differenceTime / cameraDirection.duration;
                position = {
                    x: cameraDirection.startPosition.x + (cameraDirection.endPosition.x - cameraDirection.startPosition.x) * ratio,
                    y: cameraDirection.startPosition.y + (cameraDirection.endPosition.y - cameraDirection.startPosition.y) * ratio,
                    z: cameraDirection.startPosition.z + (cameraDirection.endPosition.z - cameraDirection.startPosition.z) * ratio
                };
            }

            camera.position.set(position.x + cameraDirection.diff, position.y, position.z);
        }
       
       
        renderer.render(scene, camera);
       
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);


    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
    }

}

main()

// Loading screen animation
setTimeout(()=>{
    document.getElementById("loading-screen-break-strip__top").style.height = "100%";
    document.getElementById("loading-screen-break-strip__bottom").style.height = "100%";
    
    setTimeout(()=>{
        document.getElementById("loading-screen-left-panel").style.left = "-100%";
        document.getElementById("loading-screen-right-panel").style.left = "calc(100% + 5px)";
        document.getElementById("loading-screen").style.pointerEvents = "none";
    
        setTimeout(()=>{
            
        }, 2000)
        
    }, 2000)

}, 1000)