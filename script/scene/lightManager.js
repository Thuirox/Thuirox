import * as THREE from '../libs/three.module.js';
import { Animation } from '../animation.js';

class LightManager{
    constructor(parent, position){
        this.position = position;
        this.parent = parent;
    }
    

    initLights(){
        // Light
        const color = 0xFFFFFF;
        const intensity = 1;

        this.topLight = new THREE.PointLight(color, intensity, 30);
        this.topLight.position.set(this.position.x, this.position.y+10, this.position.z);

        this.bottomLight = new THREE.PointLight(color, intensity, 20);
        this.bottomLight.position.set(this.position.x, this.position.y-10, this.position.z);

        this.parent.add(this.topLight);
        this.parent.add(this.bottomLight);

        this.turnOffAnimation = new Animation(
            1, 0, 500,
            (ratio) => {
                this.topLight.intensity = 1 - ratio;
                this.bottomLight.intensity = 1 - ratio;
        }, undefined);

        this.turnOnAnimation = new Animation(
            1, 0, 500,
            (ratio) => {
                this.topLight.intensity = ratio;
                this.bottomLight.intensity = ratio;
        }, undefined);
    }

    turnOffLights(){
        if(!this.turnOffAnimation){
            console.log("Light turn off animation not initialized yet");
        } else {
            this.turnOffAnimation.init(this.turnOffAnimation.isOver);
        }
    }

    turnOnLights(){
        if(!this.turnOnAnimation){
            console.log("Light turn on animation not initialized yet");
        } else {
            this.turnOnAnimation.init(this.turnOnAnimation.isOver);
        }
    }
}

export { LightManager }