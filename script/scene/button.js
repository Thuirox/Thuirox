import * as THREE from '../libs/three.module.js';
import { Panel } from "./panel.js";
import { loader } from "../const.js";
import { addInteraction } from '../interaction.js';
import { Animation, animationController } from '../animation.js';
import { displayRedirectModal, redirectConfirmButton, redirectModalText } from '../modal.js';

class Button extends Panel{
    constructor(parent, position, size=5, path=""){
        super(parent, path, position, size, 1);

        this.action = () => {
            console.log("button clicked");
        }

        this.cubeScale = 1.2;
    }

    setAction(action){
        this.action = action;
    }


    async init(callback=()=>{}){
        this.mesh = new THREE.Object3D();
        this.parent.mesh.add(this.mesh);
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);

        let texture = await loader.loadAsync(this.path);
        // texture.minFilter = THREE.LinearMipmapLinearFilter;

        // ! the material isn't double sided
        let material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 1
        });
          
        let geometry = new THREE.PlaneGeometry(this.size, this.size);
        
        // combine our image geometry and material into a mesh
        this.logo = new THREE.Mesh(geometry, material);

        // Scale logo to match image ratio
        this.logo.scale.set(1, texture.image.height / texture.image.width, 1.0);
        
        // set the position of the image mesh in the x,y,z dimensions
        this.logo.position.set(0, 0, 0);
        
        // add the image to the parent
        this.mesh.add(this.logo);
        this.logo.lookAt(this.parent.center.x, this.parent.center.y, this.parent.center.z);


        
        // Rotating box
        const boxSide = this.size * this.cubeScale;
        const boxWidth = boxSide;
        const boxHeight = boxSide;
        const boxDepth = boxSide;
        const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

        const edges = new THREE.EdgesGeometry( cubeGeometry );

        this.lines = new THREE.LineSegments( edges );
        this.lines.material.transparent = true;
        this.lines.material.opacity = 0.4;

        this.mesh.add( this.lines );
        this.lines.position.set(0, 0, 0);
        this.lines.lookAt(this.parent.center.x, this.parent.center.y, this.parent.center.z);
        this.lines.rotateZ(Math.PI/4);
        this.lines.rotateY(Math.PI/4);
    
    
        this.animation = new Animation(
            0, Math.PI*0.001, 1000,
            (ratio, animation) => {
                let v3 = new THREE.Vector3(1, 1, 1);
                v3.normalize();
                this.lines.rotateOnAxis(v3, animation.end);
            }, undefined);
    
        this.animation.setIsLooping(true);
        this.animation.init();
    
        animationController.add(this.animation);


        addInteraction(this.logo, this.action);

        callback();
    }
}

class RedirectButton extends Button{
    constructor(parent, position, size=5, imagePath="", url=""){
        super(parent, position, size, imagePath);

        this.url = url;
        this.text = url;


        let redirection = () => {
            // console.log("redirect towards " + this.url);
            redirectModalText.innerHTML = this.text;
            redirectConfirmButton.href = this.url;
            displayRedirectModal();
        }

        this.setAction(redirection);

    }
}

class GithubButton extends RedirectButton{
    constructor(parent, position, size=5, repoPath="", repoName=""){
        super(parent, position, size, "images/github.png", repoPath);

        this.text = repoName + " repository";
    }
}

class WebsiteButton extends RedirectButton{
    constructor(parent, position, size=5, url=""){
        super(parent, position, size, "images/redirect.png", url);

    }
}

export { Button, GithubButton, WebsiteButton }