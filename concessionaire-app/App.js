import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import LoginScreen from './Screens/Auth/LoginScreen'
import RegisterScreen from './Screens/Auth/RegisterScreen'
import ForgotPasswordScreen from './Screens/Auth/ForgotPasswordScreen'
import OrdersScreen from './Screens/Orders/OrdersScreen'
import ScanQRScreen from './Screens/ScanQR/ScanQRScreen'
import GraphsScreen from './Screens/Graphs/GraphsScreen'
import ProfileScreen from './Screens/Profile/ProfileScreen'
import ViewOrderScreen from './Screens/Orders/ViewOrderScreen'
import ConcessionStackScreen from './StackScreens/ConcessionStackScreen'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MainTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: 'rgb(174,12,46)',
				tabBarInactiveTintColor: '#fff',
				tabBarStyle: { backgroundColor: '#2c2c2c' }
			}}>
			<Tab.Screen
				name="Orders"
				component={OrdersScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="list"
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="Concession"
				component={ConcessionStackScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="cash"
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="ScanQR"
				component={ScanQRScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="qr-code"
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="Graphs"
				component={GraphsScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="bar-chart"
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="person"
							size={24}
							color={color}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	)
}

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const checkLoginStatus = async () => {
			const loggedIn = false
			setIsLoggedIn(loggedIn)
		}

		checkLoginStatus()
	}, [])

	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{isLoggedIn ? (
						<>
							<Stack.Screen
								name="Main"
								component={MainTabNavigator}
							/>
							<Stack.Screen
								name="ViewOrder"
								component={ViewOrderScreen}
							/>
						</>
					) : (
						<>
							<Stack.Screen
								name="Login"
								component={LoginScreen}
							/>
							<Stack.Screen
								name="Register"
								component={RegisterScreen}
							/>
							<Stack.Screen
								name="ForgotPassword"
								component={ForgotPasswordScreen}
							/>
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}

export default App
