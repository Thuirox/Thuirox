/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { debugModal } from './helpers/const'

// Fullscreen image modal
const imageContainer = document.getElementById('image-container')!

imageContainer.addEventListener('pointerup', (e) => {
  imageContainer.style.opacity = '0'
  imageContainer.style.pointerEvents = 'none'
  e.stopPropagation()
})

// Contact information modal
const contactButton = document.getElementById('contact-button')!
const contactCross = document.getElementById('contact-modal-cross')!
const contactModal = document.getElementById('contact-modal')!
const contactModalContainer = document.getElementById('contact-modal-container')!

function displayContactModal (e: PointerEvent): void {
  if (debugModal) console.log('display contact')
  contactModalContainer.style.opacity = '1'
  contactModalContainer.style.pointerEvents = 'auto'
  contactModalContainer.classList.add('active')
  e.stopPropagation()
}
function hideContactModal (e: PointerEvent): void {
  if (debugModal) console.log('hide contact')
  contactModalContainer.style.opacity = '0'
  contactModalContainer.style.pointerEvents = 'none'
  contactModalContainer.classList.remove('active')
  e.stopPropagation()
}

contactButton.addEventListener('pointerup', displayContactModal)
contactModalContainer.addEventListener('pointerup', hideContactModal)
contactCross.addEventListener('pointerup', hideContactModal)

contactModal.addEventListener('pointerup', (e) => {
  e.stopPropagation()
})

// Redirect modal
const redirectModalContainer = document.getElementById('redirect-modal-container')!
const redirectModalText = document.getElementById('redirect-modal-text')!
const redirectCross = document.getElementById('redirect-modal-cross')!
const redirectModal = document.getElementById('redirect-modal')!

const redirectConfirmButton = document.getElementById('redirect-modal-confirm-button')! as HTMLLinkElement
const redirectCancelButton = document.getElementById('redirect-modal-cancel-button')!

redirectModal.addEventListener('pointerup', (e) => {
  e.stopPropagation()
})

redirectModalContainer.addEventListener('pointerup', hideRedirectModal)
redirectCross.addEventListener('pointerup', hideRedirectModal)
redirectCancelButton.addEventListener('pointerup', hideRedirectModal)

function displayRedirectModal (): void {
  if (debugModal) console.log('display Redirect')
  redirectModalContainer.style.opacity = '1'
  redirectModalContainer.style.pointerEvents = 'auto'
  redirectModalContainer.classList.add('active')
}

function hideRedirectModal (e: PointerEvent): void {
  if (debugModal) console.log('hide Redirect')
  redirectModalContainer.style.opacity = '0'
  redirectModalContainer.style.pointerEvents = 'none'
  redirectModalContainer.classList.remove('active')
  e.stopPropagation()
}

export {
  displayRedirectModal,
  redirectModalText,
  redirectConfirmButton,
  imageContainer,
  contactModalContainer,
  redirectModalContainer
}
