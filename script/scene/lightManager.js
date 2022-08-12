import * as THREE from '../libs/three.module.js';

class LightManager{
    constructor(parent, center){
        this.center = center;
        this.parent = parent;

    }
    

    initLights(){
        // Light
        const color = 0xFFFFFF;
        const intensity = 1;

        this.topLight = new THREE.PointLight(color, intensity, 30);
        this.topLight.position.set(this.center.x, this.center.y+10, this.center.z);

        this.bottomLight = new THREE.PointLight(color, intensity, 20);
        this.bottomLight.position.set(this.center.x, this.center.y-10, this.center.z);

        this.parent.add(this.topLight);
        this.parent.add(this.bottomLight);
    }

    turnOffLights(){
        const lightAnimation = new Animation(
            1, 0, 500,
            (ratio, animation) => {
                this.topLight.intensity = 1 - ratio;
                this.bottomLight.intensity = 1 - ratio;
            }, undefined);
    
        lightAnimation.init();
    
        animationController.add(lightAnimation);
    }

    turnOnLights(){
        const lightAnimation = new Animation(
            1, 0, 500,
            (ratio, animation) => {
                this.topLight.intensity = ratio;
                this.bottomLight.intensity = ratio;
            }, undefined);
    
        lightAnimation.init();
    
        animationController.add(lightAnimation);
    }
}

export { LightManager }