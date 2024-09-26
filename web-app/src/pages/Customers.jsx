import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const customerData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Charlie Green', email: 'charlie@example.com' },
    { id: 6, name: 'Dave White', email: 'dave@example.com' },
    { id: 7, name: 'Eva Black', email: 'eva@example.com' },
    { id: 8, name: 'Frank Blue', email: 'frank@example.com' },
    { id: 9, name: 'Grace Red', email: 'grace@example.com' },
    { id: 10, name: 'Harry Yellow', email: 'harry@example.com' },
    { id: 11, name: 'Ivy Purple', email: 'ivy@example.com' },
    { id: 12, name: 'Jack Orange', email: 'jack@example.com' },
    { id: 13, name: 'Kathy Brown', email: 'kathy@example.com' },
    { id: 14, name: 'Leo White', email: 'leo@example.com' },
    { id: 15, name: 'Mona Black', email: 'mona@example.com' },
];

function Customers() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [customerToDelete, setCustomerToDelete] = useState(null);

    const filteredCustomers = customerData.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredCustomers.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);

    const handleEdit = (customer) => {
        setEditingCustomer(customer);
        setModalOpen(true);
    };

    const handleDelete = (customer) => {
        setCustomerToDelete(customer);
        setDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        console.log(`Deleted customer with id: ${customerToDelete.id}`);
        setDeleteModalOpen(false);
        setCustomerToDelete(null);
    };

    const handleView = (customer) => {
        navigate('/view-customer', { state: { customer } });
    };

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="Customers" />
                <div className="p-6">
                    <input
                        type="text"
                        placeholder="Search Customers"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Email</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((customer) => (
                                <tr key={customer.id}>
                                    <td className="border-t py-2 px-4">{customer.name}</td>
                                    <td className="border-t py-2 px-4">{customer.email}</td>
                                    <td className="border-t py-2 px-4 flex space-x-2">
                                        <button
                                            onClick={() => handleView(customer)}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
                                        >
                                            <i className="fas fa-eye mr-2"></i>
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleEdit(customer)}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
                                        >
                                            <i className="fas fa-edit mr-2"></i>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(customer)}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
                                        >
                                            <i className="fas fa-trash-alt mr-2"></i>
                                            Delete
                                        </button>
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
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Edit Customer Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Edit Customer</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={editingCustomer?.name || ''}
                            onChange={(e) => setEditingCustomer({ ...editingCustomer, name: e.target.value })}
                            className="mb-2 p-2 border border-gray-300 rounded w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={editingCustomer?.email || ''}
                            onChange={(e) => setEditingCustomer({ ...editingCustomer, email: e.target.value })}
                            className="mb-4 p-2 border border-gray-300 rounded w-full"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => { /* Logic to save changes */ console.log(editingCustomer); setModalOpen(false); }}
                                className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                        <p>Are you sure you want to delete {customerToDelete?.name}?</p>
                        <div className="flex justify-end">
                            <button
                                onClick={confirmDelete}
                                className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => setDeleteModalOpen(false)}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Customers;
