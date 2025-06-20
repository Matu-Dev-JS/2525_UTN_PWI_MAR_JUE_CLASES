const sumar = (a, b) => {
    let resultado = a + b
    return resultado
}

//Retorno explicito
const saludar = (nombre) => {
    return 'Hola ' + nombre
}

//Retorno implicito
//La funcion en flecha que no tiene llaves tiene el RETURN en la misma flecha, en este caso se retornara 'Hola ' + nombre 
const saludarAbreviado = (nombre) => 'Hola ' + nombre

const calcularIva = (precio) => (
    precio * 0.21
)

//SI LA FUNCION TIENE UN SOLO PARAMETRO, no es necesario encerrarlo entre parentesis
const doble = numero => numero * 2

