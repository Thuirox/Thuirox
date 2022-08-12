import * as THREE from '../libs/three.module.js';
import { addInteraction } from '../interaction.js';
import { Animation, animationController } from '../animation.js';
import { Chain } from '../utils.js';


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

        
        const square = new SquareRoom(this.scene, this.camera, center, roomColor);

        square.setIsDoubleSided(false);
        // square.init();

        // room.addSquare(square);

        room.addImage("../../images/whenisnextlolclash/index.png")

        return room;
    }


    createSecondRoom(){
        const center = { x:28, y:0, z:0 };
        const roomColor = 0xD44D5C;
        const room = new SphereRoom(this.scene, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();

        
        const square = new SquareRoom(this.scene, this.camera, center, roomColor);

        square.setIsDoubleSided(false);
        square.init();

        room.addSquare(square);

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

        this.lightManager =  new LightManager(this.scene, this.center);

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

    addImageFolder(folderPath){

    }

    async addImage(imagePath){
        let texture = await loader.loadAsync(imagePath);
        // ! the material isn't double sided
        let material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
        });
          
        // create a plane geometry for the image with a width of 10
        // and a height that preserves the image's aspect ratio
        // let geometry = new THREE.PlaneGeometry(10, 10);
        const phiLength = Math.PI * 0.2;
        const thetaLength = phiLength * texture.image.height / texture.image.width;
        let geometry = new THREE.SphereGeometry(20, 30, 30, -Math.PI/2 - phiLength/2, phiLength, Math.PI / 2 - thetaLength/2, thetaLength);
        
        // combine our image geometry and material into a mesh
        let mesh = new THREE.Mesh(geometry, material);

        mesh.scale.set(1.0, texture.image.height / texture.image.width, 1.0);
        
        // set the position of the image mesh in the x,y,z dimensions
        mesh.position.set(0, 0, 15)
        
        // add the image to the scene
        this.scene.add(mesh);
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
        this.sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        this.sphere.position.x = this.center.x;
        this.sphere.position.y = this.center.y;
        this.scene.add(this.sphere);

        this.lightManager.initLights();

    }

    addSquare(square){
        this.square = square;
        this.square.addParent(this);
    }

}

class LightManager{
    constructor(scene, center){
        this.center = center;
        this.scene = scene;

    }
    

    initLights(){
        // Light
        const color = 0xFFFFFF;
        const intensity = 1;

        this.topLight = new THREE.PointLight(color, intensity, 30);
        this.topLight.position.set(this.center.x, this.center.y+10, this.center.z);

        this.bottomLight = new THREE.PointLight(color, intensity, 20);
        this.bottomLight.position.set(this.center.x, this.center.y-10, this.center.z);

        this.scene.add(this.topLight);
        this.scene.add(this.bottomLight);
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
    constructor(scene, camera, center, color){
        this.scene = scene;
        this.center = center;
        this.color = color;

        this.camera = camera

        this.isDoubleSided = true;

        this.parent;
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
        const boxSide = 7.5;
        const boxWidth = boxSide;
        const boxHeight = boxSide;
        const boxDepth = boxSide;
        const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: this.color,
            side: cubeFace
        });
    
        this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        this.cube.rotateZ(Math.PI/4);
        this.cube.rotateY(Math.PI/4);
        this.cube.position.x = this.center.x;
        this.cube.position.y = this.center.y;
        this.scene.add(this.cube);
    
    
        this.animation = new Animation(
            0, Math.PI*0.001, 1000,
            (ratio, animation) => {
                let v3 = new THREE.Vector3(1, 1, 1);
                v3.normalize();
                this.cube.rotateOnAxis(v3, animation.end);
            }, undefined);
    
        this.animation.setIsLooping(true);
        this.animation.init();
    
        animationController.add(this.animation);
    
        addInteraction(this.cube, (event) => {
            debug_text.textContent = `Interacted x:${this.center.x}`;
            console.log(`Interacted ${this.center.x}`);
            this.camera.goTo(this.center.x, this.center.y, this.center.z);
            
            // this.parent.lightManager.turnOffLights();
            // this.parent.next?.lightManager.turnOnLights();
            // this.parent.previous?.lightManager.turnOnLights();
        });
    }

    addParent(parent){
        this.parent = parent;
    }
}



export { PopulatedRooms };