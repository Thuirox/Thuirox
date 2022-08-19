import * as THREE from '../libs/three.module.js';
import { Panel, Title } from "./panel.js";
import { Transporter, transportController } from "./transporter.js";
import { Room } from "./room.js";
import { cameraInitialPosition } from "../const.js";
import { GithubButton, WebsiteButton } from './button.js';

class CustomScene{

    constructor(scene, camera, renderer){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        this.sphereRadius = 15;
    }
    
    async init(callback){
        const justabayetRoom = this.createJustABayetRoom(this.scene);
        justabayetRoom.setCenter(cameraInitialPosition);
        
        const gesturesHeroRoom = this.createGesturesHeroRoom(justabayetRoom.mesh);
        gesturesHeroRoom.hideImages();
        gesturesHeroRoom.setCenter({ x:28, y:0, z:0 });

        const codingOfIsaacRoom = this.createCodingOfIsaacRoom(gesturesHeroRoom.mesh);
        codingOfIsaacRoom.hideImages();
        codingOfIsaacRoom.setCenter({ x:28, y:0, z:0 });

        const clashRoom = this.createClashRoom(codingOfIsaacRoom.mesh);
        clashRoom.hideImages();
        clashRoom.setCenter({ x:28, y:0, z:0 });

        

        justabayetRoom.setNext(gesturesHeroRoom);
        gesturesHeroRoom.setNext(codingOfIsaacRoom);
        codingOfIsaacRoom.setNext(clashRoom);
    
    
    
        // Global light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
    
        this.renderer.render(this.scene, this.camera);

        transportController.setCurrentRoom(justabayetRoom);

        callback();
    }


    createJustABayetRoom(pivot){
        const center = { x:0, y:0, z:0 };

        const roomColor = 0x0B0014;
        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);

        square.init();



            
        const gesturesHero = new Panel(room, "images/gesturesHero/index.png", {x:4.5, y:-4, z:-9}, 6, 0.9);
        gesturesHero.init(() => {
            gesturesHero.addAnimation();
        });

        const whenisnextlolclash = new Panel(room, "images/justabayet/whenisnextlolclash.png", {x:-5.5, y:1.5, z:-9}, 3, 1);
        whenisnextlolclash.init(() => {
            whenisnextlolclash.addAnimation();
        });

        const thecodingofisaac = new Panel(room, "images/justabayet/thecodingofisaac.png", {x:5, y:2.2, z:-9}, 5, 1);
        thecodingofisaac.init(() => {
            thecodingofisaac.addAnimation();
        });

        const title = new Title(room, "images/justabayet/title.png", {x:0, y:0, z:-8}, 7, 1);
        title.init();

        const githubButton = new GithubButton(room, {x:0, y:-6, z:-6}, 1, "https://github.com/justabayet/justabayet", "justabayet");
        githubButton.init();
        

        

        return room;
    }

    createClashRoom(pivot){
        const center = { x:0, y:0, z:0 };
        // const roomColor = 0x0B0014;
        // const roomColor = 0xF6BB62; // Text Color
        // const roomColor = 0x1A2623; // Project Background Color
        // const roomColor = colors[0];
        const roomColor = 0x455854;
        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addEntry();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);

        square.init();

        // const videoDesktop = new Panel(room, "whenisnextlolclash-video", {x:4, y:2.2, z:-7}, 7, 1, true);
        
        // videoDesktop.init(() => {
        //     videoDesktop.addAnimation();
    
        // });

        const imageDesktop = new Panel(room, "images/whenisnextlolclash/index.png", {x:4, y:2.2, z:-7}, 7, 1);
        imageDesktop.init(() => {
            imageDesktop.addAnimation();
        });

        const imageMobile = new Panel(room, "images/whenisnextlolclash/indexMobile.png", {x:-4, y:-3.5, z:-8}, 3, 1);
        imageMobile.init(() => {
            imageMobile.addAnimation();
        });

        const imageTitle = new Title(room, "images/whenisnextlolclash/title.png", {x:0, y:0, z:-9}, 8, 1);
        imageTitle.init();

        const githubButton = new GithubButton(room, {x:-1.5, y:-6, z:-6}, 1, "https://github.com/justabayet/whenisnextlolclash", "whenisnextlolclash");
        githubButton.init();

        const websiteButton = new WebsiteButton(room, {x:1.5, y:-6, z:-6}, 1, "https://justabayet.github.io/whenisnextlolclash/");
        websiteButton.init();
        

        return room;
    }

    createCodingOfIsaacRoom(pivot){
        const center = { x:0, y:0, z:0 };
        const roomColor = 0x340500;

        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);
        square.init();


        const imageChara = new Panel(room, "images/theCodingOfIsaac/character.png", {x:-3, y:-2, z:-8}, 2, 1);
        imageChara.init(() => {
            imageChara.addAnimation();
        });

        const imageTutorial = new Panel(room, "images/theCodingOfIsaac/tutorial.png", {x:5, y:-1, z:-11.5}, 8, 1);
        imageTutorial.init(() => {
            imageTutorial.addAnimation();
        });

        const imageRoom = new Panel(room, "images/theCodingOfIsaac/room.png", {x:-5, y:1.5, z:-10}, 7, 1);
        imageRoom.init(() => {
            imageRoom.addAnimation();
        });

        const imageTitle = new Title(room, "images/theCodingOfIsaac/title.png", {x:0, y:0, z:-9}, 8, 1);
        imageTitle.init();

        const githubButton = new GithubButton(room, {x:0, y:-6, z:-6}, 1, "https://github.com/snail-unamur/Yo-kai-watch", "The Coding of Isaac");
        githubButton.init();

        return room;
    }

    createGesturesHeroRoom(pivot){
        const center = { x:0, y:0, z:0 };
        // const roomColor = colors[2];
        const roomColor = 0x33CCCC;


        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();
        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);
        square.init();


        const game = new Panel(room, "images/gesturesHero/index.png", {x:4, y:5, z:-10}, 8, 1);
        game.init(() => {
            game.addAnimation();
        });

        const kikkFestivalPoster = new Panel(room, "images/gesturesHero/KIKKfestival.jpg", {x:-6.2, y:-1.6, z:-11.5}, 8, 1);
        kikkFestivalPoster.init(() => {
            kikkFestivalPoster.addAnimation();
        });

        const poster = new Panel(room, "images/gesturesHero/poster.png", {x:-5, y:5, z:-10}, 8, 1);
        poster.init(() => {
            poster.addAnimation();
        });


        const logo = new Panel(room, "images/gesturesHero/logo.png", {x:5, y:-2, z:-9.5}, 2, 1);
        logo.init(() => {
            logo.addAnimation();
        });

        const title = new Title(room, "images/gesturesHero/title.png", {x:0, y:0, z:-9}, 8, 1);
        title.init();


        const githubButton = new GithubButton(room, {x:0, y:-6, z:-6}, 1, "https://github.com/GesturesHero/GesturesHero", "GesturesHero");
        githubButton.init();


        return room;
    }

}

function setupScene(scene, camera, renderer, callback){
    let scene3D = new CustomScene(scene, camera, renderer);
    scene3D.init(callback);
}

export { setupScene };