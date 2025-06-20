const array_inmutable = [1, 3, 7]
const numero_nuevo = 9

//ESTO ES INVALIDO
//const nuevo_array_2 = array_inmutable
//nuevo_array_2.push(numero_nuevo)

//Puedo crear un nuevo array a partir de mi array inmutable
//puedo clonar mi array usando [...nombre_array_a_clonar], el operador ... se lo conoce como spread operator
//Cuando clono, en la memoria se crea un nuevo array distinto del orginal

const nuevo_array = [...array_inmutable]
nuevo_array.push(numero_nuevo)

console.log(nuevo_array)
console.log(array_inmutable)
