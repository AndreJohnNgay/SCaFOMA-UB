import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ConcessionScreen from '../Screens/Concession/ConcessionScreen'
import AddItemAddOnsScreen from '../Screens/Concession/AddItemAddOnsScreen'
import AddItemScreen from '../Screens/Concession/AddItemScreen'
import AddItemSizesPricesScreen from '../Screens/Concession/AddItemSizesPricesScreen'
import AddItemVariationsScreen from '../Screens/Concession/AddItemVariationsScreen'
import ViewMenuItemScreen from '../Screens/Concession/ViewMenuItemScreen'

const ConcessionStack = createNativeStackNavigator()

export default function ConcessionStackScreen() {
	return (
		<ConcessionStack.Navigator screenOptions={screenOptions}>
			<ConcessionStack.Screen
				name="ConcessionScreen"
				component={ConcessionScreen}
			/>
			<ConcessionStack.Screen
				name="AddItemAddOnsScreen"
				component={AddItemAddOnsScreen}
			/>
			<ConcessionStack.Screen
				name="AddItemScreen"
				component={AddItemScreen}
			/>
			<ConcessionStack.Screen
				name="AddItemSizesPricesScreen"
				component={AddItemSizesPricesScreen}
			/>
			<ConcessionStack.Screen
				name="AddItemVariationsScreen"
				component={AddItemVariationsScreen}
			/>
			<ConcessionStack.Screen
				name="ViewMenuItemScreen"
				component={ViewMenuItemScreen}
			/>
		</ConcessionStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false
}
