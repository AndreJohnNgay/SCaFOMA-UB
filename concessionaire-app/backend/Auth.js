import { useState } from 'react'

export const Auth = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	return {
		isLoggedIn: isLoggedIn,
		login: () => setIsLoggedIn(true),
		logout: () => setIsLoggedIn(false)
	}
}
