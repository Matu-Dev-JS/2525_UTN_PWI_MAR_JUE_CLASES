import React from "react"
import pedro, { sumar, multiplicar } from "./math"



function App () {
  
  console.log(sumar(1, 2))
  console.log(multiplicar(2, 2))
  console.log(pedro(5, 5))
  return (
    <div>
      <h1>Hola mundo</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis hic dignissimos delectus dicta a molestiae doloribus aut eius velit nemo? Dicta vitae, necessitatibus amet dignissimos in quis totam voluptatibus. Optio.</p>
    </div>
  )
}

export { App }