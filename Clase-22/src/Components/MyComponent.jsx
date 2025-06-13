import React from 'react'
//Declaracion de un componente
function MyComponent( propiedades ) {
    console.log(propiedades)
    return (
        <article>
            <h1>Holaaaa desde un componente</h1>
            <button>Click</button>
        </article>
    )
}

export default MyComponent