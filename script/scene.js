import * as THREE from './libs/three.module.js';
import { Font } from './libs/FontLoader.js';
import { TTFLoader } from './libs/TTFLoader.js';
import { addInteraction } from './interaction.js';
import { Animation, animationController } from './animation.js';

/**
 * 
 * @param {Scene} scene 
 * @param {Object:{x:integer, y:integer, z:integer}} center 
 */
function createRoom(scene, center={x:0, y:0, z:0}, roomColor=0xaaaa44, entry=true, exit=true, isCube=true){
    let clippingPlanes = []
    if(entry){
        const entryPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), -center.x + 14);
        clippingPlanes.push(entryPlane);
    }
    if(exit){
        const exitPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), center.x + 14);
        clippingPlanes.push(exitPlane);
    }

    const sphereGeometry = new THREE.SphereGeometry( 15, 70, 70 );
    const sphereMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: roomColor,
        clippingPlanes: clippingPlanes,
        clipShadows: true,
        clipIntersection: false
    });
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.x = center.x;
    sphere.position.y = center.y;
    scene.add(sphere);

    

    // Light
    const color = 0xFFFFFF;
    const intensity = 1;

    const sun = new THREE.PointLight(color, intensity, 30);
    sun.position.set(center.x, center.y+10, center.z);
    scene.add(sun);

    const bottomLight = new THREE.PointLight(color, intensity, 20);
    bottomLight.position.set(center.x, center.y-10, center.z);
    scene.add(bottomLight);

    

    if(isCube){
        // Click point
        const boxSide = 7.5;
        const boxWidth = boxSide;
        const boxHeight = boxSide;
        const boxDepth = boxSide;
        const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color:roomColor,
            side: THREE.DoubleSide
        });
    
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.rotateZ(Math.PI/4);
        cube.rotateY(Math.PI/4);
        cube.position.x = center.x;
        cube.position.y = center.y;
        scene.add(cube);
    
    
        let animation = new Animation(
            0, Math.PI*0.001, 1000,
            (ratio, animation) => {
                animation.args.cube.rotation.y += animation.end;
            }, undefined, { cube: cube });
    
        animation.setIsLooping(true);
        animation.init();
    
        animationController.add(animation);
    
        addInteraction(cube, function(event){
            debug_text.textContent = `Interacted x:${center.x}`;
            console.log(`Interacted ${center.x}`);
            camera.goTo(center.x, center.y, center.z);
        });

    }
}


function createText(scene){
    const textX = -30;
    const textSize = 1.4;
    const textColor = 0xC8ADB4;

    const loader = new TTFLoader();
    loader.load( 'fonts/Cinzel-Regular.ttf', function ( json ) {
        const font = new Font(json);

        const nameContent = 'Anthony Bayet';
        const nameShapes = font.generateShapes( nameContent, textSize );

        const nameGeo = new THREE.ShapeGeometry( nameShapes );

        nameGeo.computeBoundingBox();
        
        const nameMat = new THREE.MeshPhongMaterial( {
            color: textColor,
            side: THREE.DoubleSide
        } );

        
        const name = new THREE.Mesh( nameGeo, nameMat );
        name.rotateY(Math.PI/2);
        name.position.x = textX;
        name.position.z = 0.5 * ( nameGeo.boundingBox.max.x - nameGeo.boundingBox.min.x );
        name.position.y = 1 * ( nameGeo.boundingBox.max.y - nameGeo.boundingBox.min.y );
        name.castShadow = true;
        scene.add(name);

        const titleContent = 'Software Engineer';
        const titleShapes = font.generateShapes( titleContent, textSize-0.3*textSize );

        const titleGeo = new THREE.ShapeGeometry( titleShapes );

        titleGeo.computeBoundingBox();
        
        const titleMaterial = new THREE.MeshPhongMaterial( {
            color: textColor,
            side: THREE.DoubleSide
        } );
        
        const title = new THREE.Mesh( titleGeo, titleMaterial );
        title.castShadow = true;
        title.rotateY(Math.PI/2);
        title.position.x = textX;
        title.position.z = 0.5 * ( titleGeo.boundingBox.max.x - titleGeo.boundingBox.min.x );
        title.position.y = -1 * ( titleGeo.boundingBox.max.y - titleGeo.boundingBox.min.y );
        scene.add(title);

        // Light
        const color = 0xFFFFFF;
        const intensity = 0.8;

        const spotLight = new THREE.SpotLight( color, intensity );
        spotLight.position.set(-15, 5, 0);

        spotLight.target = name;
        // spotLight.castShadow = true;

        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;

        spotLight.shadow.camera.near = 30;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 50;

        scene.add( spotLight )
    } );
}


var camera;
function setupScene(scene, camera_, renderer){
    // Color palette used: https://coolors.co/773344-e3b5a4-f5e9e2-0b0014-d44d5c
    camera = camera_;
    const colors = [
        // 0x773344,
        // 0xE3B5A4,
        // 0xF5E9E2,
        0x0B0014,
        0xD44D5C
    ]

    let x = 0;
    let entry = true;
    let exit = true;
    let isCube = true;
    for(const color of colors){
        entry = true;
        exit = true;
        isCube = true;
        if(x == 0){
            isCube = false;
            entry = false;
        }
        createRoom(scene, {x:x, y:0, z:0}, color, entry, exit, isCube);

        x += 28;
    }

    createText(scene);


    // Global light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    renderer.render(scene, camera);
}




export { setupScene };