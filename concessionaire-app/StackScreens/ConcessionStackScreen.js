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
				name="Concession"
				component={ConcessionScreen}
			/>
			<ConcessionStack.Screen
				name="AddItemAddOns"
				component={AddItemAddOnsScreen}
			/>
			<ConcessionStack.Screen
				name="AddItem"
				component={AddItemScreen}
			/>
			<ConcessionStack.Screen
				name="AddItemSizesPrices"
				component={AddItemSizesPricesScreen}
			/>
			<ConcessionStack.Screen
				name="AddItemVariations"
				component={AddItemVariationsScreen}
			/>
			<ConcessionStack.Screen
				name="ViewMenuItem"
				component={ViewMenuItemScreen}
			/>
		</ConcessionStack.Navigator>
	)
}

const screenOptions = {
	headerShown: false,
}
