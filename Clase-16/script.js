//Bucles para arrays

//Elemento es cualquier dato que este dentro de mi array, EJ: el elemento 'lunes'
/* let dias_de_clase = ['lunes', 'martes', 'miercoles', 'jueves'] */


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
/* console.log(
    'Cuantas dias tendre que mostrar: ' + dias_de_clase.length
) */

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

/*
let dias=["lunes","martes","miercoles","jueves","viernes"]



for(let dia of dias){
    if (dia.includes("l")){
        console.log ("ojo con ese dia")
    }
    else {
        console.log (dia + " es un dia normal")
    }
}
 */

//Funciones

//Presentarme




//Declarar una funcion
/* function presentarme() {
    let nombre = 'mati'
    console.log("Hola a todos, soy " + nombre + '!')
}


//Invocacion
presentarme()
presentarme()
presentarme()
presentarme()

 */


//PARA QUE SIRVEN LAS FUNCIONES?
//Para separar responsabilidades
//Evitar repetir codigo


/* function solicitarTexto (mensaje){
    let texto = prompt(mensaje)
    while(!texto){
        alert("Error, texto no valido")
        texto = prompt(mensaje)
    }
    return texto
}



let nombre = solicitarTexto('Dame el nombre')
let descripcion = solicitarTexto('Dame la descripcion')
console.log('El nombre es: ' + nombre)
console.log('La descripcion es:  ' + descripcion)
 */


//Esta funcion es problematica porque siempre va a ejecutar 1 + 1
//La responsabilidad de esta funcion deberia ser sumar
/*
function sumar1Mas1 (){
    return 1 + 1
}
 */

//Parametros a, b
//Los parametros son la forma en la que nos comunicaremos con la funcion
/* function sumar (numero_1, numero_2){
    let result = numero_1 + numero_2
    return result
}

let result_suma = sumar(null, 'hola') */
/* alert(result_suma) */
/* document.write(result_suma) */


/*
function saludarA (nombre){
    console.log("hola " + nombre)
}

saludarA('Carlos')
saludarA('Pedro')
saludarA('Pepe')
saludarA('Cuadrado')
saludarA(
    prompt('Escribe tu nombre')
) */

//Objetos


//Crear una funcion que se llame calcularIva que reciba un precio (numero) y me devuelva el iva (21%) de ese precio

//Crear una funcion que se llame solicitarOperacion() que solicitara al usuario via prompt una operacion, deberas validar que sea '+', '-', '*' o '/', en caso de no serlo volver a solicitar hasta que se escriba bien. Una vez ingresado correctamente el operador retornar dicho operador

//Solicitar numero, que reciba por parametro el mensaje y valide que el texto solicitado al usuario sea un numero valido (usar isNaN) en caso de no ser valido volver a solicitar. Cuando sea valido retornar el texto pasado a numero

/* 
Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

datos con los cuales deben ser enviados a la función

puedeVerPelicula(12, false)
false
puedeVerPelicula(12, true)
true
puedeVerPelicula(16, false)
true
puedeVerPelicula(18, true)
true

*/

/* 
Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:

esVocal('a')
true
 esVocal('n')
false
 esVocal('e')
true

*/

//Objeto

let auto = {
    'color': 'negro',
    'modelo': 'Civic',
    marca: 'Honda',
    dueños: ['Pepe', 'Tito', 'Walter'],
    'anio': 1995,
}

let auto_2 = {
    'color': 'negro',
    'modelo': 'Civic',
    marca: 'Honda',
    dueños: ['Pepe', 'Tito', 'Walter'],
    'anio': 1995,
}

//Acceder a las propiedades de un objeto con notacion de []
console.log(auto['color'])
console.log(auto['anio'])

//Acceder a las propiedades de un objeto con notacion de .
console.log(auto.marca)

//Quiero cambiar el anio a 1994
auto.anio = 1994
console.log(auto)


let autos = [auto, auto_2]

console.log(autos)