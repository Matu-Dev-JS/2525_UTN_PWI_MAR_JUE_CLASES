//Es de tipo objeto y a estos objetos les decimos diccionarios
const ID_VALUES_COUNTER = {
    INCREMENT_BTN: 'increment-counter-btn',
    DECREMENT_BTN: 'decrement-counter-btn',
    COUNTER: 'counter-value'
}

const increment_btn_HTML = document.getElementById(ID_VALUES_COUNTER.INCREMENT_BTN)
const decrement_btn_HTML = document.getElementById(ID_VALUES_COUNTER.DECREMENT_BTN)
const counter_HTML = document.getElementById(ID_VALUES_COUNTER.COUNTER)

//Necesito la variable que guarde el valor de mi contador (empieza en 0)
let counter = 20


function renderCounter () {
    counter_HTML.innerText = counter
}

function incrementCounter () {
    counter = counter + 1
    renderCounter()
}

function decrementCounter () {
    counter = counter - 1
    renderCounter()
}

//cada vez que el usuario incremente o decremente el contador yo volvere a imprimir el resultado en la pantalla

//Cuando le de click a '+' incrementara
//Cuando le de click a '-' decrementara
increment_btn_HTML.addEventListener('click', incrementCounter)
decrement_btn_HTML.addEventListener('click', decrementCounter)

//la primera vez que se carge la pagina se renderize el contador
renderCounter()


