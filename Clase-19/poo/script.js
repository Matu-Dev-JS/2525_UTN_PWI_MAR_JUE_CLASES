//5 MIN
//Quiero que crees a 3 personas, cada persona debera tener nombre, nivel, edad
//3 variables distintas
/* 
Les parece engorroso o repetitiva o POCO FIABLE esta forma de crear personas? cual seria una forma mas fiable de crear objetos?
SOLUCION: Podriamos crear una funcion y delegar la responsabilidad de crear una persona

*/

//Que significa un pais en mi programa?
//Un pais es un objeto con la propiedad nombre y contiente
//Ejemplo de objeto: const pais = {nombre: 'Argentina', continente: 'America del Sur'}
/* 
const pais1 = {nombree: 'Argentina', continente: 'America del Sur'}
const pais2 = {nombre: 'Argentina', continentee: 'America del Sur'}
const pais3 = {nombre: 'Argentina', continente: 'America del Sur'} 
*/

//Que responsabilidad tiene esta funcion? Crear un pais con las propiedades correctas
/* 
function crearPais(nombre, continente, pbi){
    //PASO 1: Crear el objeto pais
    const nuevo_pais = {
        'nombre': nombre,
        'continente': continente,
        pbi: pbi
    }
    //PASO 2: Retornarlo
    return nuevo_pais
}

const pais1 = crearPais('Argentina', 'America del Sur', 60000)
const pais2 = crearPais('Francia', 'Europa', 900000)
const pais3 = crearPais('Brasil', 'America del Sur', 300000) 
*/

//Nuestra solucion no es estandar
//Si bien esto funciona JS ya se adelanto y nos ofrecio otra solucion 
//JS tiene su propia sintaxis para crear funciones constructoras
//Por convencion las funciones constructoras deben ir con UpperCamelCase (PaisSoberano, ComputadoraGamer, ProgramacionFuncional)
/* function Pais (nombre, continente){
    //Palabra reservada this
    //EN ESTE CONTEXTO, la funcion Pais devuelve devuelve un objeto, this es ese objeto
    //IMPLICITAMENTE this se retorna cuando la funcion es llamada mediante new

    //Inicialmente this es un objeto vacio
    //console.log('Como es this?', this) //{}

    //Al objeto this le agregue una propiedad, habitantes y asigne el valor 0
   
    this.nombre = nombre
    this.continente = continente
    //Como es el objeto this ahora?
    //console.log('Como es this?', this) 
}

//Como instanciar a la funcion pais
//Cuando instanciamos una funcion dicha funcion retorna a su objeto this
const pais1 = new Pais('Argentina', 'America del Sur')
const pais2 = new Pais('Francia', 'Europa')
console.log('El retorno de mi funcion constructora es', pais1) */


/* function crearPersona(nombre, nivel, edad){
    const nueva_persona = {
        nombre: nombre,
        nivel: nivel,
        edad: edad
    }
    return nueva_persona
}

const persona1 = crearPersona('juan', 1, 20) */


/* function Persona (nombre, nivel, edad, dinero_inicial, dinero_bonus) {
    this.nombre = nombre
    this.nivel = nivel
    this.edad = edad
    this.dinero = dinero_inicial + dinero_bonus
}


const persona_1 = new Persona("alan", 3, 25, 200, 20)
console.log(persona_1) */


//Estado y comportamiento
function Gato (nombre){
    this.nombre = nombre
    this.vidas = 7
}

/* function gatoCaeMuyAlto (gato){

    if(gato.vidas === 0){
        console.log(gato.nombre + ' paso a mejor vida...')
    }
    else{
        gato.vidas = gato.vidas - 1
        console.log(gato.nombre + ' esta a ' + gato.vidas + ' vidas de morir...') 
    }
} */

//Quiero asociar a mi funcion de gatoCaeMuyAlto con la funcion constructora Gato

//Creo el metodo caerMuyAlto que define que pasara con los gato cuando caiga muy alto
//Para crear un metodo debes asignarle una funcion anonima
Gato.prototype.caerMuyAlto = function (){
    //Quien es this en este contexto
    //El gato que haya invocado a este metodo
    //console.log('Se cayo el gato: ', this)

    if(this.vidas === 1){
        console.log(this.nombre + ' paso a mejor vida...')
    }
    else{
        this.vidas = this.vidas - 1
        console.log(this.nombre + ' esta a ' + this.vidas + ' vidas de morir...') 
    }
}

const gato_1 = new Gato('Garfield')
const gato_2 = new Gato('Gaturro')
const gato_3 = new Gato('Tom')

gato_1.caerMuyAlto()
gato_1.caerMuyAlto()
gato_1.caerMuyAlto()
gato_1.caerMuyAlto()
gato_1.caerMuyAlto()
gato_1.caerMuyAlto()
gato_1.caerMuyAlto()

//Persona ahora tendra el comportamiento (method) subirNivel, el nivel maximo de una persona debe ser 3
//subirNivel al ser ser invocado debera incrementar en 1 el nivel de la persona y debera mostrar por consola 'la persona persona.nombre ha subido un nivel, ahora tiene persona.nivel nivel'
//Si llego al nivel maximo decir 'persona.nombre ha llegado a su nivel maximo'


/* 
gatoCaeMuyAlto(gato_3)
gatoCaeMuyAlto(gato_3)
gatoCaeMuyAlto(gato_3)
gatoCaeMuyAlto(gato_3)

gatoCaeMuyAlto(gato_2)
gatoCaeMuyAlto(gato_2)
gatoCaeMuyAlto(gato_2)
gatoCaeMuyAlto(gato_2)
 */


function Persona (nombre, edad, nivel) {
    this.nombre = nombre;
    this.edad = edad;
    this.nivel = nivel;
    
    
    //ESTO ES UNA PROPIEDAD, NO UN METODO, ES INCORRECTO PORQUE LOS METODOS DEBERIAN GUARDARSE 1 sola vez en memoria y este se guarda EN CADA INSTANCIA, NOOO ES UN METODO
    /*  
    this.maullar = function (){
        console.log(this.nombre + ' esta maullando')
    } 
    */
}

Persona.prototype.subirNivel = function() {
    if (this.nivel === 3) {
        console.log( this.nombre + " alcanzo el nivel 3 que es el máximo!");
    }
    else{
        this.nivel = this.nivel + 1;
        console.log(this.nombre + " subio de nivel a " + this.nivel);
    }
}


const personaUno = new Persona("Matias", 30, 0);
const personaDos = new Persona("Morena", 25, 1);
const personaTres = new Persona("Lucas", 35, 2);

//personaUno.maullar()
personaDos.subirNivel()
personaDos.subirNivel()
personaDos.subirNivel()
personaDos.subirNivel()
personaDos.subirNivel()


//ES6 class

class Cat {
    constructor(nombre){
        this.nombre = nombre
        this.vidas = 7
        this.energia = 100
    }

    caer( ){
        if(this.vidas === 1){
            console.log(this.nombre + ' paso a mejor vida...')
        }
        else{
            this.vidas = this.vidas - 1
            console.log(this.nombre + ' esta a ' + this.vidas + ' vidas de morir...') 
        }
    }

    coma(kg_comida){
        this.energia = this.energia + kg_comida * 10
        
    }
}

const cat_1 = new Cat('Tom')

cat_1.caer()
cat_1.caer()
cat_1.caer()
cat_1.caer()
cat_1.coma(10)

/* 
Vamos a crear una clase llamada Personaje
Un personaje
nombre
vida (inicialmente es 200)
nivel (inicialmente 1)
dinero 
profesion (inicialmente 'desempleado')
energia (inicialmente 100)

Metodos/Comportamientos
    mover(metros_movimiento)
        Cada metro a moverse tiene un costo de 0.01 de energia, checkear si el movimiento no agotara la energia y en caso de no hacerlo disminuir la energia correspondiente y decir por consola 'al personaje personaje.nombre le queda persona.energia energia'
        En caso de no tener esa energia decir por consola 'el personaje personaje.nombre no puede hacer esa accion, no tiene la suficiente energia'
    hablar(mensaje)
        recibira un mensaje por parametro y dira 'Personaje personaje.nombre ha dicho: mensaje'
*/


//personaje_principal.hablar('Yo creo que es una mala idea')