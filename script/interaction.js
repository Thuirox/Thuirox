import * as THREE from './libs/three.module.js';
import { modalContainer } from './const.js';

var move = false;
var domEvents;
var camera;
var clickableElements = [];
var targetElement = undefined;
var targetFct = undefined;


function addInteraction(object, fct){
    let setupFunction = (event) => {
        console.log("interaction event started")
        move = false;
        targetElement = object;
        targetFct = fct;
    }

    domEvents.addEventListener(object, "mousedown", setupFunction, false);

    // Touchend not detected correctly when it is on a three js object (but work on global document). Using touchstart instead.
    domEvents.addEventListener(object, "touchstart", setupFunction, false);

    clickableElements.push(object);

}

function setupCancelOnMove(){
    // When cursor move, cancel interaction
    window.addEventListener("touchmove", function(event){
        if(!move){
            console.log("touch move");
            move = true;
        }
    });


    window.addEventListener("mousemove", function(event){
        if(!move){
            console.log("mouse move");
            move = true;
        }

        // Style pointer as cursor when hovering a clickable object
        
        if(!modalContainer.classList.contains("active")){
            var mouse = new THREE.Vector2();
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            var raycaster = new THREE.Raycaster();
            raycaster.setFromCamera( mouse, camera );
            var intersects = raycaster.intersectObjects( clickableElements );

            if(intersects.length > 0) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'default';
            }
        }

    }, false);
}

function setupTriggerOnUp(){

    // When cursor up, trigger interaction if no movement in between.
    let endFunction = (event) => {
        if(typeof targetElement !== "undefined"){
            // if(!move){
            //     targetFct();
            // }
            targetFct();
            console.log("touchend global");
            targetElement = undefined;
        }
    };

    

    window.addEventListener("mouseup", endFunction, false);
    window.addEventListener("touchend", endFunction, false);


    

}

function setupInteractions(domEvents_, camera_){
    domEvents = domEvents_;
    camera = camera_;

    setupTriggerOnUp();

    setupCancelOnMove();
}

export { addInteraction, setupInteractions }