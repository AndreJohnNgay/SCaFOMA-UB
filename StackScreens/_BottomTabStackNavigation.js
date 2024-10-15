import React from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ConcessionStackScreen from './ConcessionStackScreen'
import OrdersScreen from '../Screens/Orders/OrdersScreen'
import ScanQRScreen from '../Screens/ScanQR/ScanQRScreen'
import GraphsScreen from '../Screens/Graphs/GraphsScreen'
import ProfileScreen from '../Screens/Profile/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function BottomTabStackNavigation() {
	return (
		<Tab.Navigator screenOptions={styles.navigatorOptions}>
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
				name="ConcessionStack"
				component={ConcessionStackScreen}
				options={{
					tabBarLabel: 'Concession',
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

const styles = StyleSheet.create({
	navigatorOptions: {
		tabBarActiveTintColor: 'rgb(174,12,46)',
		tabBarInactiveTintColor: '#fff',
		tabBarStyle: { backgroundColor: '#2c2c2c' },
		headerShown: false
	}
})
