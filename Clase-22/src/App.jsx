import React from 'react'
import MyComponent from './Components/MyComponent'
import Navbar from './Components/Navbar'
import CardArticle from './Components/CardArticle/CardArticle'
import CardColorPalette from './Components/CardColorPalette/CardColorPalette'

function App() {
  //En JSX existe algo llamado listas, que son arrays de elementos jsx
  //Reglas: Por cuestiones de react, es decir, reglas internas de la libreria, cada elemento en una lista debe tener la prop "key"
  const lista = [
    <div key={1}>1</div>,
    <div key={2}>2</div>,
    <div key={3}>3</div>
  ]

 

  const colores = ["#FCD8CD", "#FEEBF6", "#EBD6FB","#687FE5"]
  //Transformar el array de strings en un array de jsx
  //Usando map
  const lista_colores_jsx = colores.map(
    function (color, index){

      return <div key={color + index}>{color}</div>
    }
  )
  

  return (
    <div>
      {lista_colores_jsx}
      <CardColorPalette
        likes={25} 
        time={'58 Minutes'} 
        colors={["#FCD8CD", "#FEEBF6", "#EBD6FB","#687FE5"]} 
      />
      <Navbar/>
      {/* Instancia/invocacion de un componente */}
      {/* <MyComponent nombre='pepe' color='rojo' />
      <MyComponent diaFavorito='sabado' />
      <MyComponent x='33' /> */}
      
      <CardArticle 
        title='3 simples pasos' 
        icon="💤"
        content="Solo tenés que elegir tu plan, completar el formulario de solicitud de migración y enviarlo. Eso es todo."
      />
      <CardArticle
        title='Rápido y seguro' 
        icon="🆘"
        content="El 95% de las webs migran en menos de 20 minutos. El 5% restante, más rápido que el promedio del sector ¡Y tu sitio web permanece activo todo el tiempo!"
      />
      <CardArticle
        title='Gratis' 
        icon="🤑"
        content="No importa si tenés una web o 100, migrarlas a Hostinger es gratis con todos nuestros planes."
        dark={false}
      />

       <CardArticle 
        title='3 simples pasos' 
        icon="💤"
        content="Solo tenés que elegir tu plan, completar el formulario de solicitud de migración y enviarlo. Eso es todo."
        dark={true}
      />
      <CardArticle
        title='Rápido y seguro' 
        icon="🆘"
        content="El 95% de las webs migran en menos de 20 minutos. El 5% restante, más rápido que el promedio del sector ¡Y tu sitio web permanece activo todo el tiempo!"
        dark={true}
      />
      <CardArticle
        title='Gratis' 
        icon="🤑"
        content="No importa si tenés una web o 100, migrarlas a Hostinger es gratis con todos nuestros planes."
        dark={true}
      />
    </div>
  )
}


export default App



 //map
  //Es de JS
  //Es un metodo de arrays que nos permite transformar un array en otro array 
  //Cuando invocamos a map el array resultante tendra la misma cantidad de elementos que el array original
  //Map recibira una callback, es decir una funcion por parametro
  //Map ejecutara la funcion por cada elemento del array
  //La callback recibira el elemento que este recorriendo del array
  //Map creara un nuevo array vacio, y por cada elemento que ejecute la callback, el retorno de la funcion sera el valor del elemento en el nuevo array

  //[{name: "pepe"}, {name: "maria"}] Quiero transformarlo en ['pepe', 'maria']
  /* const personas = [{name: "pepe"}, {name: "maria"}]
  const nombres_personas = personas.map(
    function(elemento){
      return elemento.name
    }
  ) */