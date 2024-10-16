import { useState, useEffect } from 'react'

const ordersTemp = [
	{
		id: '1',
		customerName: 'John Doe',
		items: [
			{ id: '1a', item: 'Pizza', quantity: 1, price: 80 },
			{ id: '1b', item: 'Burger', quantity: 2, price: 50 },
		],
		status: 'pending',
		totalPrice: 180,
	},
	{
		id: '2',
		customerName: 'Jane Smith',
		items: [{ id: '2a', item: 'Fries', quantity: 3, price: 30 }],
		status: 'pending',
		totalPrice: 90,
	},
	{
		id: '3',
		customerName: 'Alice Johnson',
		items: [{ id: '3a', item: 'Pasta', quantity: 1, price: 100 }],
		status: 'accepted',
		totalPrice: 100,
	},
]

export default function Orders() {
	const [orders, setOrders] = useState(ordersTemp)
	const [pendingOrders, setPendingOrders] = useState([])
	const [acceptedOrders, setAcceptedOrders] = useState([])

	// Use useEffect to update pending and accepted orders when `orders` changes
	useEffect(() => {
		setPendingOrders(orders.filter((order) => order.status === 'pending'))
		setAcceptedOrders(orders.filter((order) => order.status === 'accepted'))
	}, [orders])

	const loadOrders = () => {
		// This will automatically refresh when orders are modified
		setPendingOrders(orders.filter((order) => order.status === 'pending'))
		setAcceptedOrders(orders.filter((order) => order.status === 'accepted'))
	}

	const acceptOrder = (order) => {
		setOrders((prevOrders) =>
			prevOrders.map((o) =>
				o.id === order.id ? { ...o, status: 'accepted' } : o
			)
		)
	}

	const declineOrder = (order) => {
		setOrders((prevOrders) => prevOrders.filter((o) => o.id !== order.id))
	}

	const markAsNoShow = (order) => {
		setOrders((prevOrders) =>
			prevOrders.map((o) =>
				o.id === order.id ? { ...o, status: 'no show' } : o
			)
		)
	}

	return {
		loadOrders,
		pendingOrders,
		acceptedOrders,
		acceptOrder,
		declineOrder,
		markAsNoShow,
	}
}
