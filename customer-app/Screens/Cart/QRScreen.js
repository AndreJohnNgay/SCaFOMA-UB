import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

const QRScreen = ({ route }) => {
	const { orderId } = route.params // Get order ID from route params (or any other data you want to encode)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Scan this QR Code</Text>

			<View style={styles.qrContainer}>
				<QRCode
					value={orderId ? orderId.toString() : 'Sample QR Code'} // QR code data, like order ID
					size={200} // Adjust size if needed
					color="black"
					backgroundColor="white"
				/>
			</View>

			<Text style={styles.instructions}>
				Show this code at the counter to confirm your order.
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c2c2c',
		padding: 20,
	},
	title: {
		fontSize: 24,
		color: '#fff',
		marginBottom: 20,
		fontWeight: 'bold',
	},
	qrContainer: {
		padding: 20,
		backgroundColor: '#fff',
		borderRadius: 10,
	},
	instructions: {
		color: '#fff',
		marginTop: 20,
		fontSize: 16,
		textAlign: 'center',
	},
})

export default QRScreen
