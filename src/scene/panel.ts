import { type Vector3 } from 'three'
import { imageContainer } from '../modal'
import { Image } from './image'

class Panel extends Image {
  constructor (path: string, position: Vector3, size: number = 5, opacity: number = 1, isVideo: boolean = false, callback = () => {}, isAnimated: boolean = true) {
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

class PanelHtml extends Image {
  constructor (path: string, divId: string, position: Vector3, size: number = 5, opacity: number = 1, isVideo: boolean = false, callback = () => {}, isAnimated: boolean = true) {
    super(path, position, size, opacity, isVideo, callback)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const el = document.getElementById(divId)!

    const textArea = el.querySelector('.modal-detail-area')

    if (textArea) {
      textArea.addEventListener('pointerup', (e) => {
        e.stopPropagation()
      })
    }

    el.addEventListener('pointerup', (e) => {
      el.style.opacity = '0'
      el.style.pointerEvents = 'none'
      e.stopPropagation()
    })

    this.mesh.onInteraction = () => {
      el.style.opacity = '1'
      el.style.pointerEvents = 'auto'
    }

    if (isAnimated) {
      this.addAnimation()
    }
  }
}

class Title extends Image {
  constructor (path: string, position: Vector3, size: number = 5, opacity: number = 1) {
    super(path, position, size, opacity, false)
  }
}

export { Panel, Title, PanelHtml }
