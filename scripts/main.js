const form = document.querySelector('.form');
const inputValue = document.querySelectorAll('.input-value');
const inputEmail = document.querySelector('.input-email');
const btnSubmit = document.getElementById('btn-submit');


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
  } else if(!validation){
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
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  const iconError =  inputControl.querySelector('.icon-error');
 
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  iconError.style.opacity = '1';
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  const iconError =  inputControl.querySelector('.icon-error');
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
  iconError.style.opacity = '0';
}
