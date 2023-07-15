import * as THREE from 'three'
import { Animation, DifferedAnimation } from '../animation'
import { type MeshLoadable } from '../interaction'

class MeshGroup {
  private readonly parent: THREE.Mesh

  private position: THREE.Vector3
  private readonly initialPosition: THREE.Vector3
  private readonly hiddenPosition: THREE.Vector3

  private readonly childrenMoving: MeshLoadable[]
  private readonly childrenStatic: THREE.Mesh[]

  private readonly childrenAnimatedCenter: THREE.Object3D
  private readonly childrenStaticCenter: THREE.Object3D

  constructor (parent: THREE.Mesh, position: THREE.Vector3) {
    this.parent = parent

    this.position = position
    this.initialPosition = position.clone()

    this.childrenMoving = []
    this.childrenStatic = []

    // Add reference point for animated image.
    this.childrenAnimatedCenter = new THREE.Object3D()
    this.childrenAnimatedCenter.position.set(this.position.x, this.position.y, this.position.z)

    this.parent.add(this.childrenAnimatedCenter)

    // Add reference point for static image.
    this.childrenStaticCenter = new THREE.Object3D()
    this.childrenStaticCenter.position.set(this.initialPosition.x, this.initialPosition.y, this.initialPosition.z)

    this.parent.add(this.childrenStaticCenter)

    this.hiddenPosition = new THREE.Vector3(this.childrenAnimatedCenter.position.x, -20, this.childrenAnimatedCenter.position.z)
  }

  addChild (child: MeshLoadable, isStatic: boolean = false): void {
    if (isStatic) {
      this.childrenStatic.push(child)
      this.childrenStaticCenter.add(child)
    } else {
      this.childrenMoving.push(child)
      this.childrenAnimatedCenter.add(child)
    }
  }

  show (): void {
    this.moveTo(this.initialPosition, 500, 1000)
    this.childrenMoving.forEach((child) => { child.load() })
  }

  hide (): void {
    this.moveTo(this.hiddenPosition)
    this.childrenMoving.forEach((child) => { child.unload() })
  }

  setPosition (position: THREE.Vector3): void {
    this.position = position
    this.childrenAnimatedCenter.position.set(position.x, position.y, position.z)
  }

  moveTo (targetPosition: THREE.Vector3, duration = 2000, differedDuration = 0): void {
    const sourcePosition = this.position.clone()

    const distance = targetPosition.clone().sub(sourcePosition) // (end - start)

    const imageAnimation = new Animation<THREE.Vector3, undefined>(
      sourcePosition, targetPosition, duration,
      (ratio, { start }) => {
        // start.x + (end.x - start.x) * ratio
        const distanceTravelled = distance.clone().multiplyScalar(ratio) // (end.x - start.x) * ratio
        const currentPosition = start.clone().add(distanceTravelled) // start.x + (end.x - start.x) * ratio
        this.setPosition(currentPosition)
      },
      ({ end }) => {
        this.setPosition(end)
      },
      undefined
    )

    const differedAnimation = new DifferedAnimation(imageAnimation, differedDuration)
    differedAnimation.init()
  }
}

export { MeshGroup }
