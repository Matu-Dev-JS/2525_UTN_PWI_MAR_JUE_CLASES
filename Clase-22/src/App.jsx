import React from 'react'
import MyComponent from './Components/MyComponent'
import Navbar from './Components/Navbar'
import CardArticle from './Components/CardArticle/CardArticle'
import CardColorPalette from './Components/CardColorPalette/CardColorPalette'

function App() {

  return (
    <div>
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
