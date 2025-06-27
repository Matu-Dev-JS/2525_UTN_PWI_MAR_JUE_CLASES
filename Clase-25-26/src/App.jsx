import React, { useState } from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import {Routes, Route} from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
function App() {
	/* 
	react-router-dom o tambien conocida como react-router 
	Nos permite manejar enrutamiento en react con distintas estrategias
	*/

	//PWA = Progressive Web Apps, si quieren hacer aplicaciones desktop basadas en tecnologia web tienen 2 opciones conocidas
	//React con PWA, Electron.js
	return (
		<div>
			
			<Routes>
				{/* Quiero crear una ruta para home que apunte a la direccion '/home' */}
				<Route
					path='/home'/* Direccion de la ruta */
					element={<HomeScreen/>} /* Componente que se mostrara en esa ruta */
				/>
				<Route 
					path='/contacts'
					element={<ContactScreen/>}
				/>
				<Route
					path='/contact-detail'
					element={<ContactDetailScreen/>}
				/>
			</Routes>
		</div>
	)
}

export default App
