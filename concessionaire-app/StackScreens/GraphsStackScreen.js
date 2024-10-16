import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import GraphsScreen from '../Screens/Graphs/GraphsScreen'

const GraphsStack = createNativeStackNavigator()

export default function GraphsStackScreen() {
	return (
		<GraphsStack.Navigator screenOptions={screenOptions}>
			<GraphsStack.Screen
				name="Graphs"
				component={GraphsScreen}
			/>
		</GraphsStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false,
}
