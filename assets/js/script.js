const buttonClick = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');
const icons = document.querySelector('#icons');

buttonClick.addEventListener('click', () => {
    const modo = buttonClick.checked ? 'dark' : 'light';
    if(modo === 'dark'){
        elemento.setAttribute('data-bs-theme', modo);
        icons.classList.add('bi-sun');
        icons.style ='color: #000';
    }else if(modo == 'light') {
        elemento.setAttribute('data-bs-theme', modo);
        icons.classList.add('bi-moon-stars-fill');
       
    }
})