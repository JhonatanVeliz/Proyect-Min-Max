// Obtener los valores de los botones del nav en modo celular para portereormente al ser clickeados tomen el bgk black
const botones = document.querySelectorAll('.btn-bg'),
      bodyAfter = document.querySelector('#elementAfter'),
      btnPlusNav = document.querySelector('#plus');
      nav = document.querySelector('#nav');
      btnBars = document.querySelectorAll('.menu');

// Funcion que coloca y quita el bgk black
const bkBlack = (e)=>{
    e.target.classList.toggle('bg-black');
};
// Funcion que pone el after en el body
const bodyElementAfter = ()=>{
    bodyAfter.classList.toggle('element-after');
}
// Controlando cada click de los botones para el bgBlack
botones.forEach( (e)=>{
    e.addEventListener('click', bkBlack)
})
// Evento que escucha el click del boton plus que esta en la barra de navegacion. 
btnPlusNav.addEventListener('click', bodyElementAfter);

// Funcion que abre y cierra el menu
const openMenu = ()=>{
    nav.classList.toggle('nav__container--active');
}

// ForEach que escucha cada boton de bars para abrir y cerrar el menu responsive
btnBars.forEach( (e)=>{
    e.addEventListener('click', openMenu)
})
