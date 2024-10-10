import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const menuTemp = [
	{
		name: 'Hot Dog',
		sizes: [
			{ size: 'Regular', price: '50' },
			{ size: 'Large', price: '70' },
		],
		image: phImage,
	},
	{
		name: 'Burger',
		sizes: [{ size: 'Large', price: '120' }],
		image: phImage,
	},
	{
		name: 'Fries',
		sizes: [
			{ size: 'Small', price: '30' },
			{ size: 'Medium', price: '40' },
			{ size: 'Large', price: '50' },
		],
		image: phImage,
	},
	{
		name: 'Coke',
		sizes: [
			{ size: 'Small', price: '30' },
			{ size: 'Medium', price: '40' },
			{ size: 'Large', price: '50' },
		],
		image: phImage,
	},
]

const defItemName = ''
const defImage = phImage
const phImage = 'https://via.placeholder.com/100x100.png?text=No+Image'
const defSizes = [{ size: '', price: '' }]

export const Menu = () => {
	const [menuItems, setMenuItems] = useState(menuTemp)
	const [itemName, setItemName] = useState(defItemName)
	const [image, setImage] = useState(defImage)
	const [itemSizes, setItemSizes] = useState(defSizes)

	const resetMenuConfig = () => {
		setItemName(defItemName)
		setImage(defImage)
		setItemSizes(defSizes)
	}

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
		resetMenuConfig: () => resetMenuConfig(),
		menuItems,
		setMenuItems: (menuItems) => setMenuItems(menuItems),
		addItem: (newItem) => addItem(newItem),
		itemName,
		setItemName: (name) => setItemName(name),
		phImage,
		image,
		setImage: (image) => setImage(image),
		pickImage,
		itemSizes,
		setItemSizes: (sizes) => setItemSizes(sizes),
	}
}
