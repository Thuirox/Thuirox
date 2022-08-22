import * as THREE from '../libs/three.module.js';
import { Panel, Title } from "./panel.js";
import { Transporter, transportController } from "./transporter.js";
import { Room } from "./room.js";
import { cameraInitialPosition } from "../const.js";
import { GithubButton, WebsiteButton, LinkedinButton } from './button.js';

class CustomScene{

    constructor(scene, camera, renderer){
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        this.sphereRadius = 15;
    }
    
    async init(callback){
        const justabayetRoom = await this.createJustABayetRoom(this.scene);
        justabayetRoom.setCenter(cameraInitialPosition);

        const hackathonRoom = await this.createHackathonRoom(justabayetRoom.mesh);
        hackathonRoom.hideImages();
        hackathonRoom.setCenter({ x:28, y:0, z:0 });

        const codingOfIsaacRoom = await this.createCodingOfIsaacRoom(hackathonRoom.mesh);
        codingOfIsaacRoom.hideImages();
        codingOfIsaacRoom.setCenter({ x:28, y:0, z:0 });
        
        const gesturesHeroRoom = await this.createGesturesHeroRoom(codingOfIsaacRoom.mesh);
        gesturesHeroRoom.hideImages();
        gesturesHeroRoom.setCenter({ x:28, y:0, z:0 });

        const clashRoom = await this.createClashRoom(gesturesHeroRoom.mesh);
        clashRoom.hideImages();
        clashRoom.setCenter({ x:28, y:0, z:0 });
        

        justabayetRoom.setNext(hackathonRoom);
        hackathonRoom.setNext(codingOfIsaacRoom);
        codingOfIsaacRoom.setNext(gesturesHeroRoom);
        gesturesHeroRoom.setNext(clashRoom);
    
    
    
        // Global light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
    
        this.renderer.render(this.scene, this.camera);

        

        transportController.setCurrentRoom(justabayetRoom);

        callback();
    }


    async createJustABayetRoom(pivot){
        const center = { x:0, y:0, z:0 };

        const roomColor = 0x0B0014;
        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);

        square.init();



            
        // const gesturesHero = new Panel(room, "images/gesturesHero/index.png", {x:-4.5, y:-4, z:-9}, 6, 0.9);
        // await gesturesHero.init(() => {
        //     gesturesHero.addAnimation();
        // });


        const gesturesHero = new Panel(room, "images/justabayet/gestureshero.png", {x:-4.5, y:-3, z:-9}, 2, 1);
        await gesturesHero.init(() => {
            gesturesHero.addAnimation();
        });

        const whenisnextlolclash = new Panel(room, "images/justabayet/whenisnextlolclash.png", {x:-5.5, y:1.5, z:-9}, 3, 1);
        await whenisnextlolclash.init(() => {
            whenisnextlolclash.addAnimation();
        });

        const thecodingofisaac = new Panel(room, "images/justabayet/thecodingofisaac.png", {x:5, y:2.2, z:-9}, 5, 1);
        await thecodingofisaac.init(() => {
            thecodingofisaac.addAnimation();
        });

        const hackathon = new Panel(room, "images/hackathon/title.png", {x:5, y:-4, z:-9}, 7, 0.8);
        await hackathon.init(() => {
            hackathon.addAnimation();
        });

        const title = new Title(room, "images/justabayet/title.png", {x:0, y:0, z:-8}, 7, 1);
        await title.init();

        const githubButton = new GithubButton(room, {x:0, y:-6, z:-6}, 1, "https://github.com/justabayet/justabayet", "justabayet");
        await githubButton.init();
        

        const linkedinButton = new LinkedinButton(room, {x:-10, y:0, z:-2.5}, 2, "https://www.linkedin.com/in/anthony-bayet");
        linkedinButton.setBackgroundOpacity(0.1);
        await linkedinButton.init();
        

        const githubGeneralButton = new GithubButton(room, {x:-10, y:0, z:2.5}, 2, "https://github.com/justabayet");
        githubGeneralButton.setBackgroundOpacity(0.1);
        await githubGeneralButton.init();
        

        

        return room;
    }

    async createClashRoom(pivot){
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

        const index = new Panel(room, "images/whenisnextlolclash/index.png", {x:-5.5, y:0, z:-8}, 4, 1);
        await index.init(() => {
            index.addAnimation();
        });


        const title = new Title(room, "images/whenisnextlolclash/title.png", {x:0, y:0, z:-9}, 8, 1);
        await title.init();

        const githubButton = new GithubButton(room, {x:-1.5, y:-5, z:-7}, 1, "https://github.com/justabayet/whenisnextlolclash", "whenisnextlolclash");
        await githubButton.init();

        const websiteButton = new WebsiteButton(room, {x:1.5, y:-5, z:-7}, 1, "https://justabayet.github.io/whenisnextlolclash/");
        await websiteButton.init();
        

        const linkedinButton = new LinkedinButton(room, {x:10, y:0, z:-2.5}, 2, "https://www.linkedin.com/in/anthony-bayet");
        linkedinButton.setBackgroundOpacity(0.1);
        await linkedinButton.init();
        

        const githubGeneralButton = new GithubButton(room, {x:10, y:0, z:2.5}, 2, "https://github.com/justabayet");
        githubGeneralButton.setBackgroundOpacity(0.1);
        await githubGeneralButton.init();
        

        return room;
    }

    async createHackathonRoom(pivot){
        const center = { x:0, y:0, z:0 };
        const roomColor = 0xf5ffff;

        const room = new Room(pivot, this.camera, center, this.sphereRadius, roomColor);

        room.addExit();
        room.addEntry();

        room.init();

        
        const square = new Transporter(room, this.camera, { x:0, y:0, z:0 }, roomColor);

        square.setIsDoubleSided(false);
        square.init();


        const logoSize = 3;
        const awardSize = 1.5;

        const hpc2019 = new Panel(room, "images/hackathon/Hope_for_climate_2019.png", {x:0, y:-6, z:-11}, logoSize * 1.2, 1);
        await hpc2019.init();


        const cow2019 = new Panel(room, "images/hackathon/COW_2019_logo.png", {x:-7, y:-0.5, z:-10}, logoSize, 1);
        await cow2019.init();

        const cow2019a = new Panel(room, "images/hackathon/COW_2019_award.png", {x:-5.4, y:-1.9, z:-9.5}, awardSize, 1);
        await cow2019a.init(() => {
            cow2019a.addAnimation();
        });



        const cow2020 = new Panel(room, "images/hackathon/COW_2020_logo.png", {x:-3.5, y:4.5, z:-10}, logoSize, 1);
        await cow2020.init();

        const cow2020a = new Panel(room, "images/hackathon/COW_2020_award.png", {x:-4.7, y:3, z:-9.5}, awardSize, 1);
        await cow2020a.init(() => {
            cow2020a.addAnimation();
        });


        const hyc2020 = new Panel(room, "images/hackathon/hack_your_city_2020.png", {x:3.5, y:5, z:-10}, logoSize * 1.6, 1);
        await hyc2020.init();

        const hyc2020a = new Panel(room, "images/hackathon/HYC_2020_award.png", {x:5.7, y:3.3, z:-9.5}, awardSize, 1);
        await hyc2020a.init(() => {
            hyc2020a.addAnimation();
        });



        const cow2021 = new Panel(room, "images/hackathon/COW_2021_logo.png", {x:7, y:-0.5, z:-10}, logoSize, 1);
        await cow2021.init();

        const cow2021a = new Panel(room, "images/hackathon/COW_2021_award.png", {x:5.4, y:-1.9, z:-9.5}, awardSize, 1);
        await cow2021a.init(() => {
            cow2021a.addAnimation();
        });



        const imageTitle = new Title(room, "images/hackathon/title.png", {x:0, y:0, z:-14}, 8, 1);
        await imageTitle.init();

        return room;
    }

    async createCodingOfIsaacRoom(pivot){
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
        await imageChara.init(() => {
            imageChara.addAnimation();
        });

        const imageTutorial = new Panel(room, "images/theCodingOfIsaac/tutorial.png", {x:5, y:-1, z:-11.5}, 8, 1);
        await imageTutorial.init(() => {
            imageTutorial.addAnimation();
        });

        const imageRoom = new Panel(room, "images/theCodingOfIsaac/room.png", {x:-5, y:1.5, z:-10}, 7, 1);
        await imageRoom.init(() => {
            imageRoom.addAnimation();
        });
        
        const universities = new Panel(room, "images/theCodingOfIsaac/universities.png", {x:-4.5, y:-6.5, z:-10}, 10, 1);
        await universities.init(() => {
            universities.addAnimation();
        });

        const imageTitle = new Title(room, "images/theCodingOfIsaac/title.png", {x:0, y:0, z:-9}, 8, 1);
        await imageTitle.init();

        const githubButton = new GithubButton(room, {x:0, y:-6, z:-6}, 1, "https://github.com/snail-unamur/Yo-kai-watch", "The Coding of Isaac");
        await githubButton.init();

        return room;
    }

    async createGesturesHeroRoom(pivot){
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


        const game = new Panel(room, "images/gesturesHero/index.png", {x:4, y:4.5, z:-10}, 8, 1);
        await game.init(() => {
            game.addAnimation();
        });

        const kikkFestivalPoster = new Panel(room, "images/gesturesHero/KIKKfestival.jpg", {x:-6.2, y:-1.6, z:-11.5}, 8, 1);
        await kikkFestivalPoster.init(() => {
            kikkFestivalPoster.addAnimation();
        });

        const poster = new Panel(room, "images/gesturesHero/poster.png", {x:-5, y:4.5, z:-10}, 8, 1);
        await poster.init(() => {
            poster.addAnimation();
        });


        const logo = new Panel(room, "images/gesturesHero/logo.png", {x:5, y:-2, z:-9.5}, 2, 1);
        await logo.init(() => {
            logo.addAnimation();
        });

        const title = new Title(room, "images/gesturesHero/title.png", {x:0, y:0, z:-9}, 8, 1);
        await title.init();

        
        const githubButton = new GithubButton(room, {x:0, y:-6, z:-6}, 1, "https://github.com/GesturesHero/GesturesHero", "GesturesHero");
        await githubButton.init();

        return room;
    }

}

async function setupScene(scene, camera, renderer, callback){
    let scene3D = new CustomScene(scene, camera, renderer);
    await scene3D.init(callback);
}

export { setupScene };