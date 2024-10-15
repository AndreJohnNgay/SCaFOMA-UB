import React, { createContext, useContext } from 'react'
import { Auth } from '../backend/Auth'
import { Menu } from '../backend/Menu'

/*
	create function modules in backend and import the object they return here
*/

const BackendContext = createContext()

export const BackendProvider = ({ children }) => {
	// add the imported module here
	const Backend = {
		Auth: Auth(),
		Menu: Menu(),
	}

	return (
		<BackendContext.Provider value={Backend}>
			{children}
		</BackendContext.Provider>
	)
}

// functions they use for better readability when using
export const useAuthBackend = () => {
	return useContext(BackendContext).Auth
}

export const useMenuBackend = () => {
	return useContext(BackendContext).Menu
}
