/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a)  La cantidad de valores negativos ingresados.
b)  La cantidad de valores positivos ingresados.
c)  La cantidad de múltiplos de 15. */

console.log()
/* PARADIGMA DRY: DON'T REPEAT YOURSELF */
let valoresNegativos = 0
let valoresPositivos = 0
let multiplosQuince = 0
for(
    let iterador = 1; 
    iterador <= 2;
    iterador = iterador + 1
){
    let valorString = prompt("Ingrese el valor número " + iterador)
    //Mientras el valor string sea un not a number volvere a preguntar
    while( isNaN(valorString) ){
        alert('Error, el dato debe ser un NUMERO')
        valorString = prompt('Por favor, ingresa el numero correctamente: ')
    }

    let valorNumber = Number(valorString)
    if( valorNumber < 0 ){
        valoresNegativos = valoresNegativos + 1 /* valoresNegativos++ */
    }
    else if( valorNumber > 0){
        valoresPositivos++ /* Esto tiene el mismo funcionamiento que la línea 21 el concepto se llama sintax sugar*/
    }
    
    //%
    //150 / 10 = 15
    //155 / 10 = 15.5
    //155 % 10 = 5
    if( valorNumber != 0 && valorNumber % 15 === 0 ){
        multiplosQuince = multiplosQuince + 1
    }
}

console.log('Valores negativos: ' + valoresNegativos )
console.log("Valores positivos: " + valoresPositivos)
console.log('Valores multiplos de 15: ' + multiplosQuince)

/* for( let i = 5; i > 0; i = i - 1){
    console.log('hola')
} */

//Number('hola') // NaN