// Less Code
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

function isValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input , `${getRealId(input)} is invalid`);
    }
}

// Function which convert alphabets

function getRealId(input) {
   data = input.id.charAt(0).toUpperCase() + input.id.slice(1,8).toLowerCase();
   return data;
}

// Function to check if required field have data

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value === '') {
            showError(input,`${getRealId(input)} is required`)
        }  else{
            showSuccess(input);
        }
    });
}

//Function to check lenght

function checkLength(input,min,max) {
    if(input.value.length < min ) {
     showError(input,`${getRealId(input)} needs to be atleast ${min}`)
    } else if(input.value.length > max) {
     showError(input,`${getRealId(input)} needs to be atmost ${max}`)
    } else {
     showSuccess(input);
    }
}

//Function to confirm password

function confirmPassword(input1 , input2) {
    if(input1.value === input2.value) {
        showSuccess(input1);
        showSuccess(input2);
    } else {
        showError(input1,`${getRealId(input1)} does not match`)
        showError(input2 ,`${getRealId(input2)} does not match`)
    }

}

// event listner creates for Object
form.addEventListener("submit",function(e) {
    e.preventDefault();
      checkRequired([username,email,password,password2]);
      checkLength(username,3,10);
      checkLength(password,6,30);
      isValidEmail(email);
      confirmPassword(password,password2);
})