import React, { useState } from 'react'



function App() {
  //useState
  //nos permite CREAR estados
  //Recibe un parametro que sera el VALOR inicial de mi estado
  //Un estado puede ser cualquier tipo de dato 
  //Devuelve un array con 2 valores
  //El primer valor es el valor de mi estado
  //El segundo valor es la funcion de actualizacion del estado (setter)
  //REGLAS: 
  //NO SE PUEDE re-asignar/mutar/cambiar el valor de un ESTADO
  //Para actualizar el valor de un estado, la forma correcta y valida es usar la funcion de actualizacion (SETTER)
  //El valor que pases a la funcion de actualizacion sera el nuevo valor del estado
  //IMPORTANTE:  AL USAR LA FUNCION DE ACTUALIZACION EL COMPONENTE SE RE-RENDERIZARA
  //Buenas Practicas: 
  //A la funcion de actualizacion se la suele nombrar como set + nombre_estado (Ejemplo: setContador)

  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }

  /* 
  Crear un estado con esta valor inicial: 
  [
    'tarea 1',
    'tarea 2',
    'tarea 3'
  ]

  Mostrar la lista en la pagina, cada tarea tendra que ser un:
  <div>
    <p>{tarea}</p>
    <button>Eliminar</button>
    <hr/>
  </div>

  */

  const [tareas, setTareas] = useState([
    {
      id: 1,
      topic: 'hogar',
      text: 'tarea 1'
    },
    {
      id: 2,
      topic: 'trabajo',
      text: 'tarea 2'
    },
    {
      id: 3,
      topic: 'trabajo',
      text: 'tarea 3'
    },
  ])

  const eliminarTarea = (id) => {
    /* 
    1. Creo una lista vacia
    2. Recorro la lista para checkear cual tarea no es la quiero eliminar y en caso de no ser la agrego a lista creada
    3. Actualizo mi estado
    */
    const lista_tareas = []
    for(const tarea of tareas){
      if(tarea.id !== id){
        lista_tareas.push(tarea)
      }
    }
    setTareas(lista_tareas)
  }


  const agregarTarea = (event) => {
    //Evitamos que el formulario se recargue
    event.preventDefault()
    console.log("se envio una nueva tarea")
    //Necesito acceder al formulario que emitio el evento, ya que el es quien tiene los valores del formulario
    //evento.target es el elemento del DOM de donde se emitio el evento
    
    //evento.target es el FORMULARIO de donde se envio el evento

    //Puedo acceder a campos de mi formulario mediante el 'name' los mismos
    //ejemplo
    let text = event.target.text.value
    let topic = event.target.topic.value
    const new_task = {
      id: tareas.length + 1,
      text: text,
      topic: topic
    }
    //Clono el estado de tareas (Porque los estados son INMUTABLES)
    const lista_tareas_a_modificar = [...tareas]

    //Agrego la nueva tarea al clon, para evitar modificar el estado.
    lista_tareas_a_modificar.push(new_task)

    //Seteo al clon como el nuevo valor de estado
    setTareas(lista_tareas_a_modificar)
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

      {
        tareas.map((tarea) => {
          
          return (
            <div key={tarea.id}>
              <p>{tarea.text}</p>
              <span>{tarea.topic}</span>
              <button onClick={() => { eliminarTarea(tarea.id) }}>Eliminar</button>
              <hr />
            </div>
          )
        })}
        <form onSubmit={agregarTarea}>
          <div> 
            <label htmlFor="text">Contenido:</label>
            <input 
              placeholder='Escribe la tarea..' 
              id='text' 
              name='text'
              required 
            />
          </div>
          <div>
            <label htmlFor="topic">Tema:</label>
            <input 
              placeholder='Escribe el tema de la tarea' 
              id='topic' 
              name='topic'
              required 
            />
          </div>
          <button type='submit'>Agregar tarea</button>
        </form>
        <hr/>
        <form onSubmit={agregarTarea}>
          <div> 
            <label htmlFor="text">Contenido:</label>
            <input 
              placeholder='Escribe la tarea..' 
              id='text' 
              name='text'
              required 
            />
          </div>
          <div>
            <label htmlFor="topic">Tema:</label>
            <input 
              placeholder='Escribe el tema de la tarea' 
              id='topic' 
              name='topic'
              required 
            />
          </div>
          <button type='submit'>Agregar tarea</button>
        </form>
        <hr/>
        <form onSubmit={agregarTarea}>
          <div> 
            <label htmlFor="text">Contenido:</label>
            <input 
              placeholder='Escribe la tarea..' 
              id='text' 
              name='text'
              required 
            />
          </div>
          <div>
            <label htmlFor="topic">Tema:</label>
            <input 
              placeholder='Escribe el tema de la tarea' 
              id='topic' 
              name='topic'
              required 
            />
          </div>
          <button type='submit'>Agregar tarea</button>
        </form>
        <hr/>
    </div>
  )
}

export default App

