import type * as THREE from 'three'
import { imageContainer } from '../modal'
import { Image } from './image'

class Panel extends Image {
  constructor (path: string, position: THREE.Vector3, size: number = 5, opacity: number = 1, isVideo: boolean = false, callback = () => {}, isAnimated: boolean = true) {
    super(path, position, size, opacity, isVideo, callback)

    this.mesh.onInteraction = () => {
      // On click, make image full screen.
      imageContainer.style.backgroundImage = 'url(' + path + ')'
      imageContainer.style.opacity = '1'
      imageContainer.style.pointerEvents = 'auto'
    }

    if (isAnimated) {
      this.addAnimation()
    }
  }
}

class Title extends Image {
  constructor (path: string, position: THREE.Vector3, size: number = 5, opacity: number = 1) {
    super(path, position, size, opacity, false, undefined)
  }
}

export { Panel, Title }
