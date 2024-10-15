import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	ScrollView
} from 'react-native'

const OrdersScreen = ({ navigation }) => {
	const [pendingOrders, setPendingOrders] = useState([
		{
			id: '1',
			customerName: 'John Doe',
			items: [
				{ id: '1a', item: 'Pizza', quantity: 1, price: 80 },
				{ id: '1b', item: 'Burger', quantity: 2, price: 50 }
			],
			status: 'pending',
			totalPrice: 180
		},
		{
			id: '2',
			customerName: 'Jane Smith',
			items: [{ id: '2a', item: 'Fries', quantity: 3, price: 30 }],
			status: 'pending',
			totalPrice: 90
		}
	])

	const [acceptedOrders, setAcceptedOrders] = useState([
		{
			id: '3',
			customerName: 'Alice Johnson',
			items: [{ id: '3a', item: 'Pasta', quantity: 1, price: 100 }],
			status: 'accepted',
			totalPrice: 100
		}
	])

	const viewOrder = (order) => {
		navigation.navigate('ViewOrder', {
			order,
			setPendingOrders,
			setAcceptedOrders
		})
	}

	return (
		<View style={styles.screenContainer}>
			<Text style={styles.subtitle}>Pending Orders</Text>
			<FlatList
				data={pendingOrders}
				renderItem={({ item }) => (
					<View style={styles.orderItem}>
						<Text style={styles.orderText}>{item.customerName}</Text>
						<TouchableOpacity
							style={styles.viewButton}
							onPress={() => viewOrder(item)}>
							<Text style={styles.buttonText}>View</Text>
						</TouchableOpacity>
					</View>
				)}
				keyExtractor={(item) => item.id}
				style={styles.orderList}
				showsVerticalScrollIndicator={false}
			/>

			<Text style={styles.subtitle}>Accepted Orders</Text>
			<FlatList
				data={acceptedOrders}
				renderItem={({ item }) => (
					<View style={styles.orderItem}>
						<Text style={styles.orderText}>{item.customerName}</Text>
						<TouchableOpacity
							style={styles.viewButton}
							onPress={() => viewOrder(item)}>
							<Text style={styles.buttonText}>View</Text>
						</TouchableOpacity>
					</View>
				)}
				keyExtractor={(item) => item.id}
				style={styles.orderList}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: '#2c2c2c',
		padding: 20
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
		marginVertical: 10
	},
	orderList: {
		marginBottom: 20
	},
	orderItem: {
		backgroundColor: '#444',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	orderText: {
		color: '#fff',
		fontSize: 16
	},
	viewButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold'
	}
})

export default OrdersScreen
