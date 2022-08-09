import * as THREE from './three.module.js';
import {THREEx} from './threex.domevents.js';
import {OrbitControls} from './OrbitControls.js';
import {Font} from './FontLoader.js';
import {TTFLoader} from './TTFLoader.js';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;

    let cameraDirection = {duration:0};

    

    // camera setup
    const fov = 70;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 250;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0.001, 0, 0);
    // camera.position.set(40, 20, 20);
    
    const domEvents = new THREEx.DomEvents(camera, canvas);

    const controls = setupManualControls();
    
    var gyroControl = false;
    const updateGyro = setupDeviceOrientationControls();


    const debug_text = document.getElementById("debug_text");
    function switchGyroControl(){
        gyroControl = !gyroControl;
        controls.enabled = !controls.enabled;
        debug_text.textContent = `GyroControl switched`;
    }


    let gyroButton = document.getElementById("gyro-button");
    gyroButton.onclick = switchGyroControl;
    

    var move = false;

    window.addEventListener("mousedown", function(event){
        console.log("mouse down");
        move = false;
    }, false);


    window.addEventListener("mousemove", function(event){
        if(!move){
            console.log("mouse move");
            move = true;
        }
    }, false);




    function addInteraction(object, fct){
        domEvents.addEventListener(object, "mouseup", function(event){
            console.log("mouseup");
            if(!move){
                fct();
            }
        }, false);
    
        // Touchend not detected correctly. Using touchstart instead.
        domEvents.addEventListener(object, "touchstart", function(event){
            console.log("touchstart");
            fct();
        }, false);

    }


    const scene = new THREE.Scene();
    setupScene();


    function render(time) {
        time *= 0.001;  // convert time to seconds

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        if(gyroControl){
            updateGyro();
        } else {
            controls.update();
        }

        // Update camera
        cameraDirection
        let currentTime = Date.now();
        if(cameraDirection.duration != 0){
            let differenceTime = currentTime - cameraDirection.startTime;

            let position;
            let ratio;

            if(differenceTime > cameraDirection.duration){
                position = cameraDirection.endPosition;
                cameraDirection.duration = 0;
            } else {
                ratio = differenceTime / cameraDirection.duration;
                position = {
                    x: cameraDirection.startPosition.x + (cameraDirection.endPosition.x - cameraDirection.startPosition.x) * ratio,
                    y: cameraDirection.startPosition.y + (cameraDirection.endPosition.y - cameraDirection.startPosition.y) * ratio,
                    z: cameraDirection.startPosition.z + (cameraDirection.endPosition.z - cameraDirection.startPosition.z) * ratio
                };
            }
            // console.log(ratio)
            console.log((cameraDirection.endPosition.x - cameraDirection.startPosition.x) * ratio)
            // console.log(position.x)
            // console.log(position.y)
            // console.log(position.z)
            camera.position.set(position.x + cameraDirection.diff, position.y, position.z);
        }
       
       
        renderer.render(scene, camera);
       
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);


    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
    }


    /**
     * 
     * @param {Scene} scene 
     * @param {Object:{x:integer, y:integer, z:integer}} center 
     */
    function createRoom(scene, center={x:0, y:0, z:0}, roomColor=0xaaaa44){
        const exitPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), center.x + 14);
        const entryPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), -center.x + 14);

        const sphereGeometry = new THREE.SphereGeometry( 15, 70, 70 );
        const sphereMaterial = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: roomColor,
            clippingPlanes: [entryPlane, exitPlane],
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

        

        // Click point
        const boxSide = 7;
        const boxWidth = boxSide;
        const boxHeight = boxSide;
        const boxDepth = boxSide;
        const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const cubeMaterial = new THREE.MeshPhongMaterial({color:roomColor});

        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.rotateZ(Math.PI/4);
        cube.rotateY(Math.PI/4);
        cube.position.x = center.x;
        cube.position.y = center.y;
        scene.add(cube);

        addInteraction(cube, function(event){
            debug_text.textContent = `Interacted x:${center.x}`;
            console.log(`Interacted ${center.x}`);
            updateCameraPosition(center.x, center.y, center.z);
        });
    }

    function createText(scene){
        const textX = -30;
        const textBackgroundXDifference = -8;
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
    
    function setupScene(){
        // Color palette used: https://coolors.co/773344-e3b5a4-f5e9e2-0b0014-d44d5c
        const colors = [
            0x773344,
            0xE3B5A4,
            0xF5E9E2,
            0x0B0014,
            0xD44D5C
        ]

        let x = 0;
        for(const color of colors){
            createRoom(scene, {x:x, y:0, z:0}, color);

            x += 28;
        }

        createText(scene);


        // Global light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        renderer.render(scene, camera);
    }

    function updateCameraPosition(x, y, z){
        let xDiff = 0.001;
        if(camera.position.x - x < 0){
            xDiff = -xDiff;
        }

        controls.target.set(x, y, z);
        // camera.position.set(x + xDiff, y, z);
        cameraDirection = {
            startPosition: {
                x:camera.position.x,
                y:camera.position.y,
                z:camera.position.z
            },
            endPosition: {x:x, y:y, z:z},
            startTime: Date.now(),
            duration: 1000,
            diff: xDiff
        }

    }

    function isMobile(){
        // Check if the user is usign a mobile device. https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
        let isMobile;

        // First method working on all devices.
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
        
        isMobile = toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });


        // Seconde method. Not compatible with all devices. 
        // Especially problematic for Iphone using Safari and WebView Android when the site opens up there.
        // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData
        
        // isMobile = navigator.userAgentData.mobile;

        return isMobile;
    }

    function setupManualControls(){
        // Init mouse and touch controls
        const controls = new OrbitControls(camera, canvas);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = true;


        if(isMobile()){
            controls.rotateSpeed = 0.7;
        } else {
            controls.rotateSpeed = 0.5;
        }

        controls.rotateSpeed = 0.5;
        // reverse control
        controls.rotateSpeed *= -1;

        controls.target.set(0, 0, 0);

        controls.update();

        controls.enabled = true;

        return controls;
    }

    function setupDeviceOrientationControls(){
        /**
         * Angles value in scene:
         *  "Anthony Bayet" labels is in 90 90 0
         *  Next room is in 270 90 0
         */
        // Init device orientation controls
        var setObjectQuaternion = function() {

            var zee = new THREE.Vector3( 0, 0, 1 );
            var euler = new THREE.Euler();
            var q0 = new THREE.Quaternion();
            var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

            return function( quaternion, alpha, beta, gamma, orient ) {

                euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us
                quaternion.setFromEuler( euler ); // orient the device
                quaternion.multiply( q1 ); // camera looks out the back of the device, not the top
                quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); // adjust for screen orientation
            };
        }();

        var deviceOrientation = {};
        var gyroSupportDetected = false;


        function handleOrientation(event){
            // The first time this event is triggered with a value in the alpha field. 
            // It means that the device support this feature.
            // Then, swap the controls to the gyroscope one.
            if(!gyroSupportDetected && event.alpha != null){
                switchGyroControl();
                // Make appear the button to switch between controls
                document.getElementById("gyro-button").style.display = "block";
                gyroSupportDetected = true;
            }
            deviceOrientation = event;
        }
        window.addEventListener("deviceorientation", handleOrientation);

        // Text field used for debug purpose
        const gyro_text = document.getElementById("gyro_text");

        var screenOrientation = 0;
        function updateGyro(){
            gyro_text.textContent = `${deviceOrientation.alpha.toFixed(1)}\n${deviceOrientation.beta.toFixed(1)}\n${deviceOrientation.gamma.toFixed(1)}`;

            var alpha = deviceOrientation.alpha ? THREE.MathUtils.degToRad( deviceOrientation.alpha ) : 0; // Z
            var beta = deviceOrientation.beta ? THREE.MathUtils.degToRad( deviceOrientation.beta ) : 0; // X'
            var gamma = deviceOrientation.gamma ? THREE.MathUtils.degToRad( deviceOrientation.gamma ) : 0; // Y''
            var orient = screenOrientation ? THREE.MathUtils.degToRad( screenOrientation ) : 0; // O

            setObjectQuaternion( camera.quaternion, alpha, beta, gamma, orient );
        }

        return updateGyro;
    }
}

main()
setTimeout(()=>{
    document.getElementById("loading-screen-break-strip__top").style.height = "100%";
    document.getElementById("loading-screen-break-strip__bottom").style.height = "100%";
    
    setTimeout(()=>{
        document.getElementById("loading-screen-left-panel").style.left = "-100%";
        document.getElementById("loading-screen-right-panel").style.left = "calc(100% + 5px)";
    }, 1000)

}, 1000)