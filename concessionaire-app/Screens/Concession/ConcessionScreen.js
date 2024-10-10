import React, { useState, useCallback } from 'react'
import {
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Alert,
} from 'react-native'
import { Text } from 'react-native-paper'
import { useMenuBackend } from '../../Contexts/BackendContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const ConcessionScreen = ({ navigation }) => {
	const { resetMenuConfig, menuItems, setMenuItems } = useMenuBackend()

	const handleAddItem = useCallback(() => {
		try {
			resetMenuConfig()
		} catch (error) {
			console.error(`Error resetting menu configuration: ${error}`)
		}
		navigation.navigate('AddItem')
	}, [navigation])

	const handleRemoveItem = useCallback(
		(item, index) => {
			// Implement confirmation dialog before removing the item
			Alert.alert(
				'Confirm Deletion',
				`Are you sure you want to remove ${item.name}?`,
				[
					{
						text: 'Cancel',
						style: 'cancel',
					},
					{
						text: 'Remove',
						onPress: () => {
							const updatedMenuItems = menuItems.filter((_, i) => i !== index)
							setMenuItems(updatedMenuItems)
						},
					},
				],
				{ cancelable: true }
			)
		},
		[menuItems, setMenuItems]
	)

	const renderMenuItem = ({ item, index }) => (
		<View style={styles.menuItemContainer}>
			<Text
				variant="titleLarge"
				style={styles.menuItemName}>
				{item.name}
			</Text>

			{item.sizes.map((size, index) => (
				<Text
					key={index}
					style={styles.menuItemPrice}>
					{size.size}: ₱{size.price}
				</Text>
			))}

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.viewButton}
					onPress={() => navigation.navigate('ViewMenuItem', { item })}>
					<Text style={styles.buttonText}>View</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.removeButton}
					onPress={() => handleRemoveItem(item, index)}>
					<Text style={styles.buttonText}>Remove</Text>
				</TouchableOpacity>
			</View>
		</View>
	)

	return (
		<SafeAreaView style={styles.screenContainer}>
			<FlatList
				style={styles.menuList}
				data={menuItems}
				renderItem={renderMenuItem}
				keyExtractor={(_, index) => index.toString()}
			/>

			<TouchableOpacity
				style={styles.addButton}
				onPress={handleAddItem}>
				<Text style={styles.buttonText}>Add Item</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		padding: 20,
		backgroundColor: '#2c2c2c',
	},
	menuList: {
		marginBottom: 20,
	},
	menuItemContainer: {
		backgroundColor: '#444',
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
	},
	menuItemName: {
		color: '#fff',
		fontWeight: 'bold',
	},
	menuItemPrice: {
		color: '#fff',
		fontSize: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
	},
	viewButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 5,
	},
	removeButton: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginLeft: 5,
	},
	addButton: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

export default ConcessionScreen
