import * as THREE from 'three';
import { gyroControl, setupGyroControls, updateCameraAngleOffset, updateGyro } from './gyroControls.js'
import { setupScene } from './scene/scene.js';
import { setupManualControls } from './manualControls';
import { THREEx } from './libs/threex.domevents.js';
import { setupInteractions } from './interaction.js';
import { animationController, cameraAnimation } from './animation.js'

import { cameraInitialPosition } from './helpers/const';
import { transportController } from './scene/transporter.js';

import Stats from 'stats.js'
import { Camera } from './scene/camera';

const debug = true

function main() {
    const stats = new Stats()
    if(debug) {
        stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(stats.dom)
    }
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.setPixelRatio(4);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;
    THREE.ColorManagement.enabled = false;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    

    // camera setup
    const fov = 70;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 250;

    const camera = new Camera(fov, aspect, near, far)
    updateCameraAngleOffset(camera.angleDegOffset)


    window.addEventListener('resize', onWindowResize, false)

    function onWindowResize () {
        const canvas = renderer.domElement

        const width = canvas.clientWidth
        const height = canvas.clientHeight

        camera.aspect = width / height
        camera.updateProjectionMatrix()

        renderer.setSize(width, height, false)
    }

    onWindowResize()

    // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(
        cameraInitialPosition.x + camera.positionOffset.x, 
        cameraInitialPosition.y + camera.positionOffset.y, 
        cameraInitialPosition.z + camera.positionOffset.z
    );
    // camera.position.set(40, 20, 20); // camera out of balls
    // camera.position.set(7, 7, 7); // camera in first ball but out of cube
    
    const domEvents = new THREEx.DomEvents(camera, canvas);

    setupInteractions(domEvents, camera);

    const controls = setupManualControls(camera, canvas);

    camera.controls = controls;


    camera.goToRoom = function(room) {

        let titleWorldPosition = room.mesh.localToWorld(new THREE.Vector3(0, 0, -8));
        // Target the title emplacement of the target room
        this.controls.target.set(titleWorldPosition.x, titleWorldPosition.y, titleWorldPosition.z);


        let targetPosition = new THREE.Vector3();
        room.mesh.getWorldPosition(targetPosition);

        let startAngleGyro = camera.angleDegOffset;



        const offsetPointWorld = room.mesh.localToWorld( new THREE.Vector3( 0, 0, -0.001 ) );
        const offsetPoint = new THREE.Vector3().copy(targetPosition);

        camera.updatePositionOffsetPoint( offsetPoint.sub( offsetPointWorld ) );
        
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
            angle: camera.angleDegOffset
        }, 
        { 
            camera: camera, 
            offset: camera.positionOffset,
            controls: controls
        });

        cameraAnimation.init();

    };
    

    setupGyroControls(camera, controls);


    const scene = new THREE.Scene();
    setupScene(scene, camera, renderer, ()=>{

        let pos = transportController.currentRoom.mesh.getWorldPosition(new THREE.Vector3());
        
        camera.position.set(
            pos.x + camera.positionOffset.x, 
            pos.y + camera.positionOffset.y, 
            pos.z + camera.positionOffset.z
        );
        controls.target.set(pos.x, pos.y, pos.z);
        // controls.target.set(0, 0, 0);
        // camera.position.set(120, 20, 20); // camera out of balls
    });



    function render(time) {
        if(debug) {
            console.log(renderer.info);
            stats.begin();
        }
        time *= 0.001;  // convert time to seconds

        if(gyroControl){
            updateGyro();
        } else {
            controls.update();
        }

        animationController.update();
       
        renderer.render(scene, camera);
        if(debug) {
            stats.end();
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

}

main();

