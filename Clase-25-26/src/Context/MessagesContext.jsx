import { createContext, useState } from "react";

//Creamos un contexto con la funcion createContext()
export const MessagesContext = createContext(
    {
        messages: [],
        addNewMessage: (text) => {},
        handleEliminarMensaje: (id_mensaje) => {}
    }
)

//children prop: es el contenido que anida mi componente MessagesContextProvider
const MessagesContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        {
            emisor: 'YO',
            hora: '23:10',
            id: 1,
            texto: 'Hola que tal?',
            status: 'visto'
        },
        {
            emisor: 'USUARIO',
            hora: '23:11',
            id: 2,
            texto: 'Si, hoy aprendi estados',
            status: 'visto'
        },
        {
            emisor: 'YO',
            hora: '23:12',
            id: 3,
            texto: 'Eso que significa 🤓?',
            status: 'no-visto'
        },
        {
            emisor: 'YO',
            hora: '23:13',
            id: 4,
            texto: 'Estas ahi?',
            status: 'no-recibido'
        },
    ])


    const handleEliminarMensaje = (id_mensaje) => {
        const listaMensajeActualizada = []
        for (const mensaje of messages) {
            if (mensaje.id !== id_mensaje) {
                listaMensajeActualizada.push(mensaje)
            }
        }
        setMessages(listaMensajeActualizada)
    }
    const addNewMessage = (text) => {
        //Esta funcion actualiza el estado de mensajes para agregar un nuevo mensaje
        const new_message = { emisor: 'YO', hora: '23:13', texto: text, status: 'no-recibido', id: messages.length + 1 }
        const clon_messages = [...messages]
        clon_messages.push(new_message)
        setMessages(clon_messages)
    }

    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    addNewMessage: addNewMessage,
                    handleEliminarMensaje: handleEliminarMensaje
                }
            }
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider