import React, { useEffect, useState } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	KeyboardAvoidingView,
} from 'react-native'
import { useMenuBackend } from '../../../Contexts/BackendContext'

const AddItemVariationsScreen = ({ navigation }) => {
	const {
		itemName,
		variations,
		addNewVariation,
		removeVariation,
		addSizeToVariation,
		removeVariationSize,
		handleVariationChange,
		handleSizeChange,
		handlePriceChange,
		initEmptyVariations,
	} = useMenuBackend()

	initEmptyVariations()

	const handleNext = () => {
		navigation.navigate('AddItemAddOns')
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
			<TouchableOpacity
				onPress={() => removeVariationSize(variationIndex, index)}>
				<Text style={styles.removeVarSizeButton}>R</Text>
			</TouchableOpacity>
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

			<TouchableOpacity onPress={() => addSizeToVariation(index)}>
				<Text style={styles.addSizeButton}>Add Size</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => removeVariation(index)}>
				<Text style={styles.removeButton}>Remove Variation</Text>
			</TouchableOpacity>
		</View>
	)

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Add Variations for {itemName}</Text>

				<FlatList
					data={variations}
					renderItem={renderVariationItem}
					keyExtractor={(item, index) => index.toString()}
				/>

				<TouchableOpacity
					style={styles.addNewVariationButton}
					onPress={addNewVariation}>
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
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
	},
	variationContainer: {
		marginBottom: 20,
	},
	variationInput: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
	sizePriceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 5,
		backgroundColor: '#333',
		padding: 10,
		borderRadius: 5,
		marginBottom: 5,
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
	},
	addNewVariationButton: {
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
	addSizeButton: {
		color: 'green',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
	},
	removeVarSizeButton: {
		color: 'red',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
	},
	removeButton: {
		color: 'red',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
	},
})

export default AddItemVariationsScreen
