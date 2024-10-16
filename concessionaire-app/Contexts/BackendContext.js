import React, { createContext, useContext } from 'react'
import { Auth } from '../backend/Auth'
import { Menu } from '../backend/Menu'
import { Profile } from '../backend/Profile'
import Orders from '../backend/Orders'

/*
	create function modules in backend and import the object they return here
*/

const BackendContext = createContext()

export const BackendProvider = ({ children }) => {
	// add the imported module here
	const Backend = {
		Auth: Auth(),
		Menu: Menu(),
		Profile: Profile(),
		Orders: Orders(),
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

export const useProfileBackend = () => {
	return useContext(BackendContext).Profile
}
export const useOrdersBackend = () => {
	return useContext(BackendContext).Orders
}
