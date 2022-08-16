import * as THREE from '../libs/three.module.js';
import { Animation, animationController } from '../animation.js';
import { addInteraction } from '../interaction.js';

class Transporter{
    constructor(parent, camera, center, color, squareSideLength=6.5){
        this.parent = parent;
        this.center = center;
        this.color = color;

        this.camera = camera

        this.isDoubleSided = true;

        this.parent;

        this.squareSideLength = squareSideLength;

        this.mesh = null;

        this.parent.addSquare(this);
    }

    setIsDoubleSided(val){
        this.isDoubleSided = val;
    }

    init(){
        let cubeFace;
        if(this.isDoubleSided){
            cubeFace = THREE.DoubleSide;
        } else {
            cubeFace = THREE.FrontSide;
        }
        // Click point
        const boxSide = this.squareSideLength;
        const boxWidth = boxSide;
        const boxHeight = boxSide;
        const boxDepth = boxSide;
        const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: this.color,
            side: cubeFace
        });
    
        this.mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
        this.mesh.rotateZ(Math.PI/4);
        this.mesh.rotateY(Math.PI/4);
        this.mesh.position.x = this.center.x;
        this.mesh.position.y = this.center.y;
        this.parent.mesh.add(this.mesh);
    
    
        this.animation = new Animation(
            0, Math.PI*0.001, 1000,
            (ratio, animation) => {
                let v3 = new THREE.Vector3(1, 1, 1);
                v3.normalize();
                this.mesh.rotateOnAxis(v3, animation.end);
            }, undefined);
    
        this.animation.setIsLooping(true);
        this.animation.init();
    
        animationController.add(this.animation);
    
        addInteraction(this.mesh, (event) => {

            this.camera.goToRoom(this.parent);
            
            this.parent.showImages();
            transportController.currentRoom?.hideImages();
            transportController.currentRoom = this.parent;
        });
    }
}

const transportController = {
    currentRoom: null
}

export { Transporter, transportController }