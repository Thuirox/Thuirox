import { type ColorRepresentation, DoubleSide, Mesh, MeshPhongMaterial, Object3D, SphereGeometry, Vector3 } from 'three'
import { LightManager } from '../managers/lightManager'
import { angleBetweenSphere, debugLoading } from '../helpers/const'
import { MeshGroup } from './meshGroup'
import { DoubleLinkedList } from '../helpers/doubleLinkedList'
import { type MeshLoadable, type Loadable } from '../interaction'
import { type Transporter } from './transporter'

class Room extends DoubleLinkedList<Room> implements Loadable {
  private readonly parent: Object3D
  private center: Vector3
  private readonly radius: number
  private readonly color: ColorRepresentation

  public mesh: Object3D
  private readonly childrenCenter: Object3D
  private readonly parentPivot: Object3D<Event>

  private readonly sphereNbSegments: number
  private readonly capNbSegments: number
  private readonly jointNbSegments: number

  private readonly openAngle: number
  private openAngleEntry: number
  private openAngleExit: number

  private readonly lightManager: LightManager
  private readonly toPivot: boolean
  private loaded: boolean

  public readonly meshGroup: MeshGroup

  public transporter?: Transporter

  constructor (parent: Object3D, center: Vector3, radius: number, color: ColorRepresentation, args?: { hasExit?: boolean, hasEntry?: boolean, toPivot?: boolean }) {
    super()

    this.parent = parent

    this.center = center
    this.radius = radius

    this.color = color

    this.sphereNbSegments = 40
    this.capNbSegments = 10
    this.jointNbSegments = 10

    this.openAngle = Math.PI / 8
    this.openAngleEntry = 0
    this.openAngleExit = 0

    this.toPivot = args?.toPivot ? args.toPivot : true
    this.loaded = true

    if (args) {
      if (args.hasExit) { this.addExit() }
      if (args.hasEntry) { this.addEntry() }
    }

    /**
         * this.parent is like a planet
         * this.parentPivot is a second center of it, having independent rotation
         * this.mesh is a satellite of this.parent. It is rotating following this.parent secondary center.
         *
         * this.parent -> this.parentPivot -> this.mesh
         */
    this.mesh = new Object3D()

    this.parentPivot = new Object3D()
    this.parent.add(this.parentPivot)

    this.parentPivot.add(this.mesh)

    if (this.toPivot) {
      this.parentPivot.rotateY(angleBetweenSphere)
      this.mesh.rotateY(angleBetweenSphere)
    }

    this.childrenCenter = new Object3D()
    this.mesh.add(this.childrenCenter)

    const orificeFullSize = (Math.PI / 2) - angleBetweenSphere

    const entryOrifice = new SphereGeometry(this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, 2 * Math.PI, this.openAngleEntry, orificeFullSize - this.openAngleEntry)
    const exitOrifice = new SphereGeometry(this.radius, this.sphereNbSegments, this.sphereNbSegments, 0, 2 * Math.PI, this.openAngleExit, orificeFullSize - this.openAngleExit)

    const jointSizeAngle = Math.PI - 2 * this.openAngle - 0.1

    const jointUpper = new SphereGeometry(this.radius, 3, this.jointNbSegments, 0, jointSizeAngle, 0, Math.PI)
    const jointLower = new SphereGeometry(this.radius, 3, this.jointNbSegments, 0, jointSizeAngle, 0, Math.PI)

    const capSize = Math.PI - orificeFullSize - 2 * angleBetweenSphere
    const cap = new SphereGeometry(this.radius, this.capNbSegments, this.capNbSegments, 0, 2 * Math.PI, 0, capSize)

    const sphereMaterial = new MeshPhongMaterial({
      side: DoubleSide,
      color: this.color,
      clipShadows: true,
      clipIntersection: false
    })
    const meshEntryOrifice = new Mesh(entryOrifice, sphereMaterial)
    const meshExitOrifice = new Mesh(exitOrifice, sphereMaterial)
    const meshjointUpper = new Mesh(jointUpper, sphereMaterial)
    const meshjointLower = new Mesh(jointLower, sphereMaterial)
    const meshCap = new Mesh(cap, sphereMaterial)

    const pivotSphereElements = new Object3D()
    this.childrenCenter.add(pivotSphereElements)

    pivotSphereElements.add(meshEntryOrifice)
    pivotSphereElements.add(meshExitOrifice)
    pivotSphereElements.add(meshjointUpper)
    pivotSphereElements.add(meshjointLower)
    pivotSphereElements.add(meshCap)

    entryOrifice.rotateX(-angleBetweenSphere)

    exitOrifice.rotateX(-Math.PI)
    exitOrifice.rotateX(angleBetweenSphere)

    pivotSphereElements.rotateZ(Math.PI / 2)

    jointUpper.rotateZ(-Math.PI)
    jointUpper.rotateY(jointSizeAngle / 2)
    jointUpper.rotateX(Math.PI / 2)

    jointLower.rotateY(-jointSizeAngle / 2)
    jointLower.rotateX(Math.PI / 2)

    cap.rotateX(Math.PI / 2)

    this.lightManager = new LightManager(this.childrenCenter, new Vector3(0, 0, 0))

    this.meshGroup = new MeshGroup(this.childrenCenter, new Vector3(0, 0, 0))
  }

  getCurrent (): this {
    return this
  }

  addEntry (): void {
    // -x side
    this.openAngleEntry = this.openAngle
  }

  addExit (): void {
    // +x side
    this.openAngleExit = this.openAngle
  }

  addImage (child: MeshLoadable, isStatic: boolean = false): void {
    this.meshGroup.addChild(child, isStatic)
  }

  showChidlren (): void {
    this.meshGroup.show()
  }

  hideChildren (): void {
    this.meshGroup.hide()
  }

  load (): void {
    if (!this.loaded) {
      if (debugLoading) console.log('Load', this)
      this.mesh.add(this.childrenCenter)
      this.loaded = true
      if (this.transporter?.mesh) this.transporter.mesh.turnOnInteraction()
      this.lightManager.turnOnLights()
    }
  }

  unload (): void {
    if (this.loaded) {
      if (debugLoading) console.log('Unloaded', this)
      this.mesh.remove(this.childrenCenter)
      this.loaded = false
      if (this.transporter?.mesh) this.transporter.mesh.turnOffInteraction()
      this.lightManager.turnOffLights()
    }
  }

  setCenter (center: Vector3): void {
    this.center = center
    this.mesh.position.x = this.center.x
    this.mesh.position.y = this.center.y
    this.mesh.position.z = this.center.z
  }

  addTransporter (transporter: Transporter): void {
    this.transporter = transporter
    this.childrenCenter.add(this.transporter.mesh)
  }
}

export { Room }
