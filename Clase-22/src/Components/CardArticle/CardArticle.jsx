import React from "react";
import './CardArticle.css'
/* 
Contrato:
    propiedades deberia se un objeto con {
        title,
        icon,
        content
    }
*/
function CardArticle ( propiedades ) {
    let cardClassName = 'card-article'
    if(propiedades.dark){
        cardClassName = cardClassName + ' card-article--dark'
    }

    return (
        <article className={cardClassName}>
            <div>
                {propiedades.icon}
            </div>
            <h3 >{propiedades.title}</h3>
            <p>
                {propiedades.content}
            </p>
        </article>
    )
}

export default CardArticle