import * as THREE from '../libs/three.module.js';
import { LightManager } from "./lightManager.js";
import { Chain } from "../utils.js";
import { angleBetweenSphere } from '../const.js';

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

        this.pivotGlobalRotation = new THREE.Object3D();
        this.scene.add(this.pivotGlobalRotation);

        this.pivotGlobalRotation.add(this.mesh);

        this.mesh.rotateY(angleBetweenSphere);
        this.pivotGlobalRotation.rotateY(angleBetweenSphere);


        this.pivotSphereElements = new THREE.Object3D();


        const jointSizeAngle = Math.PI - 2*this.openAngle - 0.1;

        const orificeFullSize = (Math.PI / 2) - angleBetweenSphere;

        const entryOrifice = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, 2*Math.PI, this.openAngleEntry, orificeFullSize - this.openAngleEntry );
        const exitOrifice = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, 2*Math.PI, this.openAngleExit, orificeFullSize - this.openAngleExit );
        const jointUpper = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, jointSizeAngle, 0, Math.PI);
        const jointLower = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, jointSizeAngle, 0, Math.PI);

        const capSize = Math.PI - orificeFullSize - 2* angleBetweenSphere;
        const cap = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, 2 * Math.PI, 0, capSize);
        
        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: this.color,
            clipShadows: true,
            clipIntersection: false
        });
        this.meshEntryOrifice = new THREE.Mesh( entryOrifice, sphereMaterial );
        this.meshExitOrifice = new THREE.Mesh( exitOrifice, sphereMaterial );
        this.meshjointUpper = new THREE.Mesh( jointUpper, sphereMaterial );
        this.meshjointLower = new THREE.Mesh( jointLower, sphereMaterial );
        this.meshCap = new THREE.Mesh( cap, sphereMaterial );


        this.mesh.add(this.pivotSphereElements);

        this.pivotSphereElements.add(this.meshEntryOrifice);
        this.pivotSphereElements.add(this.meshExitOrifice);
        this.pivotSphereElements.add(this.meshjointUpper);
        this.pivotSphereElements.add(this.meshjointLower);
        this.pivotSphereElements.add(this.meshCap);


        entryOrifice.rotateX(- angleBetweenSphere);

        exitOrifice.rotateX(- Math.PI);
        exitOrifice.rotateX(angleBetweenSphere);


        this.pivotSphereElements.rotateZ(Math.PI / 2);

        jointUpper.rotateZ(- Math.PI);
        jointUpper.rotateY(jointSizeAngle / 2);
        jointUpper.rotateX(Math.PI/2);

        jointLower.rotateY(-jointSizeAngle / 2);
        jointLower.rotateX(Math.PI/2);


        cap.rotateX(Math.PI/2);

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