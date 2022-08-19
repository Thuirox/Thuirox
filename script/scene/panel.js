import * as THREE from '../libs/three.module.js';
import { loader } from '../const.js';
import { addRandomness } from '../utils.js';
import { Animation, animationController } from '../animation.js';
import { addInteraction } from '../interaction.js';
import { imageContainer } from '../modal.js';

class Panel{
    constructor(room, path, position, size=5, opacity=0.7, isVideo=false){
        this.room = room;
        
        this.imageManager = this.room.imageManager;

        this.path = path;

        this.position = position;
        this.initialPosition = position;

        this.size = size;

        this.opacity = opacity;

        this.isVideo = isVideo;
    }


    async init(callback=()=>{}){
        const texture = await this.loadTexture();

        this.mesh = this.createMesh(texture, this.position);

        // add the panel to the imageManager
        this.imageManager.addImage(this.mesh);

        addInteraction(this.mesh, this.room, () => {
            // On click, make image full screen.
            imageContainer.style.backgroundImage = 'url(' + this.path + ')';
            imageContainer.style.opacity = 1;
            imageContainer.style.pointerEvents = "auto";
        })

        callback();
    }

    createMesh(texture, position){
        let material = new THREE.MeshBasicMaterial({
            map: texture.texture,
            transparent: true,
            opacity: this.opacity,
            side:THREE.DoubleSide
        });
          
        const geometry = new THREE.PlaneGeometry(this.size, this.size);
        
        const mesh = new THREE.Mesh(geometry, material);

        // Scale mesh to match image ratio
        mesh.scale.set(1, texture.height / texture.width, 1.0);
        
        // set the position of the image
        mesh.position.set(position.x, position.y, position.z);
        
        // Make the panel look where it comes from
        mesh.lookAt(0, 0, 0);

        return mesh;
    }

    async loadTexture(){
        if(this.isVideo){
            return this.loadVideo();

        } else {
            return this.loadImage();
        }
    }

    async loadVideo(){
        const video = document.getElementById(this.path);
        video.muted = true; // Mute video to force play. Without this play raises a security error.
        video.play();

        // Best filtering method would be LinearMipmapLinearFilter like for images.
        // But for some reasons when sets on videos, they stop working.
        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.maxFilter = THREE.LinearFilter;

        const width = texture.image.videoWidth;
        const height = texture.image.videoHeight;

        return { texture: texture, width: width, height: height }
    }

    async loadImage(){
        const texture = await loader.loadAsync(this.path);
        const width = texture.image.width;
        const height = texture.image.height;

        return { texture: texture, width: width, height: height }
    }

    addAnimation(){
        let offsetX = 0;
        let offsetY = 0.2;

        offsetY = addRandomness(offsetY, 0.5);

        let animationDuration = 5000;
        
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

class Title extends Panel{
    constructor(room, path, position, size=5, opacity=0.7){
        super(room, path, position, size, opacity, false);
    }

    
    async init(callback=()=>{}){
        const texture = await this.loadImage();

        this.mesh = this.createMesh(texture, this.position);

        this.imageManager.addStatic(this.mesh);

        callback();
    }
}

export { Panel, Title }