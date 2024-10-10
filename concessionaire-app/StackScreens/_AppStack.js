import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStackScreen from './AuthStackScreen'
import BottomTabStackNavigation from './_BottomTabStackNavigation'
import { useAuthBackend } from '../Contexts/BackendContext'

const Stack = createNativeStackNavigator()

export default function AppStack() {
	const { isLoggedIn } = useAuthBackend()

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{isLoggedIn ? (
				<>
					<Stack.Screen
						name="Main"
						component={BottomTabStackNavigation}
					/>
				</>
			) : (
				<>
					<Stack.Screen
						name="AuthStack"
						component={AuthStackScreen}
					/>
				</>
			)}
		</Stack.Navigator>
	)
}
