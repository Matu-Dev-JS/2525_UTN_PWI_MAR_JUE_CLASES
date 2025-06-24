import React, { useState } from 'react'
import Chat from './Component/Chat/Chat'
import NewMessageForm from './Component/NewMessageForm/NewMessageForm'


function App() {
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
		const new_message = {emisor: 'YO', hora: '23:13', texto: text, status: 'no-recibido', id: messages.length + 1}
		const clon_messages = [...messages]
		clon_messages.push(new_message)
		setMessages(clon_messages)
	}

	return (
		<div>
			<Chat 
				messages={messages} 
				handleEliminarMensaje={handleEliminarMensaje}
			/>
			{/* Messages es una prop del componente Chat */}
			{/* handleEliminarMensaje tiene el problema del prop drilling (Para solucionar este problema deberiamos usar Context) */}
			<NewMessageForm addNewMessage={addNewMessage}/>
		</div>
	)
}

export default App
