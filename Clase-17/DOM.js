//DATOS
//CONDICIONES
//CICLOS/BUCLES
//ARRAY
//OBJETOS



//DOM (Document Object Model) y Eventos
//Es un objeto que guarda TODA la informacion de nuestro HTML

console.dir(document)

//Quiero que en la pagina en el H1 (titulo) aparezca un saludo al usuario
let nombre = 'pepe' /* prompt('dame tu nombre') */ //prompt

//Buscar al h1 con id titulo
let h1 = document.getElementById('titulo')
console.dir(h1)
h1.innerText = `Resultado es: ${nombre}` 
console.log(h1.innerText)

//PRACTICA
//Solicitar 2 valores numericos al usuario (si quieren pueden validarlos)
//Mostrar en un span en HTML: 
// Resultado: {numero_1} + {numero_2} = {resultado}

let resultado_span = document.getElementById('resultado')

let numero_1 = 5 //prompt('Dame un numero')
let numero_2 = 5 //prompt('Dame un numero')

resultado_span.innerText = `
    ${numero_1} + ${numero_2} = ${numero_1 + numero_2}
`

//Template string
