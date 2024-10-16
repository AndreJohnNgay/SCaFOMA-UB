import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native' // Import useNavigation

const CartScreen = () => {
	const navigation = useNavigation() // Get the navigation prop
	const [cartItems, setCartItems] = useState([
		{
			id: '1',
			name: 'Pizza',
			size: 'Medium',
			variation: 'Extra Cheese',
			addons: ['Olives', 'Jalapenos'],
			quantity: 1,
			totalPrice: 300,
		},
		{
			id: '2',
			name: 'Burger',
			size: 'Large',
			variation: 'Spicy',
			addons: ['Bacon'],
			quantity: 2,
			totalPrice: 500,
		},
	])

	const handleproceedToPayment = () => {
		const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0) // Calculate total price
		navigation.navigate('Payment', { totalPrice }) // Pass total price to PaymentScreen
	}

	return (
		<View style={styles.container}>
			{cartItems.length === 0 ? (
				<Text style={styles.emptyMessage}>Your cart is empty.</Text>
			) : (
				<FlatList
					data={cartItems}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<TouchableOpacity style={styles.cartItem}>
							<Text style={styles.cartItemName}>{item.name}</Text>
							<Text style={styles.detailText}>Size: {item.size}</Text>
							<Text style={styles.detailText}>Variation: {item.variation}</Text>
							<Text style={styles.detailText}>
								Add-ons: {item.addons.join(', ')}
							</Text>
							<Text style={styles.detailText}>Quantity: {item.quantity}</Text>
							<Text style={styles.totalPriceText}>
								Total Price: ₱{item.totalPrice}
							</Text>
						</TouchableOpacity>
					)}
				/>
			)}
			<TouchableOpacity
				style={styles.proceedToPaymentButton}
				onPress={handleproceedToPayment}
				disabled={cartItems.length === 0}>
				<Text style={styles.proceedToPaymentButtonText}>
					Proceed to Payment
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c2c2c',
		padding: 10,
	},
	title: {
		fontSize: 24,
		color: '#fff',
		fontWeight: 'bold',
		marginBottom: 20,
	},
	emptyMessage: {
		color: '#aaa',
		textAlign: 'center',
	},
	cartItem: {
		backgroundColor: '#444',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
	cartItemName: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
	},
	detailText: {
		color: '#ccc',
	},
	totalPriceText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'rgb(174,12,46)',
	},
	proceedToPaymentButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 15,
		borderRadius: 8,
		marginTop: 20,
		alignItems: 'center',
	},
	proceedToPaymentButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
})

export default CartScreen
