/* Datos objeto (complejos) */
//Arrays literal
//Sinonimos: lista, arreglo, array, colleccion, matriz, vector
//Que nos da de nuevo? Nos permite listar de forma ordenada muchos datos
let dias_semana = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

/* console.log('Hoy es el dia ' + dias_semana[3])

//Cuantos dias hay en una semana
//Para eso podemos usar la propiedad length (longitud del array)
console.log('En una semana hay ' + dias_semana.length + ' dias') */

//Soy caesar y quiero cambiar el dia lunes por osvaldo
/* dias_semana[0] = 'osvaldo'
//dias_semana[18] = 'osvaldo'//Esto seria un mal uso de la reasignacion

console.log(dias_semana) */

//Metodos de array 

//Quiero agregar un dia a la semana
//metodo push, devuelve la nueva longitud
//Metodos mutables: Cuando los llamo mutan al array
/* dias_semana.push('Pepus') */


/* 
Caso de uso:
let notas = []
let nota = prompt('Ingresa tu nota')
notas.push(nota) 
*/
//Agregar un elmento al inicio del array
/* dias_semana.unshift("Osvaldo") */

//Eliminar el ultimo dia 
//metodo .pop, devuelve el valor eliminado
/* let ultimo_dia_eliminado = dias_semana.pop()


console.log('Eliminaste el dia: ' + ultimo_dia_eliminado) */

//Eliminar el primer dia
//metodo .shift, devuelve el valor eliminado
/* dias_semana.shift() */

//Quiero eliminar o agregar un dato en cierta posicion

//Quiero eliminar a miercoles y jueves
//Cual es la posicion desde la que queres empezar a eliminar?

//.indexOf => Devuelve la posicion de cierto elemento en el array
//.lastIndexOf => Devuelve la posicion de cierto elemento pero del final al principio
/* let posicion_miercoles = dias_semana.indexOf('miercoles')

dias_semana.splice(
    posicion_miercoles, //Indice de inicio de eliminacion
    2 //Cantidad de elementos a eliminar
) */

//Agregar un elemento en cierto indice
//Quiero que despues de el jueves haya un domingo

/* let posicion_jueves = dias_semana.indexOf('jueves')

dias_semana.splice(
    posicion_jueves,
    0, //Cantidad de elementos a eliminar
    'domingo'
)

console.log(dias_semana) */

//Quiero saber si el dia lunes existe dentro de mis dias
//.includes(), devuelve un boolean

console.log( dias_semana.includes('Lunes') )
