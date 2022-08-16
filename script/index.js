import * as THREE from './libs/three.module.js';
import { setupScene } from './scene/scene.js';
import { setupManualControls } from './manualControls.js';
import { THREEx } from './libs/threex.domevents.js';
import { setupInteractions } from './interaction.js';
import { gyroControl, setupGyroControls, updateGyro } from './gyroControls.js'
import { animationController, cameraAnimation } from './animation.js'
import { cameraInitialPosition } from './const.js';
import { loadingScreenSetup } from './loadingScreen.js';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;
    

    // camera setup
    const fov = 70;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 250;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(cameraInitialPosition.x, cameraInitialPosition.y, cameraInitialPosition.z);
    // camera.position.set(40, 20, 20); // camera out of balls
    // camera.position.set(7, 7, 7); // camera in first ball but out of cube
    
    const domEvents = new THREEx.DomEvents(camera, canvas);

    setupInteractions(domEvents, camera);

    const controls = setupManualControls(camera, canvas);

    camera.controls = controls;

    camera.goTo = function(x, y, z) {
        let xDiff = 0.001;
        if(camera.position.x - x < 0){
            xDiff = -xDiff;
        }
    
        this.controls.target.set(x, y, z);
        // camera.position.set(x + xDiff, y, z);
        cameraAnimation.setParams({
            x:camera.position.x,
            y:camera.position.y,
            z:camera.position.z
        }, 
        {
            x:x, 
            y:y, 
            z:z
        }, 
        { 
            camera:camera, 
            diff:xDiff 
        });
        cameraAnimation.init();
    
    };
    

    setupGyroControls(camera, controls);


    const scene = new THREE.Scene();
    setupScene(scene, camera, renderer);


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

        animationController.update();
       
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

main();

loadingScreenSetup();

