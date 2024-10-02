import React, { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	KeyboardAvoidingView
} from 'react-native'

const AddItemVariationsScreen = ({ navigation, route }) => {
	const { updatedItem, onAddItem } = route.params

	const [variations, setVariations] = useState([
		{ variation: '', sizes: updatedItem.sizes.map((size) => ({ ...size })) }
	])

	const handleAddVariation = () => {
		setVariations([
			...variations,
			{ variation: '', sizes: updatedItem.sizes.map((size) => ({ ...size })) }
		])
	}

	const handleVariationChange = (index, value) => {
		const newVariations = [...variations]
		newVariations[index].variation = value
		setVariations(newVariations)
	}

	const handleSizeChange = (variationIndex, sizeIndex, value) => {
		const newVariations = [...variations]
		newVariations[variationIndex].sizes[sizeIndex].size = value
		setVariations(newVariations)
	}

	const handlePriceChange = (variationIndex, sizeIndex, value) => {
		const newVariations = [...variations]
		newVariations[variationIndex].sizes[sizeIndex].price = value
		setVariations(newVariations)
	}

	const handleNext = () => {
		const filteredVariations = variations.filter((item) => item.variation)
		const updatedItemWithVariations = {
			...updatedItem,
			variations: filteredVariations
		}

		navigation.navigate('AddItemAddOns', {
			updatedItem: updatedItemWithVariations,
			onAddItem
		})
	}

	const renderSizePriceItem = ({ item, index }, variationIndex) => (
		<View
			key={index}
			style={styles.sizePriceContainer}>
			<TextInput
				placeholder={`Size ${index + 1}`}
				value={item.size}
				onChangeText={(value) => handleSizeChange(variationIndex, index, value)}
				style={styles.sizeInput}
			/>
			<TextInput
				placeholder="₱ Price"
				value={item.price}
				onChangeText={(value) =>
					handlePriceChange(variationIndex, index, value)
				}
				keyboardType="numeric"
				style={styles.priceInput}
			/>
		</View>
	)

	const renderVariationItem = ({ item, index }) => (
		<View
			key={index}
			style={styles.variationContainer}>
			<TextInput
				placeholder={`Variation ${index + 1}`}
				value={item.variation}
				onChangeText={(value) => handleVariationChange(index, value)}
				style={styles.variationInput}
			/>

			<FlatList
				data={item.sizes}
				renderItem={(sizeItem) => renderSizePriceItem(sizeItem, index)}
				keyExtractor={(item, index) => index.toString()}
				style={styles.sizePriceList}
			/>
		</View>
	)

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding">
			<View style={styles.content}>
				<Text style={styles.title}>Add Variations for {updatedItem.name}</Text>

				<FlatList
					data={variations}
					renderItem={renderVariationItem}
					keyExtractor={(item, index) => index.toString()}
					style={styles.variationList}
				/>

				<TouchableOpacity
					style={styles.addVariationButton}
					onPress={handleAddVariation}>
					<Text style={styles.buttonText}>Add Variation</Text>
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
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c2c2c'
	},
	content: {
		flex: 1,
		padding: 20
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20
	},
	variationContainer: {
		marginBottom: 20
	},
	variationInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		marginBottom: 10
	},
	sizePriceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		backgroundColor: '#333',
		padding: 10,
		borderRadius: 5,
		marginBottom: 5
	},
	sizeInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 5
	},
	priceInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		width: '30%'
	},
	addVariationButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 15
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		backgroundColor: '#2c2c2c'
	},
	submitButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 10,
		alignItems: 'center'
	},
	closeButton: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center'
	}
})

export default AddItemVariationsScreen
