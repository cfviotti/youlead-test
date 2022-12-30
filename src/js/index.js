import openToast from './app-toast'

const ctaButton = document.querySelector('[data-end-cta]')
const formContainer = document.querySelector('[data-form-container]')
const form = document.querySelector('#home_form')
const firstInput = document.querySelector('#first_name')

const url = new URL(window.location.href);

if (url.searchParams.get('theme') === 'green') {
  document.documentElement.setAttribute('data-theme', 'green')
}

window.addEventListener('load', () => {
  const openingMessage = '👋 Hello, world! This is a Youlead challenge for a Frontend Developer position.'
  openToast(openingMessage)
})

ctaButton.addEventListener('click', () => {
  formContainer.classList.add('-highlight')
  firstInput.focus()
})

form.addEventListener('focusout', (e) => {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    formContainer.classList.remove('-highlight')
  }
})