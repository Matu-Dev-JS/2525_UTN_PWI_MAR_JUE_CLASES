import React from 'react'

export default function Message({ emisor, hora, id, texto, status, handleEliminarMensaje}) {
    
    const classNames = {
        message: 'chat-dialog'
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
    }
    return (
        <div className={classNames.message}>
            <span> {texto} </span>
            <div>
                <span>{hora}</span>
                <span >✔✔</span>
                {/* Nos interesa pasar una funcion anonima cuando queremos pasarle un parametro a x funcion */}
                <button onClick={() => {handleEliminarMensaje(id)}} >Eliminar</button>
            </div>
        </div>
    )
}
