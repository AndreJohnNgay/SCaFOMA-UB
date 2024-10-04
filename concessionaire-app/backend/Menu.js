import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const menuTemp = [
	{
		name: 'Hot Dog',
		sizes: [
			{ size: 'Regular', price: '50' },
			{ size: 'Large', price: '70' },
		],
		image: null,
	},
	{
		name: 'Burger',
		sizes: [{ size: 'Large', price: '120' }],
		image: null,
	},
	{
		name: 'Fries',
		sizes: [
			{ size: 'Small', price: '30' },
			{ size: 'Medium', price: '40' },
			{ size: 'Large', price: '50' },
		],
		image: null,
	},
	{
		name: 'Coke',
		sizes: [
			{ size: 'Small', price: '30' },
			{ size: 'Medium', price: '40' },
			{ size: 'Large', price: '50' },
		],
		image: null,
	},
]
const phImage = 'https://via.placeholder.com/100x100.png?text=No+Image'

export const Menu = () => {
	const [menuItems, setMenuItems] = useState(menuTemp)
	const [itemName, setItemName] = useState('')
	const [image, setImage] = useState(null)

	const addItem = (newItem) => {
		setMenuItems((prevItems) => [...prevItems, newItem])
	}

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		})

		if (!result.canceled) {
			setImage(result.assets[0].uri)
		}
	}

	return {
		menuItems,
		addItem: (newItem) => addItem(newItem),
		itemName,
		setItemName: (name) => setItemName(name),
		phImage,
		image,
		pickImage,
	}
}
