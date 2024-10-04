import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
} from 'react-native'
import { useMenu } from '../../Contexts/BackendContext'

const AddItemScreen = ({ navigation }) => {
	const Menu = useMenu()

	const handleNext = () => {
		if (!Menu.image) {
			setImage(Menu.phImage)
		}
		const newItem = {
			name: itemName,
			image: image,
		}

		navigation.navigate('AddItemSizesPrices', {
			newItem,
		})
	}

	const handleCancel = () => {
		navigation.goBack()
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding">
			<View style={styles.content}>
				<Text style={styles.title}>Add New Menu Item</Text>

				<TouchableOpacity
					style={styles.imageButton}
					onPress={Menu.pickImage}>
					<Text style={styles.buttonText}>
						{Menu.image ? 'Change Image' : 'Select Image'}
					</Text>
				</TouchableOpacity>

				<Image
					source={{
						uri: Menu.image || Menu.phImage,
					}}
					style={styles.imagePreview}
				/>

				<TextInput
					placeholder="Item Name"
					value={Menu.itemName}
					onChangeText={Menu.setItemName}
					style={styles.input}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.nextButton}
					onPress={handleNext}>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.closeButton}
					onPress={handleCancel}>
					<Text style={styles.buttonText}>Cancel</Text>
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
	input: {
		backgroundColor: '#444',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		marginBottom: 15,
	},
	imageButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		marginBottom: 15,
		alignItems: 'center',
	},
	imagePreview: {
		width: 100,
		height: 100,
		borderRadius: 5,
		marginBottom: 15,
		backgroundColor: '#555',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		backgroundColor: '#2c2c2c',
	},
	nextButton: {
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
})

export default AddItemScreen
