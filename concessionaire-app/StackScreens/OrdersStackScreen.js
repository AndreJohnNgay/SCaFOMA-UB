import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import OrdersScreen from '../Screens/Orders/OrdersScreen'
import ViewOrderScreen from '../Screens/Orders/ViewOrderScreen'

const OrdersStack = createNativeStackNavigator()

export default function OrdersStackScreen() {
	return (
		<OrdersStack.Navigator screenOptions={screenOptions}>
			<OrdersStack.Screen
				name="Orders"
				component={OrdersScreen}
			/>
			<OrdersStack.Screen
				name="ViewOrder"
				component={ViewOrderScreen}
			/>
		</OrdersStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false,
}
