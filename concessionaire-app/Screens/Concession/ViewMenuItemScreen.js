import React, { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	Image,
	Button,
	StyleSheet,
	ScrollView,
	Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ViewMenuItemScreen = () => {
	// Sample item data
	const [itemName, setItemName] = useState('Pizza')
	const [itemImage, setItemImage] = useState(
		'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
	) // Replace with actual image URL
	const [sizes, setSizes] = useState([
		{ size: 'Small', price: '5.00' },
		{ size: 'Large', price: '10.00' },
	])
	const [variations, setVariations] = useState([
		{ name: 'Cheese' },
		{ name: 'Pepperoni' },
	])
	const [addOns, setAddOns] = useState([
		{ name: 'Extra Cheese', price: '1.00' },
		{ name: 'Garlic Dip', price: '0.50' },
	])

	const handleSaveChanges = () => {
		Alert.alert('Saved', 'Menu item changes have been saved successfully.')
	}

	const handleEditImage = () => {
		Alert.alert('Edit Image', 'This feature is not implemented yet.')
	}

	return (
		<SafeAreaView style={styles.screenContainer}>
			<ScrollView>
				<Text style={styles.title}>Edit Menu Item</Text>

				{/* Image Section */}
				<Image
					source={{ uri: itemImage }}
					style={styles.itemImage}
				/>
				<Button
					title="Edit Image"
					onPress={handleEditImage}
					color="rgb(174,12,46)"
				/>

				{/* Name Section */}
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Name:</Text>
					<TextInput
						style={styles.input}
						value={itemName}
						onChangeText={setItemName}
					/>
				</View>

				{/* Sizes Section */}
				<View style={styles.section}>
					<Text style={styles.subTitle}>Sizes & Prices:</Text>
					{sizes.map((size, index) => (
						<View
							key={index}
							style={styles.sizeContainer}>
							<TextInput
								style={styles.input}
								value={size.size}
								onChangeText={(text) => {
									const newSizes = [...sizes]
									newSizes[index].size = text
									setSizes(newSizes)
								}}
								placeholder="Size"
							/>
							<TextInput
								style={styles.input}
								value={size.price}
								onChangeText={(text) => {
									const newSizes = [...sizes]
									newSizes[index].price = text
									setSizes(newSizes)
								}}
								placeholder="Price"
								keyboardType="numeric"
							/>
						</View>
					))}
				</View>

				{/* Variations Section */}
				<View style={styles.section}>
					<Text style={styles.subTitle}>Variations:</Text>
					{variations.map((variation, index) => (
						<TextInput
							key={index}
							style={styles.input}
							value={variation.name}
							onChangeText={(text) => {
								const newVariations = [...variations]
								newVariations[index].name = text
								setVariations(newVariations)
							}}
							placeholder="Variation"
						/>
					))}
				</View>

				{/* Add-ons Section */}
				<View style={styles.section}>
					<Text style={styles.subTitle}>Add-ons:</Text>
					{addOns.map((addOn, index) => (
						<View
							key={index}
							style={styles.sizeContainer}>
							<TextInput
								style={styles.input}
								value={addOn.name}
								onChangeText={(text) => {
									const newAddOns = [...addOns]
									newAddOns[index].name = text
									setAddOns(newAddOns)
								}}
								placeholder="Add-on"
							/>
							<TextInput
								style={styles.input}
								value={addOn.price}
								onChangeText={(text) => {
									const newAddOns = [...addOns]
									newAddOns[index].price = text
									setAddOns(newAddOns)
								}}
								placeholder="Price"
								keyboardType="numeric"
							/>
						</View>
					))}
				</View>

				{/* Save Button */}
				<Button
					title="Save Changes"
					onPress={handleSaveChanges}
					color="rgb(174,12,46)"
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		padding: 20,
		backgroundColor: '#2c2c2c',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
		textAlign: 'center',
	},
	itemImage: {
		width: '100%',
		height: 200,
		borderRadius: 10,
		marginBottom: 10,
	},
	inputContainer: {
		marginBottom: 15,
	},
	label: {
		fontSize: 16,
		color: '#fff',
		marginBottom: 5,
	},
	input: {
		height: 40,
		borderColor: '#fff',
		borderWidth: 1,
		paddingHorizontal: 10,
		borderRadius: 5,
		color: '#fff',
		marginBottom: 10,
	},
	section: {
		marginVertical: 20,
	},
	subTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 10,
	},
	sizeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
})

export default ViewMenuItemScreen
