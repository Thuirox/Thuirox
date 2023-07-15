import * as THREE from 'three';
import { Animation, DifferedAnimation } from '../animation';

class ImageGroup {
    constructor(parentMesh, position){
        this.parentMesh = parentMesh;

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

        this.parentMesh.add(this.mesh);

        // Add reference point for static image.
        this.staticMesh =  new THREE.Object3D();
        this.staticMesh.position.set(this.initialPosition.x, this.initialPosition.y, this.initialPosition.z);

        this.parentMesh.add(this.staticMesh);
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
        this.images.forEach(( image ) => {
            image.turnOnInteraction();
        });
    }

    hideImages(){
        this.moveTo({ x: this.mesh.position.x, y: -20, z: this.mesh.position.z });
        this.images.forEach(( image ) => {
            image.turnOffInteraction();
        });
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

export { ImageGroup }