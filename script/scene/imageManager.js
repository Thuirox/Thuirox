import * as THREE from '../libs/three.module.js';
import { Animation, DifferedAnimation } from '../animation.js';

class ImageManager{
    constructor(parent, position){
        this.parent = parent;

        this.position = position;
        this.initialPosition = position;

        this.mesh = null;
        this.staticMesh = null;

        this.images = [];
        this.statics = [];
    }

    init(){
        // Add reference point for animated image.
        this.mesh =  new THREE.Object3D();
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);

        this.parent.mesh.add(this.mesh);

        // Add reference point for static image.
        this.staticMesh =  new THREE.Object3D();
        this.staticMesh.position.set(this.initialPosition.x, this.initialPosition.y, this.initialPosition.z);

        this.parent.mesh.add(this.staticMesh);
    }


    addImage(image){
        this.images.push(image);
        this.mesh.add(image);
    }

    addStatic(imageMesh){
        this.statics.push(imageMesh);
        this.staticMesh.add(imageMesh);
    }


    showImages(){
        this.moveTo(this.initialPosition, 500, 1000);
    }

    hideImages(){
        this.moveTo({ x: this.mesh.position.x, y: -20, z: this.mesh.position.z });
    }


    setPosition(position){
        this.position = position;
        this.mesh.position.set(position.x, position.y, position.z);
    }

    moveTo(targetPosition, duration = 2000, differedDuration = 0){

        let sourcePosition = {
            x: this.position.x, 
            y: this.position.y, 
            z: this.position.z
        };

        const imageAnimation = new Animation(
            sourcePosition, targetPosition, duration,
            (ratio, a) => {
                
                let position = {
                    x: a.start.x + (a.end.x - a.start.x) * ratio,
                    y: a.start.y + (a.end.y - a.start.y) * ratio,
                    z: a.start.z + (a.end.z - a.start.z) * ratio
                };
                this.setPosition(position);
            }, 
            (a) => {
                let position = a.end;
                this.setPosition(position);
            }
        );

        const differedAnimation =  new DifferedAnimation(imageAnimation, differedDuration)
        differedAnimation.init();

    }
}

export { ImageManager }