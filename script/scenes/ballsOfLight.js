import * as THREE from '../libs/three.module.js';
import { addInteraction } from '../interaction.js';
import { Animation, animationController } from '../animation.js';


class BallsOfLight{

    constructor(scene, camera, renderer, nbBalls = 10){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.nbBalls = nbBalls;

        this.sphereRadius = 15;
        this.sphereNbSegments = 70;

        this.ballsOfLightRadius = 1;
    }
    
    init(){
        this.setupScene();
    }

    setupScene(){
        this.createFirstRoom();
        this.createSecondRoom();
    
    
        // Global light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
    
        this.renderer.render(this.scene, this.camera);
    }

    createFirstRoom(){
        const center = { x:0, y:0, z:0 };
        const roomColor = 0x0B0014;
        const room = new SphereRoom(this.scene, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();

        room.init();

        
        const square = new SquareRoom(this.scene, this.camera, center, roomColor);

        square.setIsDoubleSided(false);
        square.init();

        room.addSquare(square);
        
        for(let ballIndex = 0; ballIndex < this.nbBalls; ballIndex++){
            this.ballsOfLight(ballIndex);
        }
    }

    ballsOfLight(ballIndex = 0){
        const nbSegments = 30;
        const radiusPosition = this.sphereRadius - this.ballsOfLightRadius - 0.1;

        const angleY = (Math.PI / (this.nbBalls / 2)) * ballIndex;
        if(angleY > Math.PI - Math.PI/6 && angleY < Math.PI + Math.PI/6){
            return;
        }
    
        const sphereGeometry = new THREE.SphereGeometry( this.ballsOfLightRadius, nbSegments, nbSegments );
        const sphereMaterial = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            color: 0xffffff
        });
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        this.scene.add(sphere);
        
        const axis = new THREE.Vector3(-1, 0, 0);
        const rotationAxisY = new THREE.Vector3(0, 1, 0);

        const rotationAxisZ = new THREE.Vector3(0, 0, 1);
        const angleZ = Math.PI / 20 * Math.sin((ballIndex) * (4 * Math.PI / this.nbBalls));
        axis.applyAxisAngle( rotationAxisZ, angleZ );

        axis.applyAxisAngle( rotationAxisY, angleY );
        sphere.translateOnAxis( axis, radiusPosition );
    }


    createSecondRoom(){
        const center = { x:28, y:0, z:0 };
        const roomColor = 0xD44D5C;
        const room = new SphereRoom(this.scene, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();

        
        const square = new SquareRoom(this.scene, this.camera, center, roomColor);

        square.init();

        room.addSquare(square);

    }
}

class SphereRoom{
    constructor(scene, camera, center, radius, color){
        this.scene = scene;
        this.camera = camera;

        this.center = center;
        this.radius = radius;

        this.color = color;

        this.clippingPlanes = [];

        this.clippingPlanesOffset = 1;

        this.sphereNbSegments = 70;
    }

    addEntry(){
        this.entryPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), -this.center.x + this.radius - this.clippingPlanesOffset);
        this.clippingPlanes.push(this.entryPlane);

    }

    addExit(){
        this.exitPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), this.center.x + this.radius - this.clippingPlanesOffset);
        this.clippingPlanes.push(this.exitPlane);
    }

    initLights(){
        // Light
        const color = 0xFFFFFF;
        const intensity = 1;

        this.topLight = new THREE.PointLight(color, intensity, 30);
        this.topLight.position.set(this.center.x, this.center.y+10, this.center.z);

        this.bottomLight = new THREE.PointLight(color, intensity, 20);
        this.bottomLight.position.set(this.center.x, this.center.y-10, this.center.z);
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

        this.initLights();

        this.scene.add(this.topLight);
        this.scene.add(this.bottomLight);

    }

    addSquare(square){
        this.square = square;
        this.square.addParent(this);
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
                animation.args.cube.rotateOnAxis(v3, animation.end);
            }, undefined, { cube: this.cube });
    
        this.animation.setIsLooping(true);
        this.animation.init();
    
        animationController.add(this.animation);
    
        const this_ = this;
        addInteraction(this.cube, function(event){
            debug_text.textContent = `Interacted x:${this_.center.x}`;
            console.log(`Interacted ${this_.center.x}`);
            this_.camera.goTo(this_.center.x, this_.center.y, this_.center.z);
        });
    }

    addParent(parent){
        this.parent = parent;
    }
}


export { BallsOfLight };