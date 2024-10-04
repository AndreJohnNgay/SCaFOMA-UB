import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from 'react-native'
import {
	KeyboardAwareFlatList,
	KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view'
import { useMenu } from '../../../Contexts/BackendContext'
import Ionicons from '@expo/vector-icons/Ionicons'

const AddItemSizesPricesScreen = ({ navigation }) => {
	const { itemName, itemSizes, setItemSizes } = useMenu()

	const handleAddSize = () => {
		setItemSizes([...itemSizes, { size: '', price: '' }])
	}

	const handleRemoveSize = (index) => {
		const newSizes = itemSizes.filter((_, i) => i !== index)
		setItemSizes(newSizes)
	}

	const handleSizeChange = (index, value) => {
		const newSizes = [...itemSizes]
		newSizes[index].size = value
		setItemSizes(newSizes)
	}

	const handlePriceChange = (index, value) => {
		const newSizes = [...itemSizes]
		newSizes[index].price = value
		setItemSizes(newSizes)
	}

	const handleNext = () => {
		const filteredSizes = itemSizes.filter((item) => item.size && item.price)
		setItemSizes(filteredSizes)

		navigation.navigate('AddItemVariations')
	}

	const renderSizeItem = ({ item, index }) => (
		<View
			key={index}
			style={styles.sizeContainer}>
			<TextInput
				placeholder={`Size ${index + 1}`}
				value={item.size}
				onChangeText={(value) => handleSizeChange(index, value)}
				style={styles.sizeInput}
			/>
			<TextInput
				placeholder="₱ Price"
				value={item.price}
				onChangeText={(value) => handlePriceChange(index, value)}
				keyboardType="numeric"
				style={styles.priceInput}
			/>
			<TouchableOpacity
				style={styles.addSizeButton}
				onPress={() => handleRemoveSize(index)}>
				<Ionicons
					name="remove-circle-outline"
					size={24}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	)

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Add Sizes and Prices for {itemName}</Text>
				<Text style={styles.sizesTitle}>Sizes and Prices:</Text>

				<KeyboardAwareFlatList
					data={itemSizes}
					renderItem={renderSizeItem}
					keyExtractor={(_, index) => index.toString()}
					removeClippedSubviews={false}
				/>

				<TouchableOpacity
					style={styles.addSizeButton}
					onPress={handleAddSize}>
					<Text style={styles.buttonText}>Add Size</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.submitButton}
					onPress={handleNext}>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.closeButton}
					onPress={() => navigation.goBack()}>
					<Text style={styles.buttonText}>Back</Text>
				</TouchableOpacity>
			</View>
		</View>
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
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
	},
	sizesTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 10,
	},
	sizeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	sizeInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 5,
	},
	priceInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		width: '30%',
		marginRight: 5,
	},
	addSizeButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginVertical: 15,
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
		color: '#fff',
		padding: 10,
	},
})

export default AddItemSizesPricesScreen
