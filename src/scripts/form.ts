type Input = HTMLInputElement

const form = document.querySelector('#submit-form')
const inputs: Input[] = Array.from(document.querySelectorAll('.input'))
const emailInput: Input = document.querySelector('#input-email')
const message: Input = document.querySelector('#input-message')
const emailRegex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function createErrMsgs(errors: Input[], emailMsg: string) {
   errors.forEach((input) => {
      const errMsg = document.createElement('strong')
      errMsg.classList.add('input--error__msg')
      errMsg.innerText =
         input.id === emailInput.id ? emailMsg : 'This field is required'
      input.parentElement.appendChild(errMsg)
   })
}

form.addEventListener('submit', (e) => {
   const errors = inputs.filter((input) => !input.value)
   const email = emailRegex.test(emailInput.value)
   const emailErrorMsg = !email ? 'Please enter a valid email adddress' : null

   if (!email && !errors.find((input) => input.id === emailInput.id))
      errors.push(emailInput)

   if (errors.length) {
      e.preventDefault()
      inputs.forEach((input) => {
         input.classList.remove('input--error')
         input.nextElementSibling?.remove()
      })
      errors.forEach((input) => input.classList.add('input--error'))
      createErrMsgs(errors, emailErrorMsg)
   }
})
