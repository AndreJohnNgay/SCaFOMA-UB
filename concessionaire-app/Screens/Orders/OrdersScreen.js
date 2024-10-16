import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useOrdersBackend } from '../../Contexts/BackendContext'

const OrdersScreen = ({ navigation }) => {
	const { loadOrders, pendingOrders, acceptedOrders } = useOrdersBackend()

	useEffect(() => {
		loadOrders()
	}, [])

	const handleViewOrder = (order) => {
		navigation.navigate('ViewOrder', {
			order,
		})
	}

	const renderOrder = ({ item }) => (
		<View style={styles.orderItem}>
			<Text style={styles.orderText}>{item.customerName}</Text>
			<TouchableOpacity
				style={styles.viewButton}
				onPress={() => handleViewOrder(item)}>
				<Text style={styles.buttonText}>View</Text>
			</TouchableOpacity>
		</View>
	)

	return (
		<SafeAreaView style={styles.screenContainer}>
			<Text style={styles.subtitle}>Pending Orders</Text>
			<FlatList
				data={pendingOrders}
				renderItem={renderOrder}
				keyExtractor={(item) => item.id}
				style={styles.orderList}
				showsVerticalScrollIndicator={false}
			/>

			<Text style={styles.subtitle}>Accepted Orders</Text>
			<FlatList
				data={acceptedOrders}
				renderItem={renderOrder}
				keyExtractor={(item) => item.id}
				style={styles.orderList}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: '#2c2c2c',
		padding: 20,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
		marginVertical: 10,
	},
	orderList: {
		marginBottom: 20,
	},
	orderItem: {
		backgroundColor: '#444',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	orderText: {
		color: '#fff',
		fontSize: 16,
	},
	viewButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
})

export default OrdersScreen
