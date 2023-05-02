// Obteniendo los valores del boton de retos t la caja de retos
const boxFather= document.querySelector('#box-father'),
      btnRetos = document.querySelectorAll('.btn-retos'),
      boxRetos = boxFather.querySelector('#retos'),
      linkReto = boxFather.querySelectorAll('.link-retos');

// Funcion de aparecer y desaparecer retos
const apeearRetos = ()=>{
    boxRetos.classList.toggle('list-retos--active');
    boxFather.classList.toggle('extra--item--retos--active');
};
// Funcion que lee cada link de retos y si uno es cliqueado se cierra la ventana modal
linkReto.forEach( (e)=>{
    e.addEventListener('click', apeearRetos);
})

btnRetos.forEach((e)=>{
    e.addEventListener('click', apeearRetos);
})