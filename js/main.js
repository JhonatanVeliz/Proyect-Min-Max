// Obtener los valores de los inputs para postereor ordenarlos y filtrarlos al valor de la caja resultado

const form = document.querySelector('#form'),
    vMin = form.querySelector('#v-min'),
    vMax = form.querySelector('#v-max'),
    result = document.querySelector('#result'),
    btnDlete = document.querySelector('.delete'),
    titular = document.querySelector('#titular'),
    debuger = document.querySelector('#ejecutar');

// Obteniendo los valores del icono del darkMode y el title
const btnMode = document.querySelector('#mode'),
      iconMode = btnMode.querySelector('#icon-mode'),
      body = document.querySelector('#body'),
      title = body.querySelector('#title');

// Funcion que mueve el titular de la caja result
const titularMove = () => {
    titular.classList.add('result--message-titular');
}

// funcion que se encarga de mostrar el message con el valor minimo y el maxino con un retraso de 5 segundos
const messageValue = (menor, mayor) => {

    setTimeout(() => {

        result.textContent = (`El valor mínimo es: ${menor}, el valor máximo es: ${mayor}
        y la suma de ambos es: ${menor + mayor}`);

        result.classList.add('result--message-after');
        btnDlete.classList.add('delete--active');

    }, 500)
}

// funcion que se encarga de verificar si alguno de los valores es el minimo y el maximo

const minMax = () => {

    titularMove()

    const valueOne = +(vMin.value);
    const valueTwoo = +(vMax.value);

    if (valueOne < valueTwoo) {
        messageValue(valueOne, valueTwoo);
    } else if (valueTwoo < valueOne) {
        messageValue(valueTwoo, valueOne)
    } else if (valueOne === valueTwoo) {
        result.textContent = `Ambos valores son iguales así que tu resultado es: ${valueOne}`;
        result.classList.add('result--message-after');
        btnDlete.classList.add('delete--active')
    }
}

// Funcion que limpia los campos de los inputs y el mensaje
const reset = () => {
    form.reset();

    result.textContent = '';

    result.classList.remove('result--message-after');
    btnDlete.classList.remove('delete--active');
    titular.classList.remove('result--message-titular');
}

// Funcion que cambia al DarkMode
const darkMode = ()=>{
    body.classList.toggle('bodyDark');
    title.classList.toggle('title--ligth');
    
    let iconSun = './img/sun-dark.png';
    let iconMoon= './img/moon.png';

    if(body.classList == 'bodyDark'){
        iconMode.src = iconMoon;
    }else{
        iconMode.src = iconSun;
    }

}

debuger.addEventListener('click', minMax);
btnDlete.addEventListener('click', reset);
btnMode.addEventListener('click', darkMode);