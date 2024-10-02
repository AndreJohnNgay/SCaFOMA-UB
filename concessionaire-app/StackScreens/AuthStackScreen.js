import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/Auth/LoginScreen'
import ForgotPasswordScreen from '../Screens/Auth/ForgotPasswordScreen'

const AuthStack = createNativeStackNavigator()

export default function AuthStackScreen() {
	return (
		<AuthStack.Navigator screenOptions={{ headerShown: false }}>
			<AuthStack.Screen
				name="Login"
				component={LoginScreen}
			/>
			<AuthStack.Screen
				name="ForgotPassword"
				component={ForgotPasswordScreen}
			/>
		</AuthStack.Navigator>
	)
}
