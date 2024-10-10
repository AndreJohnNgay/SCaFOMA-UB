import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScanQRScreen from '../Screens/ScanQR/ScanQRScreen'

const ScanQRStack = createNativeStackNavigator()

export default function ProfileStackScreen() {
	return (
		<ScanQRStack.Navigator screenOptions={{ headerShown: false }}>
			<ScanQRStack.Screen
				name="ScanQR"
				component={ScanQRScreen}
			/>
		</ScanQRStack.Navigator>
	)
}
