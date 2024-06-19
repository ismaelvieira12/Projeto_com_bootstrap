const buttonClick = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');
<<<<<<< HEAD
const icons = document.querySelector('.icons');
const smol = document.querySelector('.smol');
=======
const icons = document.querySelector('#icons');
>>>>>>> 938321106d2173fe1470c5c8dc746366d8c01a37

buttonClick.addEventListener('click', () => {
    const modo = buttonClick.checked ? 'dark' : 'light';
    if(modo === 'dark'){
        elemento.setAttribute('data-bs-theme', modo);
        icons.classList.add('bi-sun');
<<<<<<< HEAD
        smol.classList.add('bi-sun')
        icons.style ='color: #000';
    }else if(modo == 'light') {
        smol.classList.remove('bi-sun');
=======
        icons.style ='color: #000';
    }else if(modo == 'light') {
>>>>>>> 938321106d2173fe1470c5c8dc746366d8c01a37
        elemento.setAttribute('data-bs-theme', modo);
        icons.classList.add('bi-moon-stars-fill');
       
    }
<<<<<<< HEAD
})


=======
})
>>>>>>> 938321106d2173fe1470c5c8dc746366d8c01a37
