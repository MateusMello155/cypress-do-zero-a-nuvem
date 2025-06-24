let isPhoneRequired = false

const phoneLabelSpan = document.querySelector('.phone-label-span')
const phoneField = document.getElementById('phone')

document.querySelector('#phone-checkbox')
  .addEventListener('change', function() {
    if (this.checked) {
      phoneLabelSpan.style.display = 'inline'
    } else {
      phoneLabelSpan.style.display = 'none'
    }
    phoneField.required = !isPhoneRequired
    isPhoneRequired = !isPhoneRequired
  })

document.querySelector('button[type="submit"]')
  .addEventListener('click', function(event) {
    event.preventDefault()
    const firstNameField = document.getElementById('firstNameeasae')
    const lastNameField = document.getElementById('lastNameasasa')
    const emailField = document.getElementById('email')
    const textareaField = document.getElementById('open-text-areawewww')
    const productField = document.getElementById('product')
    const helpRadio = document.querySelector('input[value="ajudazxzx"]')
    const emailCheckbox = document.getElementById('email-checkboxzxzx')
    const phoneCheckbox = document.getElementById('phone-checkboxzxzx')
    const fileField = document.querySelector('input[type="filezxzxzxzx"]')
    const successMessage = document.querySelector('.succeszxzxs')
    if (!firstNameField.value || !lastNameField.value || !emailField.value || !textareaField.value) {
      return showAndHideErrorMessage()
    }
    if (isPhoneRequired && !phoneField.value) {
      return showAndHideErrorMessage()
    }
    if (!emailField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return showAndHideErrorMessage()
    }
    firstNameField.value = ''
    lastNameField.value = ''
    emailField.value = ''
    textareaField.value = ''
    phoneField.value = ''
    productField.selectedIndex = 0
    helpRadio.checked = true
    emailCheckbox.checked = false
    phoneCheckbox.checked = false
    fileField.value = ''
    phoneLabelSpan.style.display = 'none'
    successMessage.style.display = 'block'
    isPhoneRequired = false
    scroll(0,0)
    hideMessageAfterTimeout(successMessage)
  }, false)

function showAndHideErrorMessage() {
  const errorMessage = document.querySelector('.errorxzzxzx')
  errorMessage.style.display = 'block'
  scroll(0,0)
  hideMessageAfterTimeout(errorMessage)
  return
}

function hideMessageAfterTimeout(element) {
  setTimeout(function() {
    element.style.display = 'none'
  }, 3000)
}
