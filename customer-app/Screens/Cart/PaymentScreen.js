import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Alert,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker' // Import image picker

const PaymentScreen = ({ route, navigation }) => {
	const { totalPrice } = route.params // Get total price from previous screen
	const [paymentMethod, setPaymentMethod] = useState(null)
	const [paymentScreenshot, setPaymentScreenshot] = useState(null)
	const orderId = '123456' // Sample order ID, you can generate or retrieve this dynamically

	const handlePaymentMethodChange = (method) => {
		setPaymentMethod(method)
		if (method === 'gcash') {
			// Request image picker permissions
			;(async () => {
				const permission = await ImagePicker.requestCameraRollPermissionsAsync()
				if (permission.granted) {
					console.log('Permission granted!')
				} else {
					console.log('Permission denied!')
				}
			})()
		}
	}

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		})

		if (!result.canceled) {
			setPaymentScreenshot(result.assets[0].uri) // Save the selected image URI
		}
	}

	const handlePlaceOrder = () => {
		if (!paymentMethod) {
			Alert.alert('Error', 'Please select a payment method.') // Alert if no payment method is selected
			return
		}
		if (paymentMethod === 'gcash' && !paymentScreenshot) {
			Alert.alert('Error', 'Please upload a payment screenshot.') // Alert if screenshot is missing
			return
		}
		// Proceed with the order placement logic
		Alert.alert('Success', 'Your order has been placed!') // You can replace this with actual order placement logic

		// Navigate to the QR screen after placing the order, passing the orderId
		navigation.navigate('QR', { orderId })
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Payment Screen</Text>
			<Text style={styles.totalPriceText}>Total Price: ₱{totalPrice}</Text>

			<Text style={styles.paymentMethodTitle}>Select Payment Method:</Text>
			<TouchableOpacity
				style={[
					styles.paymentMethod,
					paymentMethod === 'gcash' && styles.selectedPaymentMethod,
				]}
				onPress={() => handlePaymentMethodChange('gcash')}>
				<Text style={styles.paymentMethodText}>GCash</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[
					styles.paymentMethod,
					paymentMethod === 'counter' && styles.selectedPaymentMethod,
				]}
				onPress={() => handlePaymentMethodChange('counter')}>
				<Text style={styles.paymentMethodText}>On-the-Counter Payment</Text>
			</TouchableOpacity>

			{paymentMethod === 'gcash' && (
				<View style={styles.imagePickerContainer}>
					<TouchableOpacity
						style={styles.imagePicker}
						onPress={pickImage}>
						{paymentScreenshot ? (
							<Image
								source={{ uri: paymentScreenshot }}
								style={styles.image}
							/>
						) : (
							<Text style={styles.imagePlaceholder}>
								Upload Payment Screenshot
							</Text>
						)}
					</TouchableOpacity>
				</View>
			)}

			<TouchableOpacity
				style={styles.placeOrderButton}
				onPress={handlePlaceOrder}
				disabled={!paymentMethod} // Disable button if no payment method is selected
			>
				<Text style={styles.placeOrderButtonText}>Place Order</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c2c2c',
		padding: 20,
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		color: '#fff',
		fontWeight: 'bold',
		marginBottom: 20,
	},
	totalPriceText: {
		fontSize: 18,
		color: 'rgb(174,12,46)',
		marginBottom: 20,
	},
	paymentMethodTitle: {
		fontSize: 18,
		color: '#fff',
		marginBottom: 10,
	},
	paymentMethod: {
		backgroundColor: '#444',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
	selectedPaymentMethod: {
		backgroundColor: 'rgb(174,12,46)',
	},
	paymentMethodText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	imagePickerContainer: {
		marginTop: 20,
	},
	imagePicker: {
		height: 200,
		backgroundColor: '#444',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 8,
	},
	imagePlaceholder: {
		color: '#aaa',
		textAlign: 'center',
	},
	placeOrderButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 15,
		borderRadius: 8,
		marginTop: 20,
		alignItems: 'center',
	},
	placeOrderButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
})

export default PaymentScreen
