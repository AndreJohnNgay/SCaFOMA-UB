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

	const initEmptyVariations = () => {
		useEffect(() => {
			if (variations.length === 0 && itemSizes.length !== 0) {
				addNewVariation()
			}
		}, [])
	}

	const reinitItemSizes = () => {
		useFocusEffect(
			useCallback(() => {
				if (itemSizes.length === 0) {
					setItemSizes([{ size: '', price: '' }])
				}
			}, [itemSizes])
		)
	}

	const resetMenuConfig = () => {
		setItemName(defItemName)
		setImage(defImage)
		setItemSizes(defSizes)
		setVariations(defVariations)
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

	const addNewVariation = () => {
		const newVariation = {
			variation: '',
			sizes: itemSizes.map((size) => ({ ...size })),
		}
		setVariations((prevVariations) => [...prevVariations, newVariation])
	}

	const removeVariation = (index) => {
		const updatedVariations = variations.filter((_, i) => i !== index)
		setVariations(updatedVariations)
	}

	const removeVariationSize = (variationIndex, sizeIndex) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes = updatedVariations[
			variationIndex
		].sizes.filter((_, i) => i !== sizeIndex)
		setVariations(updatedVariations)
	}

	const addSizeToVariation = (variationIndex) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes.push({ size: '', price: '' })
		setVariations(updatedVariations)
	}

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
