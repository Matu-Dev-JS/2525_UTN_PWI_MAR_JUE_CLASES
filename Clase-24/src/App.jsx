import React, { useState } from 'react'

function calcularIva (precio){
  let iva = precio * 0.21
  let precio_con_iva = precio + iva
  return [
    iva,
    precio_con_iva
  ]
}

calcularIva()

function App() {
  //useState
  //nos permite CREAR estados
  //Recibe un parametro que sera el VALOR inicial de mi estado
  //Un estado puede ser cualquier tipo de dato 
  //Devuelve un array con 2 valores
  //El primer valor es el valor de mi estado
  //El segundo valor es la funcion de actualizacion del estado (setter)
  //REGLAS: 
  //NO SE PUEDE re-asignar el valor de un ESTADO
  //Para actualizar el valor de un estado, la forma correcta y valida es usar la funcion de actualizacion (SETTER)
  //El valor que pases a la funcion de actualizacion sera el nuevo valor del estado
  //IMPORTANTE:  AL USAR LA FUNCION DE ACTUALIZACION EL COMPONENTE SE RE-RENDERIZARA
  //Buenas Practicas: 
  //A la funcion de actualizacion se la suele nombrar como set + nombre_estado (Ejemplo: setContador)

  const [contador, setContador] = useState(0)

  function incrementar(){
    setContador(contador + 1)
  }

  function decrementar(){
    setContador(contador - 1)
  }

  
  return (
    <div>
      <button 
        onClick={decrementar}
      >-</button>
      <span>{contador}</span>
      <button
        onClick={incrementar}
      >+</button>
    </div>
  )
}

export default App
