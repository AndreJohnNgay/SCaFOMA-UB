import { useState, useEffect, useCallback } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useFocusEffect } from '@react-navigation/native'

const phImage = 'https://via.placeholder.com/100x100.png?text=No+Image'

const menuTemp = [
	{
		name: 'Hot Dog',
		sizes: [
			{ size: 'Regular', price: 50 },
			{ size: 'Large', price: 70 },
		],
		image: phImage,
	},
	{
		name: 'Burger',
		sizes: [{ size: 'Large', price: 120 }],
		image: phImage,
	},
	{
		name: 'Fries',
		sizes: [
			{ size: 'Small', price: 30 },
			{ size: 'Medium', price: 40 },
			{ size: 'Large', price: 50 },
		],
		image: phImage,
	},
	{
		name: 'Coke',
		sizes: [
			{ size: 'Small', price: 30 },
			{ size: 'Medium', price: 40 },
			{ size: 'Large', price: 50 },
		],
		image: phImage,
	},
]
const defItemName = ''
const defImage = phImage
const defSizes = [{ size: '', price: '' }]
const defVariations = []

export const Menu = () => {
	const [menuItems, setMenuItems] = useState(menuTemp)
	const [itemName, setItemName] = useState(defItemName)
	const [image, setImage] = useState(defImage)
	const [itemSizes, setItemSizes] = useState(defSizes)
	const [variations, setVariations] = useState(defVariations)
	const [addOns, setAddOns] = useState([{ name: '', price: '' }])

	const resetMenuConfig = () => {
		setItemName(defItemName)
		setImage(defImage)
		setItemSizes(defSizes)
		setVariations(defVariations)
	}

	// 						------- Add Item Name and Image ------

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

	// 						------ Add Item Sizes and Prices

	// for reinitializing empty row because it disappears when going
	// back to this screen from variations screen if there is no
	// itemSizes value
	const reinitItemSizes = () => {
		useFocusEffect(
			useCallback(() => {
				if (itemSizes.length === 0) {
					setItemSizes([{ size: '', price: '' }])
				}
			}, [itemSizes])
		)
	}

	// 						------ Add Item Variations ------

	// Initialize variation sizes and prices from itemSizes value
	useEffect(() => {
		setVariations((prevVariations) =>
			(prevVariations ?? []).map((variation) => ({
				...variation,
				sizes: variation.sizes.every((size) => !size.size && !size.price)
					? itemSizes.map((size) => ({ ...size }))
					: variation.sizes,
			}))
		)
	}, [itemSizes])

	// for initializing empty variation item if variations value is empty
	const initEmptyVariations = () => {
		useEffect(() => {
			if (variations.length === 0 && itemSizes.length !== 0) {
				addNewVariation()
			}
		}, [])
	}

	// add variation button
	// sets default value of new variation with item Sizes value
	const addNewVariation = () => {
		const newVariation = {
			variation: '',
			sizes: itemSizes.map((size) => ({ ...size })),
		}
		setVariations((prevVariations) => [...prevVariations, newVariation])
	}

	// remove variation item button
	const removeVariation = (index) => {
		const updatedVariations = variations.filter((_, i) => i !== index)
		setVariations(updatedVariations)
	}

	// add variation item size and price row button
	const addSizeToVariation = (variationIndex) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes.push({ size: '', price: '' })
		setVariations(updatedVariations)
	}

	// remove variation item's size row and price button
	const removeVariationSize = (variationIndex, sizeIndex) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes = updatedVariations[
			variationIndex
		].sizes.filter((_, i) => i !== sizeIndex)
		setVariations(updatedVariations)
	}

	// variation item input changes
	const handleVariationChange = (index, value) => {
		const updatedVariations = [...variations]
		updatedVariations[index].variation = value
		setVariations(updatedVariations)
	}

	const handleSizeChange = (variationIndex, sizeIndex, value) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes[sizeIndex].size = value
		setVariations(updatedVariations)
	}

	const handlePriceChange = (variationIndex, sizeIndex, value) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes[sizeIndex].price = value
		setVariations(updatedVariations)
	}

	// 						------ Add Item AddOn ------

	const handleAddAddOn = () => {
		setAddOns([...addOns, { name: '', price: '' }])
	}

	// 						------ Values to use for menu backend ------

	return {
		resetMenuConfig,
		menuItems,
		setMenuItems,
		addItem,
		itemName,
		setItemName,
		phImage,
		image,
		setImage,
		pickImage,
		itemSizes,
		setItemSizes,
		reinitItemSizes,
		variations,
		initEmptyVariations,
		addNewVariation,
		removeVariation,
		addSizeToVariation,
		removeVariationSize,
		handleVariationChange,
		handleSizeChange,
		handlePriceChange,
	}
}
