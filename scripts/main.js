const form = document.querySelector('.form');
const inputValue = document.querySelectorAll('.input__value');
const inputEmail = document.querySelector('.input__email');
const btnSubmit = document.getElementById('btnSubmit');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmptyInputs();
  validateEmailInput(); 
});

function checkEmptyInputs() {
  inputValue.forEach((input) => {
    // get input names to create error message
    const nameInput = input.getAttribute('name');
    const string = nameInput.replace(/-/,' ');
    const final = string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    
    // check out for empty values.
    if(input.value === '' || input.value == null) {
      setErrorMessage(input, `${final} cannot be empty`);
    } else {
      setSuccess(input);
    }  
    
    input.placeholder = '';
  });
}  

function validateEmailInput() {
  const validation = isValidEmail(inputEmail.value);

  if(inputEmail.value == '' || inputEmail.value == null) {
    setErrorMessage(inputEmail, 'Email cannot be empty');
  } else if(!validation) {
      setErrorMessage(inputEmail, 'Looks like this is not an email');
  } else {
    setSuccess(inputEmail);
  }
  inputEmail.placeholder = '';
}  
function isValidEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/; 

  return reg.test(String(email).toLocaleLowerCase());
}

function setErrorMessage(element, message) {
  const inputContainer = element.parentElement;
  const errorMessage = inputContainer.querySelector('.error__message');
  const errorIcon = inputContainer.querySelector('.error__icon');
 
  errorMessage.innerText = message;
  inputContainer.classList.add('border__error');
  inputContainer.classList.remove('border__success');
  errorIcon.style.opacity = '1';
}

function setSuccess(element) {
  const inputContainer = element.parentElement;
  const errorMessage = inputContainer.querySelector('.error__message');
  const errorIcon = inputContainer.querySelector('.error__icon');
  
  errorMessage.innerText = '';
  inputContainer.classList.add('border__success');
  inputContainer.classList.remove('border__error');
  errorIcon.style.opacity = '0';
}
