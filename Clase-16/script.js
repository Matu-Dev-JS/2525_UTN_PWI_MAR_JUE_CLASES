//Bucles para arrays

//Elemento es cualquier dato que este dentro de mi array, EJ: el elemento 'lunes'
let dias_de_clase = ['lunes', 'martes', 'miercoles', 'jueves']


//Mostra todos los dias
//principio DRY (Dont repeat yourself)

/* 
console.log(dias_de_clase[0])
console.log(dias_de_clase[1])
console.log(dias_de_clase[2]) 
*/

//Solucion? BUCLES!
//Que bucle deberiamos usar? FOR
/* 
Se cuantas veces debo repetir la accion? SI, por dias_de_clase.length 
*/
console.log(
    'Cuantas dias tendre que mostrar: ' + dias_de_clase.length
)

/* for(
    let i = 0;
    i <  dias_de_clase.length; //Limite: Mientras i sea menor a la cantidad e elementos
    i = i + 1
){
    console.log(dias_de_clase[i])
} */

//FOR OF: Se usa para recorrer listas
/* for(let element of dias_de_clase){
    console.log(element)
} */


//Le quiero preguntar al usuario cual es un dia que le gustaria agregar a la lista de dias

/* let nuevo_dia = prompt('Decime el dia que queres agregar')

while(dias_de_clase.includes(nuevo_dia)){
    alert('dia ya existente')
    nuevo_dia = prompt('Decime tu dia nuevamente')
}

dias_de_clase.push(nuevo_dia)

for(let dia of dias_de_clase){
    console.log("El dia " + dia + ' hay clases')
}
 */


//Si el nombre del dia tiene la letra l mostrar por consola 'Ojo con ese dia' sino mostrar por consola, 'X dia es un dia normal'

//FORMA DE SABER SI X string ESTA DENTRO DE OTRO
//console.log('lunes'.includes('l'))

//PASO: 1, recorrer el array con un for of o for 
//PASO: 2, Evaluar si el dia incluye el string 'l'
//PASO: 3, Dependiendo de si la condicion da true o false, mostrar por consola el mensaje indicado 


//Funciones
//Objetos