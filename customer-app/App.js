import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import LoginScreen from './Screens/Auth/LoginScreen'
import CartScreen from './Screens/Cart/CartScreen'
import GraphsScreen from './Screens/Graphs/GraphsScreen'
import ProfileScreen from './Screens/Profile/ProfileScreen'
import MenuScreen from './Screens/Menu/MenuScreen'
import FilterMenuScreen from './Screens/Menu/FilterMenuScreen'
import ViewMenuItemScreen from './Screens/Menu/ViewMenuItemScreen'
import RegisterScreen from './Screens/Auth/RegisterScreen'
import ForgotPasswordScreen from './Screens/Auth/ForgotPasswordScreen'
import PaymentScreen from './Screens/Cart/PaymentScreen'
import QRScreen from './Screens/Cart/QRScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'Menu') {
						iconName = focused ? 'fast-food' : 'fast-food-outline'
					} else if (route.name === 'Cart') {
						iconName = focused ? 'cart' : 'cart-outline'
					} else if (route.name === 'Graphs') {
						iconName = focused ? 'stats-chart' : 'stats-chart-outline'
					} else if (route.name === 'Profile') {
						iconName = focused ? 'person' : 'person-outline'
					}

					return (
						<Ionicons
							name={iconName}
							size={size}
							color={color}
						/>
					)
				},
				tabBarActiveTintColor: 'rgb(174,12,46)',
				tabBarInactiveTintColor: 'gray',
			})}>
			<Tab.Screen
				name="Menu"
				component={MenuScreen}
			/>
			<Tab.Screen
				name="Cart"
				component={CartScreen}
			/>
			<Tab.Screen
				name="Graphs"
				component={GraphsScreen}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPasswordScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Main"
					component={MainTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="FilterMenu"
					component={FilterMenuScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ViewMenuItem"
					component={ViewMenuItemScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Payment"
					component={PaymentScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="QRScreen"
					component={QRScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	)
}
