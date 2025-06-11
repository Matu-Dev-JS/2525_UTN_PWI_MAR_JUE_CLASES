function sumar (a, b) {
    return a + b
}

function restar (a, b){
    return a - b
}

const PI = 3.14

export function multiplicar (a, b){
    return a * b
}

//Export es una palabra reservada que nos permite exportar
export {sumar, PI, restar}

//CADA MODULO TIENE LA POSIBILIDAD DE TENER 1 EXPORT DEFAULT
//export default 'hola'
export default sumar