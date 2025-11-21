
let User=document.getElementById('email')
let Password=document.getElementById('pass')
let baton=document.querySelector('button')
let emailError=document.getElementById('email_error')
let passwordError=document.getElementById('pass_error')
let form=document.querySelector('form')

form.addEventListener('submit',(ev)=>{
    ev.preventDefault()

    const Email=User.value.trim()
    const Pass=Password.value.trim()

    //clear input field
    emailError.textContent==''
    passwordError.textContent==''

    let isValid=true

    function validateEmail(){

        if(Email===''){
            emailError.textContent='Email required'
        }
        if(Email !='Haningtonemasinde@gmail.com'){
            emailError.textContent='invalid email'
            isValid=false
            return
        }
    }
    function validatePassword(){
        
        if(Pass==''){
            passwordError.textContent='password required'
            isValid=false
            return
        }
        if(Pass !='Hani@2005'){
            passwordError.textContent='Invalid password'
            isValid=false
            return
        }
    }
    validateEmail()
    validatePassword()

    if(isValid){
        window.location.href='home.html'
    }

})