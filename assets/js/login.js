const btnLogin = document.querySelector('#login');
const content = document.querySelector('.container');
const firstContentOne = document.querySelector('.first-content1');
const secondContentTruw = document.querySelector('.second-content2');
const cadastroBtn = document.querySelector('.btn-cadastro');

btnLogin.addEventListener('click', () => {
    firstContentOne.style.display='none';
    secondContentTruw.style.display='inline-flex';
    firstContentOne.classList.add('movimento');
});

cadastroBtn.addEventListener('click', () => {
    firstContentOne.style.display='inline-flex';
    secondContentTruw.style.display='none';
    
})