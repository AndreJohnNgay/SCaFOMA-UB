import { useState } from 'react'

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

	const addItem = (newItem) => {
		setMenuItems((prevItems) => [...prevItems, newItem])
	}

	return {
		menuItems: menuItems,
		addItem: (newItem) => addItem(newItem),
		phImage: phImage,
	}
}
