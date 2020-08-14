
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

// All functions

// Function to show error

function showError( input , message ) {
  const formControl =  input.parentElement; 
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message ;
}

// Function to show success

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check Emaill(

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Function which convert alphabets

function getRealId(input) {
   data = input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase();
   return data;
}

// Function to check if required field have data

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value === '') {
            showError(input,`${getRealId(input)} is required`)
        }else{
            showSuccess(input);
        }
    });
}

// event listner creates for Object
form.addEventListener("submit",function(e) {
    e.preventDefault();
      checkRequired([username,email,password,password2]);

})