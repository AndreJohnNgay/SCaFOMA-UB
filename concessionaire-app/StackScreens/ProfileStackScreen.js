import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../Screens/Profile/ProfileScreen'

const ProfileStack = createNativeStackNavigator()

export default function ProfileStackScreen() {
	return (
		<ProfileStack.Navigator screenOptions={screenOptions}>
			<ProfileStack.Screen
				name="Profile"
				component={ProfileScreen}
			/>
		</ProfileStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false,
}
