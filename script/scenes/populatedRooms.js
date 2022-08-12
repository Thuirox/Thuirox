import * as THREE from '../libs/three.module.js';
import { addInteraction } from '../interaction.js';
import { Animation, animationController, DifferedAnimation } from '../animation.js';
import { Chain, addRandomness } from '../utils.js';


const colors = [
    0x773344,
    0xE3B5A4,
    0xF5E9E2,
    0x0B0014,
    0xD44D5C
]



class PopulatedRooms{

    constructor(scene, camera, renderer, nbBalls = 10){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.nbBalls = nbBalls;

        this.sphereRadius = 15;
    }
    
    init(){
        this.setupScene();
    }

    setupScene(){
        const firstRoom = this.createFirstRoom();
        const secondRoom = this.createSecondRoom();

        firstRoom.setNext(secondRoom);
    
    
        // Global light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
    
        this.renderer.render(this.scene, this.camera);
    }

    createFirstRoom(){
        const center = { x:0, y:0, z:0 };
        // const roomColor = 0x0B0014;
        const roomColor = colors[1];
        const room = new SphereRoom(this.scene, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();

        room.init();

        
        const square = new SquareRoom(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);

        square.init();

        let imageDesktop = new Image(this.scene, "../../images/whenisnextlolclash/index.png", {x:4, y:2.2, z:-8}, 7, 1);
        imageDesktop.init(() => {
            imageDesktop.addAnimation();
            room.addImage(imageDesktop);
        });

        let imageMobile = new Image(this.scene, "../../images/whenisnextlolclash/indexMobile.png", {x:-4, y:-3.5, z:-8}, 3, 1);
        imageMobile.init(() => {
            imageMobile.addAnimation();
            room.addImage(imageMobile);
        });

        let imageTitle = new Image(this.scene, "../../images/whenisnextlolclash/title.png", {x:0, y:0, z:-9}, 8);
        imageTitle.init(() => {
            room.addImage(imageTitle);
        });
        

        return room;
    }

    
    createSecondRoom(){
        const center = { x:28, y:0, z:0 };
        const roomColor = 0xD44D5C;
        const pivot = new THREE.Object3D();
        this.scene.add(pivot);
        const room = new SphereRoom(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();

        
        const square = new SquareRoom(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);
        square.init();

        // pivot.rotateY(1);

        return room;

    }
}

const loader = new THREE.TextureLoader();

class SphereRoom extends Chain{
    constructor(scene, camera, center, radius, color){
        super();

        this.scene = scene;
        this.camera = camera;

        this.center = center;
        this.radius = radius;

        this.color = color;

        this.clippingPlanes = [];

        this.clippingPlanesOffset = 1;

        this.sphereNbSegments = 70;
        this.ballsOfLightNbSegments = 30;

        this.ballsOfLightRadius = 1;

        this.isEntry = false;
        this.isExit = false;

        this.lightManager =  null;

        this.images = [];
    }

    addEntry(){
        this.entryPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), -this.center.x + this.radius - this.clippingPlanesOffset);
        this.clippingPlanes.push(this.entryPlane);

        this.isEntry = true;
    }

    addExit(){
        this.exitPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), this.center.x + this.radius - this.clippingPlanesOffset);
        this.clippingPlanes.push(this.exitPlane);

        this.isExit = true;
    }

    addImage(image){
        this.images.push(image);
        this.mesh.add(image.mesh);
    }

    showImages(){
        this.images.forEach((image) => {
            image.show();
        });
    }

    hideImages(){
        this.images.forEach((image) => {
            image.hide({ x: image.position.x, y: -20, z: image.position.z });
        });
    }

    init(){
        const sphereGeometry = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments );

        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: this.color,
            clippingPlanes: this.clippingPlanes,
            clipShadows: true,
            clipIntersection: false
        });
        this.mesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
        this.mesh.position.x = this.center.x;
        this.mesh.position.y = this.center.y;
        this.scene.add(this.mesh);

        this.lightManager = new LightManager(this.mesh, { x:0, y:0, z:0 })
        this.lightManager.initLights();

    }

    addSquare(square){
        this.square = square;
    }

}

class Image{
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
                        x:animation.args.image.position.x + offsetX * relativeRatio, 
                        y:animation.args.image.position.y + offsetY * relativeRatio, 
                        z:animation.args.image.position.z
                    }
                    animation.args.image.mesh.position.set(position.x, position.y, position.z);

                } else {
                    let relativeRatio = (ratio - 0.5) / 0.5;

                    let position = {
                        x:animation.args.image.position.x + offsetX * (1-relativeRatio), 
                        y:animation.args.image.position.y + offsetY * (1-relativeRatio), 
                        z:animation.args.image.position.z
                    }
                    animation.args.image.mesh.position.set(position.x, position.y, position.z);
                }
            }, undefined, { image: this });
    
        imageAnimation.init();
        imageAnimation.setIsLooping(true);
    
        animationController.add(imageAnimation);
    }
}

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

class SquareRoom{
    constructor(parent, camera, center, color, squareSideLength=4.5){
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
            debug_text.textContent = `Interacted x:${this.center.x}`;
            console.log(`Interacted ${this.center.x}`);

            let v3 = new THREE.Vector3();
            let targetPosition = this.mesh.getWorldPosition(v3);
            this.camera.goTo(targetPosition.x, targetPosition.y, targetPosition.z);
            
            this.parent.showImages();
            this.parent.next?.hideImages();
            this.parent.previous?.hideImages();
        });
    }
}



export { PopulatedRooms };