const contenedor_div = document.getElementById('contenedor')

const productos = [
    {
        titulo: 'Tv samsung 42"',
        precio: 200,
        descripcion: 'Es una TV muy mas o menos'
    },
    {
        titulo: 'Tv samsung 45"',
        precio: 300,
        descripcion: 'Es una TV buena'
    },
    {
        titulo: 'Tv samsung 50"',
        precio: 500,
        descripcion: 'Es una TV muy buena'
    },
    {
        titulo: 'Tv samsung 42"',
        precio: 200,
        descripcion: 'Es una TV muy mas o menos'
    },
    {
        titulo: 'Tv samsung 45"',
        precio: 300,
        descripcion: 'Es una TV buena'
    },
    {
        titulo: 'Tv samsung 50"',
        precio: 500,
        descripcion: 'Es una TV muy buena'
    }
]
//Lo que quiero es transformar el array en un string con html


let resultado_string = ''



for (const producto of productos) {
    resultado_string = resultado_string + `
        <div class='product-card'>
            <h2>${producto.titulo}</h2>
            <p>${producto.descripcion}</p>
            <span>Precio: $${producto.precio}</span>
        </div>
    `
}

contenedor_div.innerHTML = resultado_string




//CASOS DE CONSTANTES
//SI es un dato primitivo usa LET
//SINO usa CONST (array, objetos)

//EJEMPLO

//let nombre = 'pepe'
//const persona = {edad: 35, nombre: 'Flor'}

//Datos primitivos que sabemos que no van a variar en la ejecucion del programa deberian ser constantes (Se las suele escribir en UPPER_SNAKE_CASE)

//EJEMPLO

//const URL_SERVER = 'http://mi-server.com'
//const PI = 3.14

//Datos que son objetos diccionario
//Que es un objeto diccionario?

/* 
const CONFIG = {
    HORA_DE_AUTODESTRUCCION: "22:00",
    COLOR_DE_FONDO: 'red',
    DIA_QUE_ENVIARE_1000_MAILS: 'martes',
    PORCENTAJE_IVA: 21
} 
*/
/* function calcularIva (precio){
    return precio * (CONFIG.PORCENTAJE_IVA / 100)
} */



//SI NO SABES FOR OF USA FOR SIMPLE:
/* for(let i = 0; i < productos.length; i = i + 1){
    let producto = productos[i]
    resultado_string = resultado_string + `
        <div class='product-card'>
            <h2>${producto.titulo}</h2>
            <p>${producto.descripcion}</p>
            <span>Precio: $${producto.precio}</span>
        </div>
    `
    console.log(resultado_string)
} */


























/* let producto = {
    titulo: 'Tv samsung 42"',
    precio: 200,
    descripcion: 'Es una TV muy buena'
}

contenedor_div.innerHTML = `
    <div class='product-card'>
        <h2>${producto.titulo}</h2>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
    </div>
` */