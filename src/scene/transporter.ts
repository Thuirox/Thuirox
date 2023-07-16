import * as THREE from 'three'
import { Animation } from '../animation'
import { MeshInteractive } from '../interaction'
import { TransportManager } from '../managers/transportManager'
import { type Room } from './room'

class Transporter {
  private readonly room: Room
  private readonly center: THREE.Vector3
  private readonly color: THREE.ColorRepresentation
  private isDoubleSided: boolean = true
  private readonly squareSideLength: number

  public readonly mesh: MeshInteractive
  private readonly lines: THREE.LineSegments<THREE.EdgesGeometry, THREE.Material>
  private readonly animation: Animation<number, undefined>

  private readonly cubeMaterial: THREE.Material

  constructor (room: Room, center: THREE.Vector3, color: THREE.ColorRepresentation, squareSideLength: number = 6.5) {
    this.room = room
    this.center = center
    this.color = color

    this.squareSideLength = squareSideLength

    // Click point
    const boxSide = this.squareSideLength
    const boxWidth = boxSide
    const boxHeight = boxSide
    const boxDepth = boxSide
    const cubeGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
    this.cubeMaterial = new THREE.MeshPhongMaterial({
      color: this.color,
      side: this.isDoubleSided ? THREE.DoubleSide : THREE.FrontSide
    })

    this.mesh = new MeshInteractive(() => {
      TransportManager.setCurrentRoom(this.room)
    }, cubeGeometry, this.cubeMaterial)

    this.mesh.rotateZ(Math.PI / 4)
    this.mesh.rotateY(Math.PI / 4)
    this.mesh.position.x = this.center.x
    this.mesh.position.y = this.center.y

    const edges = new THREE.EdgesGeometry(cubeGeometry)

    this.lines = new THREE.LineSegments(edges)
    this.lines.material.transparent = true
    this.lines.material.opacity = 0.3
    this.lines.material.side = THREE.FrontSide

    this.mesh.add(this.lines)

    this.animation = new Animation<number, undefined>(
      0, Math.PI * 0.001, 1000,
      (_, animation) => {
        const v3 = new THREE.Vector3(1, 1, 1)
        v3.normalize()

        this.mesh.rotateOnAxis(v3, animation.end)
      }, undefined, undefined)

    this.animation.setIsLooping(true)
    this.animation.init()
  }

  setIsDoubleSided (isDoubleSided: boolean): void {
    this.isDoubleSided = isDoubleSided
    this.cubeMaterial.side = this.isDoubleSided ? THREE.DoubleSide : THREE.FrontSide
    this.cubeMaterial.needsUpdate = true
  }

  init (): void {
  }

  addLines (): void {
    this.mesh.add(this.lines)
  }

  removeLines (): void {
    this.mesh.remove(this.lines)
  }
}

export { Transporter }
