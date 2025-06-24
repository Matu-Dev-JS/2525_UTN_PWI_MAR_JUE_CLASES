import React from 'react'
import Message from '../Message/Message'

export default function Chat({messages, handleEliminarMensaje}) {
    if(messages.length === 0){
        return (
            <div>
                <span>No hay mensajes!</span>
            </div>
        )
    }
    return (
        <div>
            {
                messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            emisor={message.emisor}
                            id={message.id}
                            hora={message.hora}
                            texto={message.texto}
                            status={message.status}
                            handleEliminarMensaje={handleEliminarMensaje}
                        />
                    )
                })
            }
        </div>
    )
}
