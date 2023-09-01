const form = document.querySelector('#userdata');
const usernameInput = document.querySelector('#username');
const mobNumInput = document.querySelector('#mobNum');
const emailInput = document.querySelector('#email');
const optnsInput = document.querySelector('#optns');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        submitData();
     }else {
         event.preventDefault();
     }

     event.preventDefault();
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.form-control');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }else if(usernameInput.value.trim().length <3 || usernameInput.value.trim().length > 20){
        setError(usernameInput, 'Name must be min 3 and max 20 charecters');
    }else {
        setSuccess(usernameInput);
    }
    
    //MOBILE NUMBER
    if(mobNumInput.value.trim()==''){
        setError(mobNumInput, 'Provide Mobile Number');
    }else if(isMobnumValid(mobNumInput.value)){
        setSuccess(mobNumInput);
    }else{
        setError(mobNumInput, 'Provide valid Mobile Number');
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }
    
    // OPTIONS
    if(optnsInput.value.trim()==''){
        setError(optnsInput, 'Options can not be empty');
    }else 
        setSuccess(optnsInput);
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

// Check Mail ID is valid
function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

// Check Mobile Number is valid
function isMobnumValid(mobNum) {
    // const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
    const reg = /(0|91)?[6-9][0-9]{9}/;
     
    return reg.test(mobNum)
  }
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

