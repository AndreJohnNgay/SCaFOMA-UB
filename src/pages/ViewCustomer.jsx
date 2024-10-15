import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const orderHistoryData = [
    {
        id: 1,
        orderDate: '2024-01-01',
        orderTime: '10:30 AM',
        concession: 'Burger Shack',
        item: 'Burger',
        totalPrice: 10.00
    }, {
        id: 2,
        orderDate: '2024-01-05',
        orderTime: '12:00 PM',
        concession: 'Pizza Corner',
        item: 'Pizza',
        totalPrice: 15.00
    }, {
        id: 3,
        orderDate: '2024-01-10',
        orderTime: '1:15 PM',
        concession: 'Sushi Spot',
        item: 'Sushi',
        totalPrice: 20.00
    }, {
        id: 4,
        orderDate: '2024-01-15',
        orderTime: '2:30 PM',
        concession: 'Taco Time',
        item: 'Taco',
        totalPrice: 12.50
    }, {
        id: 5,
        orderDate: '2024-01-20',
        orderTime: '11:45 AM',
        concession: 'Smoothie Bar',
        item: 'Smoothie',
        totalPrice: 8.00
    }, {
        id: 6,
        orderDate: '2024-01-25',
        orderTime: '3:00 PM',
        concession: 'Pasta Palace',
        item: 'Pasta',
        totalPrice: 14.00
    }, {
        id: 7,
        orderDate: '2024-01-30',
        orderTime: '4:30 PM',
        concession: 'Salad Station',
        item: 'Salad',
        totalPrice: 9.00
    }
];

function ViewCustomer() {
    const [searchTerm,
        setSearchTerm] = useState('');
    const [currentPage,
        setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const filteredOrders = orderHistoryData.filter(order => order.item.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredOrders.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="View Customer"/>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
                    <div className="mb-6 p-4 bg-white rounded shadow-md flex items-center">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-full w-24 h-24 mr-4"/>
                        <div>
                            <p>
                                <strong>Name:</strong>
                                John Doe</p>
                            <p>
                                <strong>Email:</strong>
                                john@example.com</p>
                            <p>
                                <strong>Orders Made:</strong>
                                7</p>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Order History</h2>
                    <input
                        type="text"
                        placeholder="Search Orders"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4 p-2 border border-gray-300 rounded w-full"/>
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="py-2 px-4">Order Date</th>
                                <th className="py-2 px-4">Order Time</th>
                                <th className="py-2 px-4">Concession</th>
                                <th className="py-2 px-4">Item</th>
                                <th className="py-2 px-4">Total Price (PHP)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((order) => (
                                <tr key={order.id}>
                                    <td className="border-t py-2 px-4">{order.orderDate}</td>
                                    <td className="border-t py-2 px-4">{order.orderTime}</td>
                                    <td className="border-t py-2 px-4">{order.concession}</td>
                                    <td className="border-t py-2 px-4">{order.item}</td>
                                    <td className="border-t py-2 px-4">{order
                                            .totalPrice
                                            .toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4">
                        {Array.from({
                            length: totalPages
                        }, (_, index) => (
                            <button
                                key={index}
                                className={`px-3 py-1 border rounded ${currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-black'}`}
                                onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCustomer;
