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
        const firstRoom = this.createFirstRoom(null);
        const secondRoom = this.createSecondRoom(firstRoom.mesh);
        const thirdRoom = this.createThirdRoom(secondRoom.mesh);

        secondRoom.setCenter({ x:28, y:0, z:0 });
        thirdRoom.setCenter({ x:28, y:0, z:0 });

        firstRoom.setNext(secondRoom);
        secondRoom.setNext(thirdRoom);
    
    
    
        // Global light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
    
        this.renderer.render(this.scene, this.camera);
    }

    createFirstRoom(){
        const center = { x:0, y:0, z:0 };
        // const roomColor = 0x0B0014;
        // const roomColor = 0xF6BB62; // Text Color
        // const roomColor = 0x1A2623; // Project Background Color
        const roomColor = colors[0];
        const room = new Room(this.scene, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);

        square.init();

        let imageDesktop = new Panel(this.scene, "https://thuirox.github.io/Thuirox/images/whenisnextlolclash/index.png", {x:4, y:2.2, z:-8}, 7, 1);
        imageDesktop.init(() => {
            imageDesktop.addAnimation();
            room.addImage(imageDesktop);
        });

        let imageMobile = new Panel(this.scene, "https://thuirox.github.io/Thuirox/images/whenisnextlolclash/indexMobile.png", {x:-4, y:-3.5, z:-8}, 3, 1);
        imageMobile.init(() => {
            imageMobile.addAnimation();
            room.addImage(imageMobile);
        });

        let imageTitle = new Panel(this.scene, "https://thuirox.github.io/Thuirox/images/whenisnextlolclash/title.png", {x:0, y:0, z:-9}, 8);
        imageTitle.init(() => {
            room.addImage(imageTitle);
        });
        

        return room;
    }

    
    createSecondRoom(pivot){
        const center = { x:0, y:0, z:0 };
        const roomColor = 0x340500;
        // const pivot = new THREE.Object3D();
        this.scene.add(pivot);
        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);
        square.init();

        // pivot.rotateY(0.5);

        

        

        let a = async () => {
            let imageChara = new Panel(this.scene, "https://thuirox.github.io/Thuirox/images/theCodingOfIsaac/character.png", {x:-3, y:-2, z:-8}, 2, 1);
            await imageChara.init(() => {
                imageChara.addAnimation();
                room.addImage(imageChara);
            });
    
            // let imageMap = new Panel(this.scene, "https://thuirox.github.io/Thuirox/images/theCodingOfIsaac/map.png", {x:4, y:-3.5, z:-8}, 6, 1);
            // imageMap.init(() => {
            //     imageMap.addAnimation();
            //     room.addImage(imageMap);
            // });
    
            let imageTutorial = new Panel(this.scene, "../../images/theCodingOfIsaac/tutorial.png", {x:5, y:-1, z:-11.5}, 8, 1);
            await imageTutorial.init(() => {
                imageTutorial.addAnimation();
                room.addImage(imageTutorial);
            });
    
            let imageRoom = new Panel(this.scene, "https://thuirox.github.io/Thuirox/images/theCodingOfIsaac/room.png", {x:-5, y:1.5, z:-10}, 7, 1);
            await imageRoom.init(() => {
                imageRoom.addAnimation();
                room.addImage(imageRoom);
            });
    
            let imageTitle = new Panel(this.scene, "https://thuirox.github.io/Thuirox/images/theCodingOfIsaac/title.png", {x:0, y:0, z:-9}, 8, 1);
            await imageTitle.init(() => {
                room.addImage(imageTitle);
            });
            room.hideImages();
        };
        a();


        return room;

    }

    
    createThirdRoom(pivot){
        const center = { x:0, y:0, z:0 };
        const roomColor = colors[2];

        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addEntry();

        room.init();
        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);
        square.init();

        // pivot.rotateY(0.5);

        return room;

    }
}

function setupScene(scene, camera, renderer){
    let scene3D = new CustomScene(scene, camera, renderer);
    scene3D.init();
}

export { setupScene };