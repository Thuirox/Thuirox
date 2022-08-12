import * as THREE from './libs/three.module.js';
import { setupScene } from './scene.js';
import { setupManualControls } from './manualControls.js';
import { THREEx } from './libs/threex.domevents.js';
import { setupInteractions } from './interaction.js';
import { gyroControl, setupGyroControls } from './gyroControls.js'
import { animationController, cameraAnimation } from './animation.js'

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
    camera.position.set(0, 0, 0.001);
    // camera.position.set(40, 20, 20); // camera out of balls
    // camera.position.set(7, 7, 7); // camera in first ball but out of cube
    
    const domEvents = new THREEx.DomEvents(camera, canvas);

    setupInteractions(domEvents);

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
    

    const updateGyro = setupGyroControls(camera, controls);


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

main()

const contactButton = document.getElementById("contact-button");
const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const cross = document.getElementById("cross");

function toggleModal() {
    modalContainer.classList.toggle("invisible");
}

contactButton.onclick = toggleModal;
modalContainer.onclick = toggleModal;
cross.onclick = toggleModal;
modal.onclick = (e) => {
    e.stopPropagation();
}

const startButton = document.getElementById("loading-screen-text-start");
const startButtonContainer = document.getElementById("loading-screen-text-start-container");
const loadingScreen = document.getElementById("loading-screen");

setTimeout(()=>{
    startButton.style.opacity = "0.8";

    const startButtonAnimationTimeout = setTimeout(()=>{
        startButton.classList.add("start-button-animation");

    }, 2000)

    setTimeout(()=>{
        startButton.style.cursor = "pointer";

        loadingScreen.onclick = () => {
            clearTimeout(startButtonAnimationTimeout);
            let currentOpacity = getComputedStyle(startButton).opacity;
            startButton.style.opacity = currentOpacity;

            startButton.classList.remove("start-button-animation");

            startButtonContainer.style.opacity = 0;
        
            // Loading screen animation
            document.getElementById("loading-screen-break-strip__top").style.height = "100%";
            document.getElementById("loading-screen-break-strip__bottom").style.height = "100%";
            
            setTimeout(()=>{
                document.getElementById("loading-screen-left-panel").style.left = "-100%";
                document.getElementById("loading-screen-right-panel").style.left = "calc(100% + 5px)";
                loadingScreen.style.pointerEvents = "none";
                
            }, 1000)
        }
    }, 300);
}, 700);

