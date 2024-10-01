import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/Auth/LoginScreen'

const ConcessionaireStack = createNativeStackNavigator()

export default function ConcessionaireStackScreen() {
	return (
		<ConcessionaireStack.Navigator screenOptions={{ headerShown: false }}>
			<ConcessionaireStack.Screen
				name="ConcessionaireScreen"
				component={LoginScreen}
			/>
		</ConcessionaireStack.Navigator>
	)
}
