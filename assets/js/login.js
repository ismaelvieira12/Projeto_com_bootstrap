const btnLogin = document.querySelector('#login');
const cadastroBtn = document.querySelector('#sinUp');
const body = document.querySelector('body');
const firstContentOne = document.querySelector('.first-content1');
const secondContentTruw = document.querySelector('.second-content2');

btnLogin.addEventListener('click', () => {
    secondContentTruw.style.display='inline-flex';
    secondContentTruw.style.opacity='1'
    secondContentTruw.style.zIndex='15';
    firstContentOne.style.display='none';
    body.className ="sin-in-js"
});

cadastroBtn.addEventListener('click', () => {
    firstContentOne.style.display='inline-flex';
    secondContentTruw.style.display='none';
    body.className= "sin-up-js"
})
