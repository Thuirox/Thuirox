import * as THREE from '../libs/three.module.js';
import { LightManager } from "./lightManager.js";
import { Chain } from "../utils.js";

class Room extends Chain{
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
        
        this.openAngleEntry = 0;
        this.openAngleExit = 0;

        this.lightManager =  null;

        this.images = [];

        this.openAngle = Math.PI/8;
    }

    addEntry(){
        // -x side
        this.openAngleEntry = this.openAngle;
        this.isEntry = true;
    }

    addExit(){
        // +x side
        this.openAngleExit = this.openAngle;
        this.isExit = true;
    }

    addImage(image){
        this.images.push(image);
        this.mesh.add(image.mesh);
        image.mesh.lookAt(this.center.x, this.center.y, this.center.z);
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
        this.mesh = new THREE.Object3D();
        this.scene.add(this.mesh);

        
        const halfSphereGeometry1 = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, Math.PI, this.openAngleEntry, Math.PI  - this.openAngleExit - this.openAngleEntry );
        const halfSphereGeometry2 = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, Math.PI, Math.PI, this.openAngleEntry, Math.PI  - this.openAngleExit - this.openAngleEntry );

        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: this.color,
            clipShadows: true,
            clipIntersection: false
        });
        this.meshHalf1 = new THREE.Mesh( halfSphereGeometry1, sphereMaterial );
        this.meshHalf2 = new THREE.Mesh( halfSphereGeometry2, sphereMaterial );

        this.meshHalf1.rotateZ(Math.PI / 2);
        this.meshHalf2.rotateZ(Math.PI / 2);

        this.mesh.add(this.meshHalf1);
        this.mesh.add(this.meshHalf2);

        this.lightManager = new LightManager(this.mesh, { x:0, y:0, z:0 })
        this.lightManager.initLights();

    }

    setCenter(center){
        this.center = center;
        this.mesh.position.x = this.center.x;
        this.mesh.position.y = this.center.y;
        this.mesh.position.z = this.center.z;

    }

    addSquare(square){
        this.square = square;
    }

}

export { Room }