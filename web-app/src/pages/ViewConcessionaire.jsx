import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const sampleSalesData = [
    { id: 1, date: '2024-09-21', time: '10:30 AM', soldTo: 'John Doe', item: 'Burger', quantity: 2, totalPrice: 200 },
    { id: 2, date: '2024-09-21', time: '11:15 AM', soldTo: 'Jane Smith', item: 'Fries', quantity: 1, totalPrice: 80 },
    { id: 3, date: '2024-09-22', time: '12:30 PM', soldTo: 'Alice Johnson', item: 'Pizza', quantity: 1, totalPrice: 150 },
    { id: 4, date: '2024-09-23', time: '01:00 PM', soldTo: 'Bob Brown', item: 'Sushi', quantity: 3, totalPrice: 450 },
    { id: 5, date: '2024-09-23', time: '02:45 PM', soldTo: 'Eva Black', item: 'Smoothie', quantity: 2, totalPrice: 250 },
    { id: 6, date: '2024-09-23', time: '03:00 PM', soldTo: 'Lucy Pink', item: 'Burger', quantity: 2, totalPrice: 250 },
];

function ViewConcessionaire() {
    const location = useLocation();
    const concessionaire = location.state?.concessionaire;

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const [searchTerm, setSearchTerm] = useState('');

    // Filter sales data based on search term
    const filteredSalesData = sampleSalesData.filter((sale) =>
        sale.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sale.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sale.soldTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sale.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sale.totalPrice.toString().includes(searchTerm)
    );

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredSalesData.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredSalesData.length / rowsPerPage);

    if (!concessionaire) {
        return <div>No concessionaire data found!</div>;
    }

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle={`${concessionaire.name}'s Profile`} />
                <div className="p-6 flex flex-col items-center">
                    <div className="bg-white p-6 rounded-lg shadow-md w-3/4">
                        <div className="flex items-center">
                            <img
                                src={`https://i.pravatar.cc/150?u=${concessionaire.id}`}
                                alt={`${concessionaire.name}'s Profile`}
                                className="w-32 h-32 rounded-full mr-6"
                            />
                            <div>
                                <h2 className="text-2xl font-bold">{concessionaire.name}</h2>
                                <p className="text-gray-600">{concessionaire.email}</p>
                                <p className="text-gray-600">{concessionaire.concessionName}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Concession Details</h3>
                            <p className="text-gray-700 mt-2">Concession Name: {concessionaire.concessionName}</p>
                            <p className="text-gray-700 mt-2">Email: {concessionaire.email}</p>
                        </div>
                    </div>

                    {/* Sales History Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md w-3/4 mt-6">
                        <h3 className="text-xl font-semibold mb-4">Sales History</h3>

                        {/* Search Bar */}
                        <input
                            type="text"
                            placeholder="Search sales history"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 mb-4 border border-gray-300 rounded w-full"
                        />

                        {/* Sales Table */}
                        <table className="min-w-full bg-white rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-200 text-gray-700 text-left">
                                    <th className="py-2 px-4">Date</th>
                                    <th className="py-2 px-4">Time</th>
                                    <th className="py-2 px-4">Sold To</th>
                                    <th className="py-2 px-4">Item Sold</th>
                                    <th className="py-2 px-4">Quantity</th>
                                    <th className="py-2 px-4">Total Price (PHP)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRows.map((sale) => (
                                    <tr key={sale.id}>
                                        <td className="border-t py-2 px-4">{sale.date}</td>
                                        <td className="border-t py-2 px-4">{sale.time}</td>
                                        <td className="border-t py-2 px-4">{sale.soldTo}</td>
                                        <td className="border-t py-2 px-4">{sale.item}</td>
                                        <td className="border-t py-2 px-4">{sale.quantity}</td>
                                        <td className="border-t py-2 px-4">₱{sale.totalPrice.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination Controls */}
                        <div className="mt-4 flex justify-center">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    className={`px-3 py-1 border rounded mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewConcessionaire;
