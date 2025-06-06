
function dividir (dividendo, divisor){
    return dividendo / divisor
}

dividir(9, 3)

//Contratos
//Parametros es un objeto con la propiedad dividendo y divisor
//dividendo y divisor deben ser numeros

//Desestructuro de los parametros el dividendo y el divisor
//Ventajas de hacerlo asi:
//-No importa el orden
//-Es mas sencillo hacer cambios
function dividirMejorado({dividendo, divisor}) {
    return dividendo / divisor
}

let resultado_3 = dividirMejorado(
    {
        dividendo: 9,
        divisor: 3
    }
)

dividirMejorado({
    divisor: 3,
    dividendo: 9
})

console.log("El resultado de la funcion es " + resultado_3)


let persona = {nombre: 'pepe', edad: 73}
let {nombre, edad} = persona
console.log(`
    Hola me llamo ${nombre} y tengo ${edad} años
`)

const config = {
    process: {
        variables: {
            project_id: 1,
            dark_mode: false
        },
        version: '1.1.0',
        engine: 'node'
    },
    __v: 'static'
}


//Quiero acceder a la version de proyecto y que motor utiliza
let {version, engine} = config.process
console.log(`
    Mi proyecto esta en version ${version} y usa el motor ${engine}
`)


//DIA 1 creo esta funcion para solcitar un dato

//Contratos
//La funcion se compromete a solicitar algo al usario mediante prompts
//La funcion retorna el texto solicitado
//La funcion recibe al parametro mensaje que es un texto
function solicitarDato ({mensaje, texto_error, color}){
    if(!texto_error){
        texto_error = 'error'
    }
    let texto = prompt(mensaje)
    while(!texto){
        if(color){
            alert(color)
        }
        
        alert(texto_error)
        texto = prompt(mensaje)
    }
    return texto
}


//DIA 2: Empiezo a usar mi funcion

let nombre_2 = solicitarDato({
    mensaje:'Ingresa tu nombre'
})
let nombre_colegio = solicitarDato(
    {
        mensaje: 'Ingresa el nombre del colegio',
        texto_error: 'Error, esa escuela esta mal escrita',
        color: 'rojo'
    }
)
let nombre_pais = solicitarDato({
    mensaje: "Ingresa el nombre de tu pais"
})

//Dia 3: Mi jefe quiere que cuando solicite el nombre del colegio se pueda mostrar un mensaje distinto a 'error' en caso de fallar ('Error, esa escuela esta mal escrita')