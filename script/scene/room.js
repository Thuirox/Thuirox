import * as THREE from '../libs/three.module.js';
import { LightManager } from "./lightManager.js";
import { Chain } from "../utils.js";
import { angleBetweenSphere,debugLoading } from '../const.js';
import { ImageManager } from './imageManager.js';

class Room extends Chain{
    constructor(parent, camera, center, radius, color){
        super();

        this.parent = parent;
        this.camera = camera;

        this.center = center;
        this.radius = radius;

        this.color = color;

        this.sphereNbSegments = 40;
        this.capNbSegments = 10;
        this.jointNbSegments = 10;
        
        this.openAngle = Math.PI/8;
        this.openAngleEntry = 0;
        this.openAngleExit = 0;

        this.lightManager =  null;

        this.imageManager =  null;

        this.toPivot = true;

        this.loaded = true;

        this.clickableElements = [];
    }

    addClickable(clickable){
        this.clickableElements.push(clickable);
    }

    setToPivot(val){
        this.toPivot = val;
    }

    addEntry(){
        // -x side
        this.openAngleEntry = this.openAngle;
    }

    addExit(){
        // +x side
        this.openAngleExit = this.openAngle;
    }

    addImage(image){
        this.imageManager.addImage(image);
    }

    showImages(){
        this.imageManager.showImages();
    }

    hideImages(){
        this.imageManager.hideImages();
    }

    load(){
        if(!this.loaded){
            if(debugLoading) console.log("Load", this);
            this.mesh.add(this.childrenCenter);
            this.loaded = true;
            this.transporter.mesh.turnOnInteraction();
            this.lightManager.turnOnLights();
        } 
    }

    unload(){
        if(this.loaded){
            if(debugLoading) console.log("Unloaded", this);
            this.mesh.remove(this.childrenCenter);
            this.loaded = false;
            this.transporter.mesh.turnOffInteraction();
            this.lightManager.turnOffLights();
        } 
    }

    init(){
        /**
         * this.parent is like a planet
         * this.parentPivot is a second center of it, having independent rotation
         * this.mesh is a satellite of this.parent. It is rotating following this.parent secondary center.
         * 
         * this.parent -> this.parentPivot -> this.mesh
         */
        this.mesh = new THREE.Object3D();

        this.parentPivot = new THREE.Object3D();
        this.parent.add(this.parentPivot);

        this.parentPivot.add(this.mesh);

        if(this.toPivot){
            this.parentPivot.rotateY(angleBetweenSphere);
            this.mesh.rotateY(angleBetweenSphere);
        }

        this.childrenCenter = new THREE.Object3D();
        this.mesh.add(this.childrenCenter);


        const orificeFullSize = (Math.PI / 2) - angleBetweenSphere;

        const entryOrifice = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, 2*Math.PI, this.openAngleEntry, orificeFullSize - this.openAngleEntry );
        const exitOrifice = new THREE.SphereGeometry( this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, 2*Math.PI, this.openAngleExit, orificeFullSize - this.openAngleExit );


        const jointSizeAngle = Math.PI - 2*this.openAngle - 0.1;

        const jointUpper = new THREE.SphereGeometry( this.radius, 3, this.jointNbSegments, 0, jointSizeAngle, 0, Math.PI);
        const jointLower = new THREE.SphereGeometry( this.radius, 3, this.jointNbSegments, 0, jointSizeAngle, 0, Math.PI);


        const capSize = Math.PI - orificeFullSize - 2* angleBetweenSphere;
        const cap = new THREE.SphereGeometry( this.radius, this.capNbSegments, this.capNbSegments, 0, 2 * Math.PI, 0, capSize);
        

        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: this.color,
            clipShadows: true,
            clipIntersection: false
        });
        const meshEntryOrifice = new THREE.Mesh( entryOrifice, sphereMaterial );
        const meshExitOrifice = new THREE.Mesh( exitOrifice, sphereMaterial );
        const meshjointUpper = new THREE.Mesh( jointUpper, sphereMaterial );
        const meshjointLower = new THREE.Mesh( jointLower, sphereMaterial );
        const meshCap = new THREE.Mesh( cap, sphereMaterial );


        const pivotSphereElements = new THREE.Object3D();
        this.childrenCenter.add(pivotSphereElements);

        pivotSphereElements.add(meshEntryOrifice);
        pivotSphereElements.add(meshExitOrifice);
        pivotSphereElements.add(meshjointUpper);
        pivotSphereElements.add(meshjointLower);
        pivotSphereElements.add(meshCap);


        entryOrifice.rotateX(- angleBetweenSphere);

        exitOrifice.rotateX(- Math.PI);
        exitOrifice.rotateX(angleBetweenSphere);


        pivotSphereElements.rotateZ(Math.PI / 2);

        jointUpper.rotateZ(- Math.PI);
        jointUpper.rotateY(jointSizeAngle / 2);
        jointUpper.rotateX(Math.PI/2);

        jointLower.rotateY(-jointSizeAngle / 2);
        jointLower.rotateX(Math.PI/2);


        cap.rotateX(Math.PI/2);

        this.lightManager = new LightManager(this.childrenCenter, { x:0, y:0, z:0 });
        this.lightManager.initLights();

        this.imageManager = new ImageManager(this.childrenCenter, { x:0, y:0, z:0 });
        this.imageManager.init();
    }

    setCenter(center){
        this.center = center;
        this.mesh.position.x = this.center.x;
        this.mesh.position.y = this.center.y;
        this.mesh.position.z = this.center.z;

    }

    addTransporter(transporter){
        this.transporter = transporter;
    }

}

export { Room }