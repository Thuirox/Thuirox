import * as THREE from 'three';
import { debugMove } from './const';
import { contactModalContainer, redirectModalContainer } from './modal.js';
import { loadingScreen } from './loadingScreen.js';

var move = false;
var domEvents;
var camera;
var clickableElements = [];
var targetElement = undefined;
var targetFct = undefined;
var startPosition = undefined;


function addInteraction(object, room, fct){
    let setupFunction = (event) => {
        if(debugMove) console.log("interaction event started");
        move = false;
        targetElement = object;
        targetFct = fct;
    }

    let touchEnd = (event) => {
        startPosition = {
            x:event.origDomEvent.changedTouches[0].screenX,
            y:event.origDomEvent.changedTouches[0].screenY
        };
        setupFunction(event);
    }


    object.turnOffInteraction = () => {
        // Make object unclickable.
        if(!object.isOn) return;
        
        domEvents.removeEventListener(object, "mousedown", setupFunction, false);
        domEvents.removeEventListener(object, "touchstart", touchEnd, false);

        clickableElements = clickableElements.filter(clickable => clickable != object);

        object.isOn = false;
    };

    object.turnOnInteraction = () => {
        // Make object clickable.
        if(object.isOn) return;

        domEvents.addEventListener(object, "mousedown", setupFunction, false);
        // Touchend not detected correctly when it is on a three js object (but work on global document). Using touchstart instead.
        domEvents.addEventListener(object, "touchstart", touchEnd, false);

        clickableElements.push(object);

        object.isOn = true;
    };

    
    room.addClickable(object);

    object.isOn = false;

    object.turnOnInteraction();
}

function setupCancelOnMove(){
    // When cursor move, cancel interaction
    window.addEventListener("touchmove", function(event){
        let endPosition = {
            x:event.changedTouches[0].screenX,
            y:event.changedTouches[0].screenY
        }

        if(typeof startPosition !== "undefined"){
            let a = startPosition.x - endPosition.x;
            let b = startPosition.y - endPosition.y;
            let dist = Math.sqrt( a*a + b*b );
    
            if(dist > 20 && !move){
                if(debugMove) console.log("touch move");
                move = true;
            }
        }

    });


    window.addEventListener("mousemove", function(event){
        if(!move){
            if(debugMove) console.log("mouse move");
            move = true;
        }

        // Style pointer as cursor when hovering a clickable object
        if(!contactModalContainer.classList.contains("active") && !redirectModalContainer.classList.contains("active") && !loadingScreen.classList.contains("active")){
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
            
        document.body.style.cursor = 'default';
        if(typeof targetElement !== "undefined"){
            if(!move){
                targetFct();
            }
            if(debugMove) console.log("touchend global");
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