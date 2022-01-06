const form = document.querySelector('#submit-form')
const inputs: HTMLInputElement[] = Array.from(
   document.querySelectorAll('.input')
)
const emailInput: HTMLInputElement = document.querySelector('#input-email')
const emailRegex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', (e) => {
   const errors = inputs.filter((input) => !input.value)
   const email = emailRegex.test(emailInput.value)

   if (errors.length || !email) {
      e.preventDefault()
   }
})
