//Valores falsy: 0, false, NaN, '', null, undefined
//Valores truthy: Todos los que NO son falsy

//Sinataxis
//IF(condicion){}
//ELSE{}

//Condiciones
/* console.log("el programa se prendio")
let es_administrador = false

//Evalua si el valor es truthy (verdadero)
if (es_administrador == true) {
    console.log('hola administrador')
}
else {
    console.log('Hola ciudadano promedio')
} */


/* let nombre = 'pepe'

if (nombre) {
    if (nombre === 'pepe') {
        console.log("Como andas pepe?")
    }
    else {
        console.log('Vos te llamas ' + nombre)
    }

}
else {
    console.log("Vos no tenes nombre")
}
 */


//Este codigo tiene problemas
//IF ELSE HELL
/* if (!dia) {
    console.log("no se que dia es")
}
else {
    if (dia === 1) {
        console.log('Feliz domingo')
    }
    else {
        if (dia === 2) {
            console.log('Uy, es lunes..😴')
        }
        else {
            if (dia === 3) {
                console.log('Bueno, vamos por el martes ☕')
            }
            else{
                if (dia === 4) {
                    console.log('Ya casi termina, hoy es miercoles..')
                }
                else{
                    if (dia === 5) {
                        console.log('Hoy es jueves 📢')
                    }
                }
            }
        }
    }
} */
//ELSE IF
/* if (!dia) {
    console.log("no se que dia es")
}
else if (dia === 1) {
    console.log('Feliz domingo')
}
else if (dia === 2) {
    console.log('Uy, es lunes..😴')
}
else if (dia === 3) {
    console.log('Bueno, vamos por el martes ☕')
}
else if (dia === 4) {
    console.log('Ya casi termina, hoy es miercoles..')
}
else if (dia === 5) {
    console.log('Hoy es jueves 📢')
}
else{
    console.log('Nro de dia invalido')
}
 */

//Javascript tiene funciones nativas
/* console.log() */
/* alert('hola') */
/* let dia = Number( prompt('ingresa el nro de dia') )
alert(typeof(dia))

if (!dia) {
    alert("no se que dia es")
}
else if (dia === 1) {
    alert('Feliz domingo')
}
else if (dia === 2) {
    alert('Uy, es lunes..😴')
}
else if (dia === 3) {
    alert('Bueno, vamos por el martes ☕')
}
else if (dia === 4) {
    alert('Ya casi termina, hoy es miercoles..')
}
else if (dia === 5) {
    alert('Hoy es jueves 📢')
}
else{
    alert('Nro de dia invalido')
}
 */
//Bucles: Nos permiten repetir un bloque de codigo

//FOR: Se usa cuando queres repetir una accion una x cantidad de veces
//Voy a mandar un mail a 40 usuarios

//QUIERO ESCRIBIR POR CONSOLA 5 veces el mensaje 'hola'

//Accion: Escribir el mensaje 'hola' por consola
//Cuantas veces queremos que se repita: 5

//Quiero ejecutar esta accion 5 veces



/* for(
    //Es una variable local
    let iterator = 1; //Creo el iterador en 1, marcando la primera repeticion
    iterator <= 5; //Condiciono el limite de mi bucle (Mientras la condicion es verdadera se vuelve a ejecutar el bloque de codigo)
    iterator = iterator + 1 //Ritmo de actualizacion (se ejecuta cada vez que se ejecute mi bloque de codigo)
)
{
    console.log('Iterador: ' + iterator)
    console.log('hola')
} */
//NO puedo acceder a iterator por fuera del for ya que es local
/* console.log(iterator) */


/* for(
    let i = 1; 
    i <= 5; 
    i = i + 1 
)
{
    console.log('Iterador: ' + i)
    console.log('hola')
} */


//Pedir al usuario 5 precios y mostrar el resultado total
//FOR
//Accion: Pedir un precio y sumarlo al total
//Limite: 5

let total = 0

for(
    let i = 1; 
    i <= 5; 
    i = i + 1 
)
{
    
    let precio = prompt('Dame el precio del producto ' + i)
    while(precio === ''){
        alert('precio no valido')
        precio = prompt('Dame el precio del producto ' + i)
    }
    total = total + Number(precio)
}
console.log('Total: $' + total)

//WHILE: Se usa cuando queres repetir una accion mientras x condicion se cumpla
//Mientras este entre las 2 y las 5 de la tarde voy a mandar un mail cada 30 min
//Mientras el usuario no escriba bien su nombre se lo volvere a pedir


//Cuando hacemos un blucle while hay que separar la accion de la condicion

//accion: Pedir el nombre
//condicion: Escribirlo mal (si es '' esta mal por ejemplo)
/* 
let nombre = prompt('Ingresa tu nombre') 
let nro_intento = 0
while(nombre === ''){
    nro_intento = nro_intento + 1
    if(nro_intento > 5){
        break //Cortar el bucle
    }
    alert('Error, nombre no valido')
    nombre = prompt('Reingresa tu nombre (intento nro: ' + nro_intento + ')')
}

if(nro_intento > 5){
    alert('Has superado el limite de intentos')
}
else{
    alert("Nombre ingresado: " + nombre)
} 
*/
//CUIDADO CON LOS BUCLES INFINITOS
//Este es el unico bucle infinito valido:while(true) learn 
/* let edad 
while(edad !== NaN){
    alert("Soy un bucle infinito")
}
 */
/* alert("Nombre ingresado: " + nombre) */





//Tipos de datos objeto



/* 
EJERCITACION:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a)	La cantidad de valores negativos ingresados.
b)	La cantidad de valores positivos ingresados.
c)	La cantidad de múltiplos de 15.

Hacer un programa que solicite los 3 lados de un triangulo informar:
-  Qué tipo de triángulo es: equilátero , isósceles o escaleno 
*/