import * as THREE from 'three'
import { Panel, Title } from './panel'
import { Transporter } from './transporter'
import { Room } from './room'
import { cameraInitialPosition } from '../helpers/const'
import { GithubButton, WebsiteButton, LinkedinButton } from './button'
import { TransportManager } from '../managers/transportManager'
import { type Camera } from './camera'

class CustomScene {
  private readonly scene: THREE.Scene
  private readonly camera: Camera
  private readonly renderer: THREE.Renderer

  private readonly sphereRadius: number = 15

  constructor (scene: THREE.Scene, camera: Camera, renderer: THREE.Renderer) {
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
  }

  async init (callback: () => void): Promise<void> {
    const distanceVector3 = new THREE.Vector3(28, 0, 0)

    const justabayetRoom = await this.createJustABayetRoom(this.scene)
    justabayetRoom.setCenter(cameraInitialPosition)

    const hackathonRoom = await this.createHackathonRoom(justabayetRoom.mesh)
    hackathonRoom.hideChildren()
    hackathonRoom.setCenter(distanceVector3.clone())

    const codingOfIsaacRoom = await this.createCodingOfIsaacRoom(hackathonRoom.mesh)
    codingOfIsaacRoom.hideChildren()
    codingOfIsaacRoom.setCenter(distanceVector3.clone())

    const gesturesHeroRoom = await this.createGesturesHeroRoom(codingOfIsaacRoom.mesh)
    gesturesHeroRoom.hideChildren()
    gesturesHeroRoom.setCenter(distanceVector3.clone())

    const clashRoom = await this.createClashRoom(gesturesHeroRoom.mesh)
    clashRoom.hideChildren()
    clashRoom.setCenter(distanceVector3.clone())

    justabayetRoom.setNext(hackathonRoom)
    hackathonRoom.setNext(codingOfIsaacRoom)
    codingOfIsaacRoom.setNext(gesturesHeroRoom)
    gesturesHeroRoom.setNext(clashRoom)

    // Global light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    this.scene.add(ambientLight)

    this.renderer.render(this.scene, this.camera)

    TransportManager.setCurrentRoom(justabayetRoom)

    callback()
  }

  async createJustABayetRoom (pivot: THREE.Object3D): Promise<Room> {
    const center = new THREE.Vector3(0, 0, 0)

    const roomColor = 0x0B0014
    const room = new Room(pivot, center, this.sphereRadius, roomColor, { hasExit: true })

    const square = new Transporter(room, new THREE.Vector3(0, 0, 0), roomColor)
    room.addTransporter(square)
    square.setIsDoubleSided(false)

    square.init()

    const gesturesHero = new Panel('images/justabayet/gestureshero.png', new THREE.Vector3(-4.5, -3, -8), 2)
    room.addImage(gesturesHero.mesh)
    const whenisnextlolclash = new Panel('images/justabayet/whenisnextlolclash.png', new THREE.Vector3(-5.5, 1.5, -9), 3)
    room.addImage(whenisnextlolclash.mesh)
    const thecodingofisaac = new Panel('images/justabayet/thecodingofisaac.png', new THREE.Vector3(5, 2.2, -9), 5)
    room.addImage(thecodingofisaac.mesh)
    const hackathon = new Panel('images/justabayet/hackathons.png', new THREE.Vector3(4.5, -3, -8), 2.5)
    room.addImage(hackathon.mesh)
    const title = new Title('images/justabayet/title.png', new THREE.Vector3(0, 0, -8), 7)
    room.addImage(title.mesh, true)
    const githubButton = new GithubButton(new THREE.Vector3(0, -6, -6), 1, 'https://github.com/justabayet/justabayet', 'justabayet')
    githubButton.setBackgroundOpacity(0.1)
    room.addImage(githubButton.mesh)

    const linkedinButton = new LinkedinButton(new THREE.Vector3(-10, 0, -2.5), 2, 'https://www.linkedin.com/in/anthony-bayet')
    linkedinButton.setBackgroundOpacity(0.1)
    room.addImage(linkedinButton.mesh)

    const githubGeneralButton = new GithubButton(new THREE.Vector3(-10, 0, 2.5), 2, 'https://github.com/justabayet')
    room.addImage(githubGeneralButton.mesh)
    githubGeneralButton.setBackgroundOpacity(0.1)

    return room
  }

  async createClashRoom (pivot: THREE.Object3D): Promise<Room> {
    const center = new THREE.Vector3(0, 0, 0)
    // const roomColor = 0x0B0014;
    // const roomColor = 0xF6BB62; // Text Color
    // const roomColor = 0x1A2623; // Project Background Color
    // const roomColor = colors[0];
    const roomColor = 0x455854
    const room = new Room(pivot, center, this.sphereRadius, roomColor, { hasEntry: true })

    const square = new Transporter(room, new THREE.Vector3(0, 0, 0), roomColor)
    room.addTransporter(square)
    square.setIsDoubleSided(false)

    square.init()

    const index = new Panel('images/whenisnextlolclash/index.png', new THREE.Vector3(-5.5, 0, -8), 4, 1)
    room.addImage(index.mesh)
    const title = new Title('images/whenisnextlolclash/title.png', new THREE.Vector3(0, 0, -9), 8, 1)
    room.addImage(title.mesh, true)
    const githubButton = new GithubButton(new THREE.Vector3(-1.5, -5, -7), 1, 'https://github.com/justabayet/whenisnextlolclash', 'whenisnextlolclash')
    githubButton.setBackgroundOpacity(0.1)
    room.addImage(githubButton.mesh)

    const websiteButton = new WebsiteButton(new THREE.Vector3(1.5, -5, -7), 1, 'https://justabayet.github.io/whenisnextlolclash/')
    websiteButton.setBackgroundOpacity(0.1)
    room.addImage(websiteButton.mesh)

    const linkedinButton = new LinkedinButton(new THREE.Vector3(10, 0, -2.5), 2, 'https://www.linkedin.com/in/anthony-bayet')
    room.addImage(linkedinButton.mesh)
    linkedinButton.setBackgroundOpacity(0.1)

    const githubGeneralButton = new GithubButton(new THREE.Vector3(10, 0, 2.5), 2, 'https://github.com/justabayet')
    room.addImage(githubGeneralButton.mesh)
    githubGeneralButton.setBackgroundOpacity(0.1)

    return room
  }

  async createHackathonRoom (pivot: THREE.Object3D): Promise<Room> {
    const center = new THREE.Vector3(0, 0, 0)
    const roomColor = 0xf5ffff

    const room = new Room(pivot, center, this.sphereRadius, roomColor, { hasEntry: true, hasExit: true })

    const square = new Transporter(room, new THREE.Vector3(0, 0, 0), roomColor)
    room.addTransporter(square)
    square.setIsDoubleSided(false)
    square.init()

    const logoSize = 3
    const awardSize = 1.5

    const hpc2019 = new Panel('images/hackathon/Hope_for_climate_2019.png', new THREE.Vector3(0, -6, -11), logoSize * 1.2, 1)
    room.addImage(hpc2019.mesh)

    const cow2019 = new Panel('images/hackathon/COW_2019_logo.png', new THREE.Vector3(-7, -0.5, -10), logoSize, 1)
    room.addImage(cow2019.mesh)
    const cow2019a = new Panel('images/hackathon/COW_2019_award.png', new THREE.Vector3(-5.4, -1.9, -9.5), awardSize, 1)
    room.addImage(cow2019a.mesh)
    const cow2020 = new Panel('images/hackathon/COW_2020_logo.png', new THREE.Vector3(-3.5, 4.5, -10), logoSize, 1)
    room.addImage(cow2020.mesh)
    const cow2020a = new Panel('images/hackathon/COW_2020_award.png', new THREE.Vector3(-4.7, 3, -9.5), awardSize, 1)
    room.addImage(cow2020a.mesh)

    const hyc2020 = new Panel('images/hackathon/hack_your_city_2020.png', new THREE.Vector3(3.5, 5, -10), logoSize * 1.6, 1)
    room.addImage(hyc2020.mesh)
    const hyc2020a = new Panel('images/hackathon/HYC_2020_award.png', new THREE.Vector3(5.7, 3.3, -9.5), awardSize, 1)
    room.addImage(hyc2020a.mesh)
    const cow2021 = new Panel('images/hackathon/COW_2021_logo.png', new THREE.Vector3(7, -0.5, -10), logoSize, 1)
    room.addImage(cow2021.mesh)
    const cow2021a = new Panel('images/hackathon/COW_2021_award.png', new THREE.Vector3(5.4, -1.9, -9.5), awardSize, 1)
    room.addImage(cow2021a.mesh)
    const imageTitle = new Title('images/hackathon/title.png', new THREE.Vector3(0, 0, -14), 8, 1)
    room.addImage(imageTitle.mesh, true)
    return room
  }

  async createCodingOfIsaacRoom (pivot: THREE.Object3D): Promise<Room> {
    const center = new THREE.Vector3(0, 0, 0)
    const roomColor = 0x340500

    const room = new Room(pivot, center, this.sphereRadius, roomColor, { hasEntry: true, hasExit: true })

    const square = new Transporter(room, new THREE.Vector3(0, 0, 0), roomColor)
    room.addTransporter(square)
    square.setIsDoubleSided(false)
    square.init()

    const imageChara = new Panel('images/theCodingOfIsaac/character.png', new THREE.Vector3(-3, -2, -8), 2, 1)
    room.addImage(imageChara.mesh)
    const imageTutorial = new Panel('images/theCodingOfIsaac/tutorial.png', new THREE.Vector3(5, -1, -11.5), 8, 1)
    room.addImage(imageTutorial.mesh)
    const imageRoom = new Panel('images/theCodingOfIsaac/room.png', new THREE.Vector3(-5, 1.5, -10), 7, 1)
    room.addImage(imageRoom.mesh)
    const universities = new Panel('images/theCodingOfIsaac/universities.png', new THREE.Vector3(-4.5, -6.5, -10), 10, 1)
    room.addImage(universities.mesh)
    const imageTitle = new Title('images/theCodingOfIsaac/title.png', new THREE.Vector3(0, 0, -9), 8, 1)
    room.addImage(imageTitle.mesh, true)
    const githubButton = new GithubButton(new THREE.Vector3(0, -6, -6), 1, 'https://github.com/snail-unamur/Yo-kai-watch', 'The Coding of Isaac')
    githubButton.setBackgroundOpacity(0.1)
    room.addImage(githubButton.mesh)

    return room
  }

  async createGesturesHeroRoom (pivot: THREE.Object3D): Promise<Room> {
    const center = new THREE.Vector3(0, 0, 0)
    // const roomColor = colors[2];
    const roomColor = 0x33CCCC

    const room = new Room(pivot, center, this.sphereRadius, roomColor, { hasEntry: true, hasExit: true })

    const square = new Transporter(room, new THREE.Vector3(0, 0, 0), roomColor)
    room.addTransporter(square)
    square.setIsDoubleSided(false)
    square.init()

    const game = new Panel('images/gesturesHero/index.png', new THREE.Vector3(4, 4.5, -10), 8, 1)
    room.addImage(game.mesh)
    const kikkFestivalPoster = new Panel('images/gesturesHero/KIKKfestival.jpg', new THREE.Vector3(-6.2, -1.6, -11.5), 8, 1)
    room.addImage(kikkFestivalPoster.mesh)
    const poster = new Panel('images/gesturesHero/poster.png', new THREE.Vector3(-5, 4.5, -10), 8, 1)
    room.addImage(poster.mesh)

    const logo = new Panel('images/gesturesHero/logo.png', new THREE.Vector3(5, -2, -9.5), 2, 1)
    room.addImage(logo.mesh)
    const title = new Title('images/gesturesHero/title.png', new THREE.Vector3(0, 0, -9), 8, 1)
    room.addImage(title.mesh, true)
    const githubButton = new GithubButton(new THREE.Vector3(0, -6, -6), 1, 'https://github.com/GesturesHero/GesturesHero', 'GesturesHero')
    githubButton.setBackgroundOpacity(0.1)
    room.addImage(githubButton.mesh)

    return room
  }
}

async function setupScene (scene: THREE.Scene, camera: Camera, renderer: THREE.Renderer, callback: () => void): Promise<void> {
  const scene3D = new CustomScene(scene, camera, renderer)
  await scene3D.init(callback)
}

export { setupScene }
