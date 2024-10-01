import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const Auth = {
		isLoggedIn: isLoggedIn,
		login: () => setIsLoggedIn(true),
		logout: () => setIsLoggedIn(false)
	}

	return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
	return useContext(AuthContext)
}
