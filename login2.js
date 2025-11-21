
let username=document.getElementById('username')
let email=document.getElementById('email')
let password=document.getElementById('password')
let usernameError=document.getElementById('username_error')
let emailError=document.getElementById('email_error')
let passwordError=document.getElementById('pass_error')
let baton=document.querySelector('buttom')
let frm=document.querySelector('form')

frm.addEventListener('submit',(evnt)=>{
    evnt.preventDefault();

    let isValid=true
    usernameError.textContent==''
    emailError.textContent==''
    passwordError.textContent==''

    let usernameInput=username.value.trim()
    let emailInput=email.value.trim()
    let passwordInput=password.value.trim()

    function validateUsername(){
        if(usernameInput==''){
            usernameError.textContent='Username required'
            isValid=false;
            return
        }
        if(usernameInput.length<4){
            usernameError.textContent='Aleast 4 characters'
            isValid=false
            return
        }
        if(usernameInput.length>12){
            usernameError.textContent='Atmost 11 characters'
            isValid=false
            return
        }
        if(usernameInput.includes('0'|'1'|'3'|'4'|'5'|'6'|'7'|'8'|'9')){
            usernameError.textContent='Must only be alphabets'
            isValid=false;
            return
        }
    }

    function validateEmail(){
        if(emailInput==''){
            emailError.textContent='email required'
            isValid=false;
            return
        }
        if(!emailInput.includes('@')){
            emailError.textContent='Invalid'
            isValid=false
            return
        }
        if(!emailInput.includes('.com')){
            emailError.textContent='Invalid'
            isValid=false
            return
        }
    }
    function validatePassword(){
        if(passwordInput==''){
            passwordError.textContent='password required'
            isValid=false;
            return
        }
        if(passwordInput.length<4){
            passwordError.textContent='Aleast 4 characters'
            isValid=false
            return
        }
        if(passwordInput.length>8){
            passwordError.textContent='Atmost 8 characters'
            isValid=false
            return
        }
    }
    validateUsername()
    validateEmail()
    validatePassword()

    if(isValid){
        window.location.href='home.html'
    }


})