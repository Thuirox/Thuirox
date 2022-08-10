import * as THREE from './libs/three.module.js';
import { OneBallOneCube } from './scenes/oneBallOneCube.js';
import { BallsOfLight } from './scenes/ballsOfLight.js';






function setupScene(scene, camera, renderer){
    // Color palette used: https://coolors.co/773344-e3b5a4-f5e9e2-0b0014-d44d5c

    // let scene3D = new OneBallOneCube(scene, camera, renderer);
    let scene3D = new BallsOfLight(scene, camera, renderer);
    scene3D.init();


}







export { setupScene };