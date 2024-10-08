import React, { useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
} from 'react-native'
import { useMenuBackend } from '../../../Contexts/BackendContext'

const AddItemScreen = ({ navigation }) => {
	const { itemName, setItemName, phImage, image, pickImage } = useMenuBackend()

	const handleNext = () => {
		navigation.navigate('AddItemSizesPrices')
	}

	const handleCancel = () => {
		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Add New Menu Item</Text>

				<TouchableOpacity
					style={styles.imageButton}
					onPress={pickImage}>
					<Text style={styles.buttonText}>
						{image == phImage ? 'Change Image' : 'Select Image'}
					</Text>
				</TouchableOpacity>

				<Image
					source={{
						uri: image,
					}}
					style={styles.imagePreview}
				/>

				<TextInput
					placeholder="Item Name"
					value={itemName}
					onChangeText={setItemName}
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
