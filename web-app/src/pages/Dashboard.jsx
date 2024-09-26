import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';

const ordersData = [
    { id: '#1234', customer: 'John Doe', concessionaire: "J's Shawarma", total: '₱45.67', status: 'Completed' },
    { id: '#1235', customer: 'Jane Smith', concessionaire: 'Mang Juan', total: '₱67.89', status: 'Pending' },
    { id: '#1236', customer: 'Alice Johnson', concessionaire: 'K-BBQ', total: '₱34.56', status: 'Completed' },
    { id: '#1237', customer: 'Bob Brown', concessionaire: 'Pizza Hut', total: '₱23.45', status: 'Pending' },
    { id: '#1238', customer: 'Charlie Green', concessionaire: 'Burger King', total: '₱89.99', status: 'Completed' },
    { id: '#1239', customer: 'Dave White', concessionaire: 'Starbucks', total: '₱54.23', status: 'Pending' },
    { id: '#1240', customer: 'Eva Black', concessionaire: 'KFC', total: '₱65.78', status: 'Completed' },
    { id: '#1241', customer: 'Frank Blue', concessionaire: 'Jollibee', total: '₱98.76', status: 'Completed' },
    { id: '#1242', customer: 'Grace Red', concessionaire: 'McDonald\'s', total: '₱43.21', status: 'Pending' },
    { id: '#1243', customer: 'Harry Yellow', concessionaire: 'Dunkin', total: '₱12.34', status: 'Completed' },
    { id: '#1244', customer: 'Ivy Purple', concessionaire: 'Subway', total: '₱76.54', status: 'Pending' },
];

function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = ordersData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(ordersData.length / rowsPerPage);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDownloadGraph = () => {
        // Logic for downloading the graph (not implemented here)
        console.log('Download Monthly Income Graph');
    };

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="Dashboard" />
                <main className="flex-1 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <DashboardCard title="Total Customers" value="1,234" />
                            <DashboardCard title="Sales Today" value="916" />
                            <DashboardCard title="Monthly Sales" value="9,525" />
                            <DashboardCard title="Yearly Sales" value="565,152" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md relative">
                            <LineChart />
                            <button
                                onClick={handleDownloadGraph}
                                className="absolute top-4 right-4 bg-red-950 text-white p-2 rounded hover:bg-red-600 flex items-center"
                            >
                                <i className="fas fa-download mr-2"></i>
                                Download
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                                Recent Orders
                                <button
                                    onClick={handleDownloadGraph} // You can modify this function for the specific download logic
                                    className="bg-red-950 text-white p-2 rounded hover:bg-red-600 flex items-center"
                                >
                                    <i className="fas fa-download mr-2"></i>
                                    Download
                                </button>
                            </h2>

                            <table className="min-w-full bg-white rounded-lg shadow-md w-4/5">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700 text-left">
                                        <th className="py-2 px-4">Order ID</th>
                                        <th className="py-2 px-4">Customer</th>
                                        <th className="py-2 px-4">Concessionaire</th>
                                        <th className="py-2 px-4">Total</th>
                                        <th className="py-2 px-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRows.map((order, index) => (
                                        <tr key={index}>
                                            <td className="border-t py-2 px-4">{order.id}</td>
                                            <td className="border-t py-2 px-4">{order.customer}</td>
                                            <td className="border-t py-2 px-4">{order.concessionaire}</td>
                                            <td className="border-t py-2 px-4">{order.total}</td>
                                            <td className={`border-t py-2 px-4 ${order.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                                                {order.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="mt-4">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index}
                                        className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                        onClick={() => handlePaginationClick(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md h-96 relative">
                            <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                                Sales by Cafeteria
                                <button
                                    onClick={handleDownloadGraph} // You can modify this function for the specific download logic
                                    className="bg-red-950 text-white p-2 rounded hover:bg-red-600 flex items-center"
                                >
                                    <i className="fas fa-download mr-2"></i>
                                    Download
                                </button>
                            </h2>
                            <div className="max-h-full">
                                <PieChart />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
