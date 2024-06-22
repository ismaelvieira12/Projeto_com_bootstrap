const btnLogin = document.querySelector('#login');
const cadastroBtn = document.querySelector('#sinUp');
const body = document.querySelector('body');
const firstContentOne = document.querySelector('.first-content1');
const secondContentTruw = document.querySelector('.second-content2');
const inputCheck = document.querySelector('.eye-password');
const inputCheck2 = document.querySelector('#eye-password2');
const verPassword = document.querySelector('.eye');
const verPassword2 = document.querySelector('#eye');



btnLogin.addEventListener('click', () => {
    secondContentTruw.style.display='inline-flex';
    secondContentTruw.style.opacity='1'
    secondContentTruw.style.zIndex='15';
    body.className ="sin-in-js"
});

cadastroBtn.addEventListener('click', () => {
    firstContentOne.style.display='inline-flex';
    secondContentTruw.style.display='none';
    body.className= "sin-up-js"
})

inputCheck.addEventListener('click', () => {
    const inputPassword = document.querySelector('.password');
    
    if(inputCheck.checked == true){
        verPassword.classList.add('fa-eye');
        inputPassword.setAttribute('type', 'text');
    }
    else if (inputCheck.checked == false ){
        verPassword.classList.remove('fa-eye');
        inputPassword.setAttribute('type', 'password');
    }
})

inputCheck2.addEventListener('click', () => {
    const inputPassword = document.querySelector('#Password2');
    if (inputCheck2.checked == true){
        verPassword2.classList.add('fa-eye');
        inputPassword.setAttribute('type', 'text');
    }
    else if (inputCheck2.checked == false ){
        verPassword2.classList.remove('fa-eye');
        inputPassword.setAttribute('type', 'password');
    }
})
