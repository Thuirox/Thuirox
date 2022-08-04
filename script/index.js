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
    renderer.localClippingEnabled = true;

    

    // camera setup
    const fov = 70;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
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

        const sphereGeometry = new THREE.SphereGeometry( 15, 200, 32 );
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
        const loader = new TTFLoader();
        loader.load( 'fonts/Arizonia-Regular.ttf', function ( json ) {
            const font = new Font(json);

            const message = 'Anthony\n  Bayet';
            const shapes = font.generateShapes( message, 5 );

            
			const textGeo = new THREE.ShapeGeometry( shapes );

            textGeo.computeBoundingBox();

            const color = 0x981235;
            const matLite = new THREE.MeshPhongMaterial( {
                color: color,
                opacity: 0.4,
                side: THREE.DoubleSide
            } );
            
			const text = new THREE.Mesh( textGeo, matLite );
            text.rotateY(Math.PI/2);
            text.position.x = -50;
            text.position.z = 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
            text.position.y = 0.1 * ( textGeo.boundingBox.max.y - textGeo.boundingBox.min.y );
            scene.add(text);
        } );

        // Light
        const color = 0xFFFFFF;
        const intensity = 1;

        const sun = new THREE.PointLight(color, intensity, 30);
        sun.position.set(-40, 0, 0);
        scene.add(sun);
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
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);

        renderer.render(scene, camera);
    }

    function updateCameraPosition(x, y, z){
        let xDiff = 0.001;
        if(camera.position.x - x < 0){
            xDiff = -xDiff;
        }

        controls.target.set(x, y, z);
        camera.position.set(x + xDiff, y, z);

    }

    function setupManualControls(){
        // Init mouse and touch controls
        const controls = new OrbitControls(camera, canvas);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = true;

        // Check if the user is usign a mobile device. https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
        const isMobile = navigator.userAgentData.mobile;

        if(isMobile){
            controls.rotateSpeed = 0.7;
        } else {
            controls.rotateSpeed = 0.5;
        }
        // reverse control
        controls.rotateSpeed *= -1;

        controls.target.set(0, 0, 0);

        controls.update();

        controls.enabled = true;

        return controls;
    }

    function setupDeviceOrientationControls(){
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