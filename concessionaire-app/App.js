import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GlobalProvider } from './Contexts/_GlobalContext'
import AppStack from './StackScreens/_AppStack'
import { StatusBar } from 'react-native'

const App = () => {
	return (
		<GlobalProvider>
			<StatusBar
				barStyle="light-content" // For light text (dark-content for dark text)
				backgroundColor="rgb(174,12,46)" // Customize the color
			/>
			<NavigationContainer>
				<AppStack />
			</NavigationContainer>
		</GlobalProvider>
	)
}

export default App
