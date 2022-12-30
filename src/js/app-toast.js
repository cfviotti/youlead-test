const openToast = (message, time = 5000) => {

// using insertAdjcenteHTML create a toast element that is inserted into the body of the page with a custom message, and only after it's inserted, add the -open class to it, after the open animation ends, remove the -open class, after this animation ends remove the element from the DOM.
  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <div class="app-toast" style="--time: ${time}ms">
        <p>
          ${message}
        </p>
        <span class="timer"/>
      </div>
    `
  )
  const toast = document.querySelector('.app-toast');
  const timer = document.querySelector('.app-toast .timer');

  timer.addEventListener('animationend', () => {
    setTimeout(() => {
      toast.classList.add('-hide')
      toast.addEventListener('animationend', () => {
        toast.remove();
      })
    }, 0)
  })
}

export default openToast;