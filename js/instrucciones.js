// Obtener el valor del aside y del boton para que al darle click este desaparezca
const aside = document.querySelector('#aside');
      btnAside = document.querySelectorAll('.move');

// Funcion que hara que desaparezca o aparezca el aside
const appearAside = ()=>{
    aside.classList.toggle('aside--move');
};

// Ejecutando el evento click al btnAside
btnAside.forEach(e => {
    e.addEventListener('click', appearAside);
});;
window.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        appearAside();
    }
})
