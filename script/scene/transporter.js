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


        const edges = new THREE.EdgesGeometry( cubeGeometry );

        this.lines = new THREE.LineSegments( edges );
        this.lines.material.transparent = true;
        this.lines.material.opacity = 0.7;
        this.lines.material.side = THREE.FrontSide;

        this.mesh.add( this.lines );
    
    
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
          
            transportController.setCurrentRoom(this.parent);
        });
    }
}

const transportController = {
    currentRoom: null,
    setCurrentRoom: function (room) {
        // If the camera is already going there, don't do again the animations.
        if(this.currentRoom == room) return;

        room.camera.goToRoom(room);

        room.showImages();

        room.square.mesh.remove(room.square.lines);

        if(this.currentRoom){
            this.currentRoom.hideImages();

            // Display back the lines of the cube after a delay to avoid passing through with the camera.
            new Animation(0, 0, 500, () => {}, (animation) => {
                animation.args.room.square.mesh.add(animation.args.room.square.lines);
                animation.args.room.square.lines.material.opacity = 0.7;
            }, { room: this.currentRoom }).init();
        }
        this.currentRoom = room;
    }
}

export { Transporter, transportController }