import * as THREE from '../libs/three.module.js';
import { loader } from '../const.js';
import { addRandomness } from '../utils.js';
import { Animation, animationController, DifferedAnimation } from '../animation.js';

class Panel{
    constructor(scene, path, position, size=5, opacity=0.7){
        this.scene = scene;
        this.path = path;

        this.position = position;
        this.initialPosition = position;

        this.size = size;

        this.opacity = opacity;
    }


    async init(callback=()=>{}){
        let texture = await loader.loadAsync(this.path);
        // texture.minFilter = THREE.LinearMipmapLinearFilter;

        // ! the material isn't double sided
        let material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: this.opacity
        });
          
        let geometry = new THREE.PlaneGeometry(this.size, this.size);
        
        // combine our image geometry and material into a mesh
        this.mesh = new THREE.Mesh(geometry, material);

        // Scale mesh to match image ratio
        this.mesh.scale.set(1, texture.image.height / texture.image.width, 1.0);
        
        // set the position of the image mesh in the x,y,z dimensions
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        
        // add the image to the scene
        this.scene.add(this.mesh);

        callback();
    }

    hide(targetPosition){
        this.moveTo(targetPosition);
    }

    show(){
        this.moveTo(this.initialPosition, 500, 1000);
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
            null, null, duration,
            (ratio, animation) => {
                
                let position = {
                    x: sourcePosition.x + (targetPosition.x - sourcePosition.x) * ratio,
                    y: sourcePosition.y + (targetPosition.y - sourcePosition.y) * ratio,
                    z: sourcePosition.z + (targetPosition.z - sourcePosition.z) * ratio
                };
                this.setPosition(position);
            }, 
            (animation) => {
                let position = targetPosition;
                this.setPosition(position);
            }
        );

        const differedAnimation =  new DifferedAnimation(imageAnimation, differedDuration)
        differedAnimation.init();
    
        animationController.add(differedAnimation);

    }

    addAnimation(){
        
        let offsetX = 0;
        let offsetY = 0.2;

        offsetY = addRandomness(offsetY, 0.5);

        let animationDuration = 5000;
        // animationDuration = addRandomness(animationDuration, 0.5)
        
        const imageAnimation = new Animation(
            1, 0, animationDuration,
            (ratio, animation) => {
                if(ratio < 0.5){
                    let relativeRatio = ratio / 0.5;
                    let position = {
                        x:this.position.x + offsetX * relativeRatio, 
                        y:this.position.y + offsetY * relativeRatio, 
                        z:this.position.z
                    }
                    this.mesh.position.set(position.x, position.y, position.z);

                } else {
                    let relativeRatio = (ratio - 0.5) / 0.5;

                    let position = {
                        x:this.position.x + offsetX * (1-relativeRatio), 
                        y:this.position.y + offsetY * (1-relativeRatio), 
                        z:this.position.z
                    }
                    this.mesh.position.set(position.x, position.y, position.z);
                }
            });
    
        imageAnimation.init();
        imageAnimation.setIsLooping(true);
    
        animationController.add(imageAnimation);
    }
}

export { Panel }