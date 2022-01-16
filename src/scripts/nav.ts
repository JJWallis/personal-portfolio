const hamburger = document.querySelector('#btn-hamburger')
const nav = document.querySelector('.nav-pm-ct')

hamburger.addEventListener('click', () => {
   const isSelected = hamburger.getAttribute('aria-selected')
   if (isSelected === 'false') {
      hamburger.setAttribute('aria-selected', 'true')
      hamburger.classList.add('active')
      nav.setAttribute('data-visible', 'true')
   } else {
      hamburger.setAttribute('aria-selected', 'false')
      hamburger.classList.remove('active')
      nav.setAttribute('data-visible', 'false')
   }
})
