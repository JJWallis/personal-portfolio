const hamburger = document.querySelector('#btn-hamburger')
const nav = document.querySelector('.nav-pm-ct')

hamburger.addEventListener('click', () => {
   const isSelected = hamburger.getAttribute('aria-selected')
   if (isSelected === 'false') {
      hamburger.setAttribute('aria-selected', 'true')
      nav.setAttribute('data-visible', 'true')
   } else {
      hamburger.setAttribute('aria-selected', 'false')
      nav.setAttribute('data-visible', 'false')
   }
})
