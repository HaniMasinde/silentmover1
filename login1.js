
let User=document.getElementById('email');
let Password=document.getElementById('pass');
let baton=document.querySelector('button');
let emailError=document.getElementById('email_error');
let PasswordError=document.getElementById('pass_error');
let form=document.querySelector('form')

let eye=document.getElementById('eye');
let allowance=document.getElementById('allow');

function showPassword(){
    if(Password.type==='password'){
        Password.type='text';
        eye.style.color='black';
    }
    else{
        Password.type='password';
        eye.style.color='grey'
    }

}

eye.addEventListener('click',showPassword)

form.addEventListener('submit',(ev)=>{
    ev.preventDefault()

    const Email=User.value.trim()
    const Pass=Password.value.trim()

   let isValid=true;

   function validateEmail(){

    if(Email==''){
        emailError.style.height='30px';
        emailError.textContent='Email required';
        isValid=false;
        return;
    }
    if(Email!='haningtonemasinde@gmail.com'){
         emailError.style.height='30px';
        emailError.textContent='Invalid Email';
        isValid=false;
        return;
    }

   }

   function validatePassword(){

    if(Pass==''){
        allowance.style.marginBottom='20px';
        PasswordError.textContent='Email required';
        isValid=false;
        return;
    }
    if(Pass!='Hani@2005'){
         allowance.style.marginBottom='20px';
        PasswordError.textContent='Invalid password';
        isValid=false;
        return;
    }

   }
   
   validateEmail();
   validatePassword();

   if(isValid){
    baton.addEventListener('click',()=>{
        window.location.href='home.html';
    })
   }
})