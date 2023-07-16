import * as THREE from 'three'
import { loader } from '../helpers/const'
import { addRandomness } from '../helpers/utils'
import { Animation } from '../animation'
import { MeshInteractive } from '../interaction'
import { updateProgressionLoaded } from '../loadingScreen'
import { Logger } from '../helpers/logger'

interface TextureLoaded {
  texture: THREE.Texture
  width: number
  height: number
}

class Image {
  private readonly path: string

  public readonly position: THREE.Vector3

  public readonly size: number
  private readonly opacity: number
  private readonly isVideo: boolean

  public readonly mesh: MeshInteractive

  constructor (path: string, position: THREE.Vector3, size: number = 5, opacity: number = 1, isVideo: boolean = false, callback = () => {}) {
    this.path = path

    this.position = position

    this.size = size

    this.opacity = opacity

    this.isVideo = isVideo

    this.mesh = this.createMesh(position)

    void this.loadTexture().then((texture: TextureLoaded) => {
    // Scale mesh to match image ratio
      this.mesh.material.map = texture.texture
      this.mesh.scale.set(1, texture.height / texture.width, 1.0)
    })

    callback()
  }

  createMesh (position: THREE.Vector3): MeshInteractive {
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: this.opacity,
      side: THREE.DoubleSide,
      alphaTest: 0.5
    })

    const geometry = new THREE.PlaneGeometry(this.size, this.size)

    const mesh = new MeshInteractive(undefined, geometry, material)

    // set the position of the image
    mesh.position.set(position.x, position.y, position.z)

    // Make the panel look where it comes from
    mesh.lookAt(0, 0, 0)

    return mesh
  }

  async loadTexture (): Promise<TextureLoaded> {
    let texture
    if (this.isVideo) {
      texture = this.loadVideo()
    } else {
      texture = this.loadImage()
    }
    updateProgressionLoaded()
    return await texture
  }

  async loadVideo (): Promise<TextureLoaded> {
    const video = document.getElementById(this.path) as HTMLVideoElement

    if (!video) {
      Logger.error(`Video note found: ${this.path}`)
      throw new Error(`Video note found: ${this.path}`)
    }

    video.muted = true // Mute video to force play. Without this play raises a security error.
    void video.play()

    // Best filtering method would be LinearMipmapLinearFilter like for images.
    // But for some reasons when sets on videos, they stop working.
    const texture = new THREE.VideoTexture(video)
    texture.minFilter = THREE.LinearFilter
    // texture.maxFilter = THREE.LinearFilter

    const width = texture.image.videoWidth
    const height = texture.image.videoHeight

    return { texture, width, height }
  }

  async loadImage (): Promise<TextureLoaded> {
    const texture = await loader.loadAsync(this.path)
    const width = texture.image.width
    const height = texture.image.height

    return { texture, width, height }
  }

  addAnimation (): void {
    const offsetX = 0
    let offsetY = 0.2

    offsetY = addRandomness(offsetY, 0.5)

    const animationDuration = 5000

    const imageAnimation = new Animation<number, undefined>(
      1, 0, animationDuration,
      (ratio, _) => {
        if (ratio < 0.5) {
          const relativeRatio = ratio / 0.5
          const position = {
            x: this.position.x + offsetX * relativeRatio,
            y: this.position.y + offsetY * relativeRatio,
            z: this.position.z
          }
          this.mesh.position.set(position.x, position.y, position.z)
        } else {
          const relativeRatio = (ratio - 0.5) / 0.5

          const position = {
            x: this.position.x + offsetX * (1 - relativeRatio),
            y: this.position.y + offsetY * (1 - relativeRatio),
            z: this.position.z
          }
          this.mesh.position.set(position.x, position.y, position.z)
        }
      },
      undefined, undefined)

    imageAnimation.init()
    imageAnimation.setIsLooping(true)
  }
}

export { Image }
