const form = document.querySelector('#submit-form')
const inputs: HTMLInputElement[] = Array.from(
   document.querySelectorAll('.input')
)
const emailInput: HTMLInputElement = document.querySelector('#input-email')
const emailRegex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function createErrMsgs(errors: HTMLInputElement[]) {
   errors.forEach((input) => {
      const errMsg = document.createElement('strong')
      errMsg.classList.add('input--error__msg')
      errMsg.innerText =
         input.id === emailInput.id
            ? 'This field is required'
            : 'This field is required'
      input.previousElementSibling.appendChild(errMsg)
   })
}

form.addEventListener('submit', (e) => {
   const errors = inputs.filter((input) => !input.value)
   const email = emailRegex.test(emailInput.value)

   if (errors.length || !email) {
      e.preventDefault()
      inputs.forEach((input) => input.classList.remove('input--error'))
      errors.forEach((input) => input.classList.add('input--error'))
   }
})
