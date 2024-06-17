const inputCheked = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheked.addEventListener('click', () => {
    const modo = inputCheked.checked ? 'dark': 'light';
    elemento.setAttribute('data-bs-theme', modo);
})