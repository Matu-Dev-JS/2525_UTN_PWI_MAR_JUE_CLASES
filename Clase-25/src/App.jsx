import React, { useState } from 'react'
import Chat from './Component/Chat/Chat'
import NewMessageForm from './Component/NewMessageForm/NewMessageForm'
import Swal from 'sweetalert2'
import { FaBeer } from "react-icons/fa";
import { IoIosBody, IoIosBackspace } from "react-icons/io";

function App() {

	const handleClickAlertButton = () => {
		Swal.fire({
			title: 'Error!',
			text: 'Do you want to continue',
			icon: 'error',
			confirmButtonText: 'Cool'
		})
	}
	return (
		<div>
			<h3>
				Lets go for a <IoIosBody />?
			</h3>
			<button onClick={handleClickAlertButton}>alerta bonita</button>
			<Chat />
			<NewMessageForm />
		</div>
	)
}

export default App
