const form = document.querySelector('#submit-form')
const inputs: HTMLInputElement[] = Array.from(
   document.querySelectorAll('.input')
)
const emailInput: HTMLInputElement = document.querySelector('#input-email')
const emailRegex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function createErrMsg(errors: HTMLInputElement[]) {
   const errMsg = document.createElement('strong')
   errMsg.classList.add('input--error__msg')
   errMsg.innerHTML = `<p>Please correct the following errors:</p>`
   errors.forEach((error) => {
      const errorMsg = document.createElement('p')
      errorMsg.innerHTML = error.dataset.error
      errMsg.appendChild(errorMsg)
   })
   return errMsg
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
