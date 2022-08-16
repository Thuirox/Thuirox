import * as THREE from './libs/three.module.js';
import { setupScene } from './scene/scene.js';
import { setupManualControls } from './manualControls.js';
import { THREEx } from './libs/threex.domevents.js';
import { setupInteractions } from './interaction.js';
import { gyroControl, setupGyroControls, updateGyro } from './gyroControls.js'
import { animationController, cameraAnimation } from './animation.js'
import { cameraAngleDegOffset, cameraPositionOffset, updateCameraPositionOffset } from './utils.js';
import { loadingScreenSetup } from './loadingScreen.js';
import { cameraInitialPosition } from './const.js';
import { transportController } from './scene/transporter.js';

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
    camera.position.set(
        cameraInitialPosition.x + cameraPositionOffset.x, 
        cameraInitialPosition.y + cameraPositionOffset.y, 
        cameraInitialPosition.z + cameraPositionOffset.z
    );
    console.log(camera.position)
    // camera.position.set(40, 20, 20); // camera out of balls
    // camera.position.set(7, 7, 7); // camera in first ball but out of cube
    
    const domEvents = new THREEx.DomEvents(camera, canvas);

    setupInteractions(domEvents, camera);

    const controls = setupManualControls(camera, canvas);

    camera.controls = controls;


    camera.goToRoom = function(room) {

        let titleWorldPosition = room.mesh.localToWorld(new THREE.Vector3(0, 0, -8));
        console.log("destination", titleWorldPosition)
        // Target the title emplacement of the target room
        this.controls.target.set(titleWorldPosition.x, titleWorldPosition.y, titleWorldPosition.z);


        let targetPosition = new THREE.Vector3();
        room.mesh.getWorldPosition(targetPosition);

        let quat = new THREE.Quaternion();
        room.mesh.getWorldQuaternion(quat);

        let euler = new THREE.Euler();
        euler = euler.setFromQuaternion(quat);

        let startAngleGyro = cameraAngleDegOffset;

        // console.log(room)
        console.log(euler.y, targetPosition)

        updateCameraPositionOffset(euler.y);

        
        cameraAnimation.setParams({
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z,
            angle: startAngleGyro
        }, 
        {
            x:targetPosition.x, 
            y:targetPosition.y, 
            z:targetPosition.z,
            angle: cameraAngleDegOffset
        }, 
        { 
            camera: camera, 
            offset: cameraPositionOffset,
            controls: controls
        });

        cameraAnimation.init();

    };
    

    setupGyroControls(camera, controls);


    const scene = new THREE.Scene();
    setupScene(scene, camera, renderer, ()=>{

        let pos = transportController.currentRoom.mesh.getWorldPosition(new THREE.Vector3());
        
        camera.position.set(
            pos.x + cameraPositionOffset.x, 
            pos.y + cameraPositionOffset.y, 
            pos.z + cameraPositionOffset.z
        );
        controls.target.set(pos.x, pos.y, pos.z);
    });



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

