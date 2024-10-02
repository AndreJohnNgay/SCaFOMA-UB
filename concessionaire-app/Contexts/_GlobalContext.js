// GlobalProvider.js
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BackendProvider } from './BackendContext'
import { PaperProvider } from 'react-native-paper'

export const GlobalProvider = ({ children }) => {
	return (
		<PaperProvider>
			<SafeAreaProvider>
				<BackendProvider>{children}</BackendProvider>
			</SafeAreaProvider>
		</PaperProvider>
	)
}
