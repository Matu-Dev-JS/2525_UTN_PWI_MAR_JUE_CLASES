
//Esta funcion se ejecutara cuando el usuario de click sobre el boton de click me
function alertar () {
    alert("No debiste hacer eso!!")
}

//2da forma asignar directamente a la propiedad onevent la funcion
//Obtener el boton del DOM
const boton = document.getElementById('boton-click')

//Asignar la funcion alertar a el metodo onclick del elemento
//referenciamos a la funcion alertar
boton.onclick = alertar


//3era forma addEventListener
const boton_2 = document.getElementById('boton-click-2')
//El metodo addEventListener tiene la responsabilidad de asignar una funcion a un evento
//En este caso alertar es la callback de addEventListener
boton_2.addEventListener('click', alertar)


//GLOSARIO: Callback es cuando una funcion es pasada por parametro a otra funcion