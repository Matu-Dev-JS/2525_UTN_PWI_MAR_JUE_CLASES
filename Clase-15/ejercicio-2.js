/* Hacer un programa que solicite los 3 lados de un triangulo informar:
-  Qué tipo de triángulo es: equilátero , isósceles o escaleno */


let lado1 = null
let lado2 = null
let lado3 = null
let tipo = "ESCALENO"
//Si el valor es negativo o es un dato no transformable a numero (NaN)
//Lo pide nuevamente
while(!lado1 ||  lado1 <= 0 || isNaN(lado1) ){
    lado1 = Number(
        prompt("Ingresa un valor numerico > 0 para lado 1 del triangulo")
    )
}
while( !lado2 ||  lado2 <= 0 || isNaN(lado2) ){
    lado2= Number(
        prompt("Ingresa un valor numerico > 0 para lado 2 del triangulo")
    )
}
    while(!lado3 ||  lado3 <= 0 || isNaN(lado3)){
    lado3= Number(
        prompt("Ingresa un valor numerico > 0 para lado 3 del triangulo")
    )
}

//Primero vemos si es equilatero
if( ( ( lado1 + lado2 + lado3 ) / 3) === lado1 ){
    tipo = "EQUILATERO"
}
else if ( lado1 === lado2 || lado1===lado3 || lado2===lado3){
    tipo = "ISOSCELES"
}

console.log('El triangulo es ' + tipo)