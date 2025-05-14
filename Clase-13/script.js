//Tipos de datos
//Operadores aritmeticos
//Valores verdaderos y false

//Operadores logicos
/* Los operadores logicos nos permiten expresar condiciones logicas en el lenguaje */

/* Por ejemplo: Si hoy es viernes y salgo temprano del trabajo entonces me como una pizza a la noche */
/* Por ejemplo: Si me llamo matias o pepe puedo pasar a la sala de espera */

/* 
&& (AND) y logico
|| (OR) o logico
!  (NOT) no logico = Devuelve el valor booleano opuesto (SIEMPRE DEVUELVE BOOLEAN)
*/
//NOT primero intenta pasar el dato a boolean y luego nos da el valor opuesto

//AND  Evalua el primer valor, de ser falso lo devolvera sino devolvera el segundo
/* console.log('hola' && 'pepe')
console.log('' && 0)
console.log(NaN && false) */

//OR Evalua el primer valor, de ser verdadero devuelve el primero sino devuelve el segundo
/* console.log(9 || 0 )
console.log(NaN || null)
console.log('hola' || 'pepe') */

//Comparadores: Siempre devuelven booleanos
/* 
==: Es igual a (solo compara igualdad de valor no de tipo de dato)
===: Es estrictamente igual (Compara igualdad de valor Y de tipo)
!=: Es distinto de
!==: Es estrictamente distinto de (Compara desigualdad de valor Y de tipo)
//Usenlas solo con numbers
>: Es mayor a
<: Es menor a
>=: Es mayor o igual
<=: Es menor o igual
*/
/* console.log(1300 == 2000)
console.log(1300 != 2000)
console.log(1 == '1')
console.log(true == 1)
console.log(true == '1')
//Excepcion de JS
console.log(null == undefined)
//Excepcion de JS
console.log(NaN == NaN) */
/* 1300 != 2000 */
//!(1300 == 2000) 
//!(false)
//true

//!1300 == 2000
//!Boolean(1300) == 2000
//!true == 2000
//false == 2000
//false
//!1300==null //false (Null solo es comparable con null y undefined)

//!1300==1 //false
//!1300=='' //true


/* 1 === 1  */
//1 == 1 && typeof(1) == typeof(1)
//true && 'number' == 'number'
//true && true
//true


/* 4 !== (Boolean(1) + Boolean(3)) */
//4 !== true + true
//4 !== Number(true) + Number(true)
//4 !== 1 + 1
//4 !== 2
//true


/* true * false */
//Number(true) * Number(false)
//1 * 0
//0

/* 4 !== 2 * (Boolean(1) + Boolean(3)) */
//4 !== 2 * (true + true) 
//4 !== 2 * (1 + 1)
//4 !== 4
//false

/* '4' != 2 * (Boolean(1) + Boolean(3)) */
//'4' != 4
// false

/* '4' !== 2 * (Boolean(1) + Boolean(3)) */
//'4'!== 4
//true

/* 
JAVASCRIPT NO ES UN LENGUAJE TIPADO
Es un lenguaje DEBILMENTE TIPADO
*/

//Variables: Nos permiten guardar datos en la memoria
//Tipo de variable: var
//Se pueden reasignar
//Se pueden redeclarar
//Las variables sin valor inicial tendran el valor undefined
//Las variables VAR tienen hoisting

//Declarar variable


/* var nombre = 'pepe'
nombre = 'juan'
//Ejemplo de uso de la variable
console.log('hola mi nombre es ' + nombre )
nombre = 'maria'
console.log('hola mi nombre es ' + nombre ) */


//ES6 EcmaScript 6 
//let
//Se pueden reasignar
//NO Se pueden redeclarar (en mismo ambito/bloque de codigo)
//Las variables sin valor inicial tendran el valor undefined
//Las variables LET NO tienen hoisting


/* let nombre = 'pepe'
nombre = 'juan'
console.log('hola mi nombre es ' + nombre )
 */
//const
//NO Se pueden reasignar
//NO Se pueden redeclarar (en mismo ambito/bloque de codigo)
//No se puede NO dar un valor inicial
//Las variables CONST NO tienen hoisting
//Las van a entender bien mas adelante

/* const PI = 3.14
const URL_SERVIDOR = 'http://myserver.com'
 */

//Ambito y alcance

//variable global
/* let nombre = 'pepe' */


/* {
    //alcance local porque se declaro dentro de x bloque
    let nombre = 'juan'
    console.log(nombre)
    //Bloque de codigo
    console.log('hola')

    //El alcance de esta variable es dentro del bloque de codigo
    let edad = 22
    
    {
        console.log(edad)
    }
}

{
    console.log(nombre)
}

console.log('chau')

console.log(nombre) */
let nombre = 'pepe'

{
    nombre = 'juan'
    {
        let nombre = 'maria'
        console.log(nombre)
        {
            console.log(nombre)
        }
    } 
    console.log(nombre)
    {
        nombre = 'pedro'
    }
    console.log(nombre)
}

console.log(nombre)

//maria, maria, juan, pedro, pedro

//Condiciones
