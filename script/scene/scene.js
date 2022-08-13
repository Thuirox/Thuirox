import * as THREE from '../libs/three.module.js';
import { Panel } from "./panel.js";
import { Transporter } from "./transporter.js";
import { Room } from "./room.js";
import { colors } from "../const.js";

class CustomScene{

    constructor(scene, camera, renderer, nbBalls = 10){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.nbBalls = nbBalls;

        this.sphereRadius = 15;
    }
    
    init(){
        this.setupScene();
    }

    setupScene(){
        const firstRoom = this.createFirstRoom();
        const secondRoom = this.createSecondRoom();

        secondRoom.setCenter({ x:28, y:0, z:0 });

        firstRoom.setNext(secondRoom);
    
    
        // Global light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
    
        this.renderer.render(this.scene, this.camera);
    }

    createFirstRoom(){
        const center = { x:0, y:0, z:0 };
        // const roomColor = 0x0B0014;
        const roomColor = colors[1];
        const room = new Room(this.scene, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);

        square.init();

        let imageDesktop = new Panel(this.scene, "../../images/whenisnextlolclash/index.png", {x:4, y:2.2, z:-8}, 7, 1);
        imageDesktop.init(() => {
            imageDesktop.addAnimation();
            room.addImage(imageDesktop);
        });

        let imageMobile = new Panel(this.scene, "../../images/whenisnextlolclash/indexMobile.png", {x:-4, y:-3.5, z:-8}, 3, 1);
        imageMobile.init(() => {
            imageMobile.addAnimation();
            room.addImage(imageMobile);
        });

        let imageTitle = new Panel(this.scene, "../../images/whenisnextlolclash/title.png", {x:0, y:0, z:-9}, 8);
        imageTitle.init(() => {
            room.addImage(imageTitle);
        });
        

        return room;
    }

    
    createSecondRoom(){
        const center = { x:0, y:0, z:0 };
        const roomColor = 0xD44D5C;
        const pivot = new THREE.Object3D();
        this.scene.add(pivot);
        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);
        square.init();

        // pivot.rotateY(1);

        return room;

    }
}

function setupScene(scene, camera, renderer){
    let scene3D = new CustomScene(scene, camera, renderer);
    scene3D.init();
}

export { setupScene };