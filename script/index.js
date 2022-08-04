import * as THREE from './three.module.js';
import {THREEx} from './threex.domevents.js';
import {OrbitControls} from './OrbitControls.js';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    // camera setup
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 50;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 0.1);
    

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

    
    function setupScene(){

        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

        const materialX = new THREE.MeshPhongMaterial({color: 0xaa4444});
        const materialZ = new THREE.MeshPhongMaterial({color: 0x4444aa});
        const materialY = new THREE.MeshPhongMaterial({color: 0x44aa44});

        let cubes = []

        const cube1 = new THREE.Mesh(geometry, materialX);
        scene.add(cube1);
        cube1.position.x = 2;
        cube1.rotateX(90);
        cube1.rotateY(90);

        const cube2 = new THREE.Mesh(geometry, materialX);
        scene.add(cube2);
        cube2.position.x = -2;

        const cube3 = new THREE.Mesh(geometry, materialZ);
        scene.add(cube3);
        cube3.position.z = 2;

        const cube4 = new THREE.Mesh(geometry, materialZ);
        scene.add(cube4);
        cube4.position.z = -2;

        const cube5 = new THREE.Mesh(geometry, materialY);
        scene.add(cube5);
        cube5.position.y = 2;

        const cube6 = new THREE.Mesh(geometry, materialY);
        scene.add(cube6);
        cube6.position.y = -2;


        cubes.push(cube1);
        cubes.push(cube2);
        // cube2.rotation.order = "YXZ";
        cubes.push(cube3);
        cubes.push(cube4);
        cubes.push(cube5);
        cubes.push(cube6);

        var domEvents	= new THREEx.DomEvents(camera, canvas)
        let counter = 0;
        cubes.map((cube) => {
            counter++;
            let c = counter;
            domEvents.addEventListener(cube, "click", function(event){
                debug_text.textContent = `Clicked ${c}`;
                console.log(`Clicked ${c}`);
            }, false);
            domEvents.addEventListener(cube, "touchstart", function(event){
                debug_text.textContent = `Touched ${c}`;
                console.log(`Touched ${c}`);
            }, false);
        });

        // Light
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.AmbientLight(color, intensity);
        light.position.set(0, 10, 0);
        scene.add(light);


        renderer.render(scene, camera);
    }

    function setupManualControls(){
        // Init mouse and touch controls
        const controls = new OrbitControls(camera, canvas);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = true;

        controls.rotateSpeed = 0.5;
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