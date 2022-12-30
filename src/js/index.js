import openToast from './app-toast'

const form = document.querySelector('#home_form')
const ctaButton = document.querySelector('[data-end-cta]')

window.addEventListener('load', () => {
  const openingMessage = '👋 Hello, world! This is a Youlead challenge for a Frontend Developer position.'
  openToast(openingMessage)
})

ctaButton.addEventListener('click', () => {
  const form = document.querySelector('#home_form')
  const firstInput = document.querySelector('#first_name')
  form.classList.add('-highlight')
  firstInput.focus()
})

form.addEventListener('blur', (e) => {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    form.classList.remove('-highlight')
  }
})