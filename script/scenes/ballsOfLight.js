import * as THREE from '../libs/three.module.js';
import { addInteraction } from '../interaction.js';
import { Animation, animationController } from '../animation.js';


class BallsOfLight{

    constructor(scene, camera, renderer, nbBalls = 30){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.nbBalls = nbBalls;

        this.sphereRadius = 15;
        this.sphereNbSegments = 70;
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

        const exitPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), center.x + 14);

        const sphereGeometry = new THREE.SphereGeometry( this.sphereRadius, this.sphereNbSegments, this.sphereNbSegments );
        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: roomColor,
            clippingPlanes: [ exitPlane ],
            clipShadows: true,
            clipIntersection: false
        });
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        sphere.position.x = center.x;
        sphere.position.y = center.y;
        this.scene.add(sphere);


        this.createSquare(roomColor, center)


        for(let ballIndex = 0; ballIndex < this.nbBalls; ballIndex++){
            this.ballsOfLight(ballIndex);
        }



    }

    ballsOfLight(ballIndex = 0){
        const nbSegments = 30;
        const sphereRadius = 0.5;
        const radiusPosition = this.sphereRadius - sphereRadius - 0.1;

        const angleY = (Math.PI / (this.nbBalls / 2)) * ballIndex;
        if(angleY > Math.PI - Math.PI/6 && angleY < Math.PI + Math.PI/6){
            return;
        }
    
        const sphereGeometry = new THREE.SphereGeometry( sphereRadius, nbSegments, nbSegments );
        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.BackSide,
            color: 0xffffff
        });
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        this.scene.add(sphere);
        
        const axis = new THREE.Vector3(-1, 0, 0);
        const rotationAxisY = new THREE.Vector3(0, 1, 0);

        // Test to move vertical the balls
        // const rotationAxisZ = new THREE.Vector3(0, 0, 1);
        // const angleZ = ballIndex * Math.PI / 8;
        // axis.applyAxisAngle( rotationAxisZ, angleZ );

        axis.applyAxisAngle( rotationAxisY, angleY );
        sphere.translateOnAxis( axis, radiusPosition );
    
        // Light
        const color = 0xFFFFFF;
        const intensity = 0.8;
    
        const pointLight = new THREE.PointLight( color, intensity, sphereRadius * 20 );

        this.scene.add(pointLight);
        
        pointLight.translateOnAxis( axis, radiusPosition );
    

    }


    createSecondRoom(){
        const center = { x:28, y:0, z:0 };
        const roomColor = 0xD44D5C;

        const exitPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), center.x + 14);
        const entryPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), -center.x + 14);

        const sphereGeometry = new THREE.SphereGeometry( this.sphereRadius, this.sphereNbSegments, this.sphereNbSegments );
        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: roomColor,
            clippingPlanes: [ entryPlane, exitPlane ],
            clipShadows: true,
            clipIntersection: false
        });
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        sphere.position.x = center.x;
        sphere.position.y = center.y;
        this.scene.add(sphere);

        // Light
        const color = 0xFFFFFF;
        const intensity = 1;

        const sun = new THREE.PointLight(color, intensity, 30);
        sun.position.set(center.x, center.y+10, center.z);
        this.scene.add(sun);

        const bottomLight = new THREE.PointLight(color, intensity, 20);
        bottomLight.position.set(center.x, center.y-10, center.z);
        this.scene.add(bottomLight);

        

        this.createSquare(roomColor, center)

    }

    
    createSquare(roomColor, center){
        // Click point
        const boxSide = 7.5;
        const boxWidth = boxSide;
        const boxHeight = boxSide;
        const boxDepth = boxSide;
        const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color:roomColor
        });
    
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.rotateZ(Math.PI/4);
        cube.rotateY(Math.PI/4);
        cube.position.x = center.x;
        cube.position.y = center.y;
        this.scene.add(cube);
    
    
        let animation = new Animation(
            0, Math.PI*0.001, 1000,
            (ratio, animation) => {
                let v3 = new THREE.Vector3(1, 1, 1);
                v3.normalize();
                animation.args.cube.rotateOnAxis(v3, animation.end)
            }, undefined, { cube: cube });
    
        animation.setIsLooping(true);
        animation.init();
    
        animationController.add(animation);
    
        const this_ = this;
        addInteraction(cube, function(event){
            debug_text.textContent = `Interacted x:${center.x}`;
            console.log(`Interacted ${center.x}`);
            this_.camera.goTo(center.x, center.y, center.z);
        });
    }

    
}


export { BallsOfLight };