/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { debugLoading } from './helpers/const'

const progressBar = document.getElementById('loading-screen-progress-bar')!
const loadingScreen = document.getElementById('loading-screen')!

function loadingScreenSetup (): void {
  const startButton = document.getElementById('loading-screen-text-start')!
  const startButtonContainer = document.getElementById('loading-screen-text-start-container')!

  // progressBar.style.opacity = "0";

  startButton.style.opacity = '0.8'

  const startButtonAnimationTimeout = setTimeout(() => {
    startButton.classList.add('start-button-animation')
  }, 2000)

  setTimeout(() => {
    startButtonContainer.style.cursor = 'pointer'

    loadingScreen.onclick = () => {
      clearTimeout(startButtonAnimationTimeout)
      const currentOpacity = getComputedStyle(startButton).opacity
      startButton.style.opacity = currentOpacity

      startButton.classList.remove('start-button-animation')

      startButtonContainer.style.opacity = '0'

      // Loading screen animation
      document.getElementById('loading-screen-break-strip__top')!.style.height = '100%'
      document.getElementById('loading-screen-break-strip__bottom')!.style.height = '100%'

      setTimeout(() => {
        // controlManager.updateOffset()
        document.getElementById('loading-screen-left-panel')!.style.left = '-100%'
        document.getElementById('loading-screen-right-panel')!.style.left = 'calc(100% + 5px)'
        document.getElementById('loading-screen-text')!.style.bottom = '150%'
        loadingScreen.style.pointerEvents = 'none'
        loadingScreen.classList.remove('active')
      }, 1000)
    }
  }, 300)
}

const nbTextureToLoad = 36
let nbLoaded = 0

function updateProgressionLoaded (): void {
  nbLoaded += 1

  progressBar.style.width = ((nbLoaded / nbTextureToLoad) * 100).toString() + '%'

  if (debugLoading) console.log(nbLoaded, nbTextureToLoad)

  if (nbLoaded === nbTextureToLoad) {
    loadingScreenSetup()
  }
}

export { updateProgressionLoaded, loadingScreen }
