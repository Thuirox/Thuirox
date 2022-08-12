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

export { Room }