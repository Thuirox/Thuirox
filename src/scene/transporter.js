import * as THREE from 'three';
import { Animation } from '../animation';
import { MeshInteractive } from '../interaction';
import { TransportManager } from '../managers/transportManager';

class Transporter{
    constructor(room, camera, center, color, squareSideLength=6.5){
        this.room = room;
        this.center = center;
        this.color = color;

        this.camera = camera

        this.isDoubleSided = true;

        this.squareSideLength = squareSideLength;

        this.mesh = null;

        this.room.addTransporter(this);
    }

    setIsDoubleSided(val){
        this.isDoubleSided = val;
    }

    init(){
        // Click point
        const boxSide = this.squareSideLength;
        const boxWidth = boxSide;
        const boxHeight = boxSide;
        const boxDepth = boxSide;
        const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: this.color,
            side: this.isDoubleSided ? THREE.DoubleSide : THREE.FrontSide
        });

        this.mesh = new MeshInteractive((event) => {
            TransportManager.setCurrentRoom(this.room);
        }, cubeGeometry, cubeMaterial);
        this.mesh.rotateZ(Math.PI/4);
        this.mesh.rotateY(Math.PI/4);
        this.mesh.position.x = this.center.x;
        this.mesh.position.y = this.center.y;
        this.room.childrenCenter.add(this.mesh);


        const edges = new THREE.EdgesGeometry( cubeGeometry );

        this.lines = new THREE.LineSegments( edges );
        this.lines.material.transparent = true;
        this.lines.material.opacity = 0.3;
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
    }

    addLines(){
        this.mesh.add(this.lines);
    }

    removeLines(){
        this.mesh.remove(this.lines);
    }
}

export { Transporter }