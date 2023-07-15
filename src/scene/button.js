import * as THREE from 'three';
import { Panel } from "./panel.js";
import { MeshInteractive } from '../interaction';
import { Animation } from '../animation';
import { displayRedirectModal, redirectConfirmButton, redirectModalText } from '../modal';

class Button extends Panel{
    constructor(room, position, size=5, path=""){
        super(room, path, position, size);

        this.action = () => {
            console.log("button clicked");
        };

        this.cubeScale = 1.3;
        this.backgroundOpacity = 0.3;
    }

    setAction(action){
        this.action = action;
    }

    removeBackground(){
        this.setBackgroundOpacity(0);
    }

    setBackgroundOpacity(value){
        this.backgroundOpacity = value;
    }


    async init(callback=()=>{}){
        this.mesh = new THREE.Object3D();
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.mesh.lookAt(0, 0, 0);
        this.imageGroup.mesh.add(this.mesh);

        const texture = await this.loadImage();

        this.logo = this.createMesh(texture, { x: 0, y: 0, z: 0 });
        this.mesh.add(this.logo);


        // Rotating box
        const cubeSide = this.size * this.cubeScale;
        const cubeGeometry = new THREE.BoxGeometry(cubeSide, cubeSide, cubeSide);

        const edges = new THREE.EdgesGeometry( cubeGeometry );

        this.edgesMesh = new THREE.LineSegments( edges );
        this.edgesMesh.material.transparent = true;
        this.edgesMesh.material.opacity = 0.4;

        this.cubeMesh = new MeshInteractive(this.action, cubeGeometry, new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: this.backgroundOpacity,
            side: THREE.BackSide

        }))

        // this.cubeMesh = new THREE.Mesh( cubeGeometry, new THREE.MeshBasicMaterial({
        //     color: 0xffffff,
        //     transparent: true,
        //     opacity: this.backgroundOpacity,
        //     side: THREE.BackSide

        // }));

        this.cube = new THREE.Object3D();
        this.cube.add( this.edgesMesh );
        this.cube.add( this.cubeMesh );

        this.mesh.add( this.cube );
        
        this.cube.rotateZ(Math.PI/4);
        this.cube.rotateY(Math.PI/4);
    

        // add rotating animation
        this.animation = new Animation(
            0, Math.PI*0.001, 1000,
            (ratio, animation) => {
                let v3 = new THREE.Vector3(1, 1, 1);
                v3.normalize();
                this.cube.rotateOnAxis(v3, animation.end);
            }, undefined);
    
        this.animation.setIsLooping(true);
        this.animation.init();

        callback();
    }
}

class RedirectButton extends Button{
    constructor(room, position, size=5, imagePath="", url=""){
        super(room, position, size, imagePath);

        this.url = url;
        this.text = url;


        let redirection = () => {

            redirectModalText.innerHTML = this.text;
            redirectConfirmButton.href = this.url;
            displayRedirectModal();
        }

        this.setAction(redirection);

    }
}

class GithubButton extends RedirectButton{
    constructor(room, position, size=5, repoPath=""){
        super(room, position, size, "images/github.png", repoPath);

        // this.text = repoName + " repository";
        this.text = "Open the Github repo?";
    }
}

class WebsiteButton extends RedirectButton{
    constructor(room, position, size=5, url=""){
        super(room, position, size, "images/redirect.png", url);

        this.text = "Open the live demo?";

    }
}

class LinkedinButton extends RedirectButton{
    constructor(room, position, size=5, url=""){
        super(room, position, size, "images/linkedin.png", url);

        this.text = "Open the likedin profile?";

    }
}

export { Button, GithubButton, WebsiteButton, LinkedinButton }