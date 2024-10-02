import React, { createContext, useContext } from 'react'
import { Auth } from '../backend/Auth'
import { Menu } from '../backend/Menu'

const BackendContext = createContext()

export const BackendProvider = ({ children }) => {
	const Backend = {
		Auth: Auth(),
		Menu: Menu()
	}

	return (
		<BackendContext.Provider value={Backend}>
			{children}
		</BackendContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(BackendContext).Auth
}

export const useMenu = () => {
	return useContext(BackendContext).Menu
}
