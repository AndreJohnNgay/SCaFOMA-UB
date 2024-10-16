import { useState, useEffect, useCallback } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useFocusEffect } from '@react-navigation/native'
import { Alert } from 'react-native'

const phImage = 'https://via.placeholder.com/100x100.png?text=No+Image'

// temporary database
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
const defAddOns = [{ name: '', price: '' }]

export const Menu = () => {
	const [menuItems, setMenuItems] = useState(menuTemp)
	const [itemName, setItemName] = useState(defItemName)
	const [image, setImage] = useState(defImage)
	const [itemSizes, setItemSizes] = useState(defSizes)
	const [variations, setVariations] = useState(defVariations)
	const [addOns, setAddOns] = useState(defAddOns)

	const resetMenuConfig = useCallback(() => {
		if (itemName !== defItemName) setItemName(defItemName)
		if (image !== defImage) setImage(defImage)
		if (JSON.stringify(itemSizes) !== JSON.stringify(defSizes))
			setItemSizes(defSizes)
		if (JSON.stringify(variations) !== JSON.stringify(defVariations))
			setVariations(defVariations)
		if (JSON.stringify(addOns) !== JSON.stringify(defAddOns))
			setAddOns(defAddOns)
	}, [itemName, image, itemSizes, variations, addOns])

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

	// add size button
	const handleAddSize = () => {
		setItemSizes([...itemSizes, { size: '', price: '' }])
	}

	// remove size button
	const handleRemoveSize = (index) => {
		const newSizes = itemSizes.filter((_, i) => i !== index)
		setItemSizes(newSizes)
	}

	// handle item price input
	const handleItemSizeChange = (index, value) => {
		const newSizes = [...itemSizes]
		newSizes[index].size = value
		setItemSizes(newSizes)
	}

	// handle item price input
	const handleItemPriceChange = (index, value) => {
		const newSizes = [...itemSizes]
		newSizes[index].price = value
		setItemSizes(newSizes)
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
	const handleVariationItemChange = (index, value) => {
		const updatedVariations = [...variations]
		updatedVariations[index].variation = value
		setVariations(updatedVariations)
	}

	const handleVariationSizeChange = (variationIndex, sizeIndex, value) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes[sizeIndex].size = value
		setVariations(updatedVariations)
	}

	const handleVariationPriceChange = (variationIndex, sizeIndex, value) => {
		const updatedVariations = [...variations]
		updatedVariations[variationIndex].sizes[sizeIndex].price = value
		setVariations(updatedVariations)
	}

	// 						------ Add Item AddOn ------

	const handleAddAddOn = () => {
		setAddOns([...addOns, { name: '', price: '' }])
	}

	const handleRemoveAddOn = (index) => {
		const updatedAddOns = addOns.filter((_, i) => i !== index)
		setAddOns(updatedAddOns)
	}

	const handleAddOnNameChange = (index, value) => {
		const newAddOns = [...addOns]
		newAddOns[index].name = value
		setAddOns(newAddOns)
	}

	const handleAddOnPriceChange = (index, value) => {
		const newAddOns = [...addOns]
		newAddOns[index].price = value
		setAddOns(newAddOns)
	}

	// 						------ Handling MenuItems ------

	const handleMenuAddItem = () => {
		// Create a new item object with the specified properties
		const newMenuItem = {
			name: itemName,
			sizes: itemSizes, // this should be itemSizes, not image
			image: image, // this should be image, not itemSizes
			variations: variations,
			addOns: addOns,
		}

		console.log(newMenuItem)

		// Update the menuItems state by adding the new item
		setMenuItems((prevMenuItems) => [...prevMenuItems, newMenuItem])
	}

	const handleRemoveItem = (item, index) => {
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
	}

	// 						------ Values to use for menu backend ------

	return {
		resetMenuConfig,

		// menu
		menuItems,
		setMenuItems,
		handleMenuAddItem,
		handleRemoveItem,

		// add items screen
		addItem,
		itemName,
		setItemName,
		phImage,
		image,
		setImage,
		pickImage,

		// add item sizes screen
		itemSizes,
		setItemSizes,
		reinitItemSizes,
		handleAddSize,
		handleRemoveSize,
		handleItemSizeChange,
		handleItemPriceChange,

		// add item variations screen
		variations,
		initEmptyVariations,
		addNewVariation,
		removeVariation,
		addSizeToVariation,
		removeVariationSize,
		handleVariationItemChange,
		handleVariationSizeChange,
		handleVariationPriceChange,

		// add item addon screen
		addOns,
		setAddOns,
		handleAddAddOn,
		handleRemoveAddOn,
		handleAddOnNameChange,
		handleAddOnPriceChange,
	}
}
