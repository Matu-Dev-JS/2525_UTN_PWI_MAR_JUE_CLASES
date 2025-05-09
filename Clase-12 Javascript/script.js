//JAVASCRIPT ES CASE SENSITIVE, diferencia entre mayusculas y minusculas

/* Comentario multilinea */
/* console.log("hola mundo") */

//COMENTARIO UNILINEA
//TIPOS DE DATOS: PRIMITIVOS
//STRING: Se lo usa para escribir texto
/* 'Hola'
"Hola"
"hola"
"0"
`Pepe` */

//Si queres pasar un dato a string pasalo por esta maquinita: String()

//NUMBERS:
/* 3
2.1
-4
Infinity
0
NaN  *///Not a number

//BOOLEAN: Se los usa para indicar verdad o falsedad
/* true
false
 */
//Undefined: Se usa para indicar la no definicion de un valor
/* undefined */

//Null: Se usa para indicar la nulidad de un dato (Esta en debate si este dato tiene sentido)
/* null */

//Operadores aritmeticos
//NO SE PUEDE OPERAR DATOS DE DISTINTO TIPO

//CONCATENACION: + Ocurre cuando uno de los dos valores (o ambos) es un string y va devolver siempre un STRING
//QUE hace? Trasforma al valor no string en string y luego los unira

//SIEMPRE DEVUELVEN NUMEROS
//Cualquiera de estas operaciones con un NaN siempre da NaN
//Los datos distintos de numero se transforman a numero
//SUMA: + Cuando ocurre? Cuando no hay string, DEVUELVE UN NUMERO
//RESTA: -  Cuando ocurre? Siempre
//MULTIPLICACION: * Cuando ocurre? Siempre
//DIVISION: / Cuando ocurre? Siempre

//ESTO es un caso de concatenacion
/* console.log(1 + '1')  *///'11'

//Esto lo ejecuta JS implicitamenta
//console.log( String(1) + '1')
//console.log('1' + '1')

//console.log('11')

/* 
console.log( typeof(1 + '1') )

console.log( typeof( String(1) ) )

console.log( String('hola') )
 */
/* console.log( Number('-1.2') )
console.log( Number('HOLA') )
console.log( Number(false) )
console.log( Number(true) ) */
/* console.log( Number(null) ) */ //0
/* console.log( Number(undefined) )  *///NaN


//Valores verdaderos y valores falsos ( falsy, truthy )
//(truthy) Los valores verdaderos son los valores que al transformarse en BOOLEAN dan true
//(falsy) Los valores falsos son los valores que al transformarse en BOOLEAN dan false

//FALSY: 0, '', null, undefined, NaN (estos valores al trasformarse a boolean dan false)
/* console.log( 'Hola es: ' + Boolean(null) ) */

console.log('hola'  * 4)
// Number('hola') * 4
// NaN * 4
// NaN

//Concatenacion
// 89000 + 'hola'

console.log(null + undefined) //number NaN

console.log(40 + 'hola') //string '40hola'

console.log('4' - 2) //number 2

console.log(7 * '9') //number 63

console.log(0 + String(Boolean(false))) //string '0false'