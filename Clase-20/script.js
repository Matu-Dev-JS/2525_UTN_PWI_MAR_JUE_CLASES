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
class Personaje {
    //Definir las propiedades/atributos de mi personaje
    constructor({ nombre, dinero }) {
        //La funcion constructora es una funcion que se ejecutara cuando se instancie la clase
        this.nombre = nombre
        this.dinero = dinero
        this.vida = 200
        this.nivel = 1
        this.profesion = 'desempleado'
        this.energia = 100
    }

    mover(distancia_metros) {
        const costo_energia = distancia_metros * 0.01
        if (this.energia > costo_energia) {
            console.log(`${this.nombre} se ha movido.` )
            
            this.energia = this.energia - costo_energia
            console.log(`Ahora tiene ${this.energia} de energia`)
        }
        else {
            console.log(this.nombre + " no tiene la suficiente energia para esa operacion")
        }
    }
    hablar(mensaje) {
        console.log(`${this.nombre} ha dicho: ${mensaje}`);
    }
}


//Instancio la clase Personaje, es instanciar porque usamos la palabra reservada new
//Que parametros nos interesa pasar por la funcion constructora?
//Los valores que necesita la funcion constructora para crear el objeto
//Que valores necesita tener el personaje: 
const personaje_1 = new Personaje({ nombre: 'Pepe', dinero: 0 })
const personaje_2 = new Personaje({ nombre: 'Juan', dinero: 0 })
new Personaje({
    dinero: 0,
    nombre: "maria"
})

console.log(
    personaje_1,
    personaje_2
)

personaje_1.mover(40000)
personaje_2.mover(5)
personaje_2.hablar("Woaw que cansado estoy")
//personaje_principal.hablar('Yo creo que es una mala idea')


//Veniamos del paradigma funcional
//Que vimos la clase pasada? Programacion orientada a objetos
//Es una forma diferente de programar, donde vamos a crear nuestras funciones y variables dentro de objetos

//JAVA BASADO EN PROGRAMACION ORIENTADA A OBJETOS
//JAVASCRIPT tiene SOPORTE para programacion orientada a objetos
//class, new, this, constructor

//Que podemos hacer con las class? Las class nos permiten construir objetos


//Alguna duda que quede pendiente?
