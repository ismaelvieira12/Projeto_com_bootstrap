const btnLogin = document.querySelector('#login');
const content = document.querySelector('.container');
const firstContentOne = document.querySelector('.first-content1');
const secondContentTruw = document.querySelector('.second-content2');

btnLogin.addEventListener('click', () => {
    firstContentOne.style.display='none';
    secondContentTruw.style.display='inline-flex';
});