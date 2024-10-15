import React, { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	KeyboardAvoidingView,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useMenuBackend } from '../../../Contexts/BackendContext'

const AddItemAddOnsScreen = ({ navigation }) => {
	const {
		itemName,
		addOns,
		setAddOns,
		handleAddAddOn,
		handleRemoveAddOn,
		handleAddOnNameChange,
		handleAddOnPriceChange,
		handleMenuAddItem,
	} = useMenuBackend()

	const handleSubmit = () => {
		const filteredAddOns = addOns.filter((addOn) => addOn.name && addOn.price)
		// const updatedItemWithAddOns = {
		// 	...updatedItem,
		// 	addOns: filteredAddOns,
		// }
		setAddOns(filteredAddOns)

		handleMenuAddItem()

		// onAddItem(updatedItemWithAddOns)
		navigation.navigate('Concession')
	}

	const renderAddOnItem = ({ item, index }) => (
		<View
			key={index}
			style={styles.addOnContainer}>
			<TextInput
				placeholder={`Add-On ${index + 1}`}
				value={item.name}
				onChangeText={(value) => handleAddOnNameChange(index, value)}
				style={styles.addOnInput}
			/>
			<TextInput
				placeholder="₱ Price"
				value={item.price}
				onChangeText={(value) => handleAddOnPriceChange(index, value)}
				keyboardType="numeric"
				style={styles.addOnPriceInput}
			/>
			<TouchableOpacity
				style={styles.removeButton}
				onPress={() => handleRemoveAddOn(index)}>
				<Ionicons
					name="remove-circle-outline"
					size={24}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	)

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding">
			<View style={styles.content}>
				<Text style={styles.title}>Add Add-Ons for {itemName}</Text>

				<FlatList
					data={addOns}
					renderItem={renderAddOnItem}
					keyExtractor={(item, index) => index.toString()}
					style={styles.addOnList}
				/>

				<TouchableOpacity
					style={styles.addAddOnButton}
					onPress={handleAddAddOn}>
					<Text style={styles.buttonText}>Add Add-On</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.submitButton}
					onPress={handleSubmit}>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.closeButton}
					onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>Back</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c2c2c',
	},
	content: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
	},
	addOnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		backgroundColor: '#333',
		padding: 10,
		borderRadius: 5,
		marginBottom: 5,
	},
	addOnInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 5,
	},
	addOnPriceInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		width: '30%',
	},
	addAddOnButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 15,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		backgroundColor: '#2c2c2c',
	},
	submitButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 10,
		alignItems: 'center',
	},
	closeButton: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	removeButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginLeft: 10,
	},
})

export default AddItemAddOnsScreen
