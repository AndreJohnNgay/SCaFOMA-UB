import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {useNavigate} from 'react-router-dom';

const concessionaireData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        concessionName: 'Burger Shack'
    }, {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        concessionName: 'Pizza Corner'
    }, {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        concessionName: 'Sushi Spot'
    }
];

function Concessionaires() {
    const navigate = useNavigate();
    const [searchTerm,
        setSearchTerm] = useState('');
    const [currentPage,
        setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [modalOpen,
        setModalOpen] = useState(false);
    const [isEditing,
        setIsEditing] = useState(false);
    const [editConcessionaire,
        setEditConcessionaire] = useState(null);
    const [confirmDelete,
        setConfirmDelete] = useState(false);
    const [selectedConcessionaire,
        setSelectedConcessionaire] = useState(null);

    const filteredConcessionaires = concessionaireData.filter(concessionaire => concessionaire.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredConcessionaires.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredConcessionaires.length / rowsPerPage);

    const handleDelete = (id) => {
        console.log(`Deleted concessionaire with id: ${id}`);
        setConfirmDelete(false);
    };

    const handleEditConcessionaire = () => {
        console.log('Updated concessionaire:', editConcessionaire);
        setModalOpen(false);
    };

    const concessionNames = [...new Set(concessionaireData.map(item => item.concessionName))];

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="Concessionaires"/>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search Concessionaires"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border border-gray-300 rounded"/>
                        <button
                            onClick={() => {
                            setModalOpen(true);
                            setIsEditing(false);
                            setEditConcessionaire(null);
                        }}
                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600">
                            <i className="fas fa-plus mr-2"></i>
                            Add Concessionaire
                        </button>
                    </div>
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Email</th>
                                <th className="py-2 px-4">Concession Name</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((concessionaire) => (
                                <tr key={concessionaire.id}>
                                    <td className="border-t py-2 px-4">{concessionaire.name}</td>
                                    <td className="border-t py-2 px-4">{concessionaire.email}</td>
                                    <td className="border-t py-2 px-4">{concessionaire.concessionName}</td>
                                    <td className="border-t py-2 px-4 flex space-x-2">
                                        <button
                                            onClick={() => navigate('/view-concessionaire', {state: {
                                                concessionaire
                                            }})}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600">
                                            <i className="fas fa-eye mr-2"></i>
                                            View
                                        </button>
                                        <button
                                            onClick={() => {
                                            setModalOpen(true);
                                            setIsEditing(true);
                                            setEditConcessionaire(concessionaire);
                                        }}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600">
                                            <i className="fas fa-edit mr-2"></i>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                            setConfirmDelete(true);
                                            setSelectedConcessionaire(concessionaire);
                                        }}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600">
                                            <i className="fas fa-trash-alt mr-2"></i>
                                            Delete
                                        </button>
                                    </td>
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

            {modalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">{isEditing
                                ? 'Edit Concessionaire'
                                : 'Add Concessionaire'}</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={editConcessionaire
                            ?.name || ''}
                            onChange={(e) => setEditConcessionaire({
                            ...editConcessionaire,
                            name: e.target.value
                        })}
                            className="mb-2 p-2 border border-gray-300 rounded w-full"/>
                        <input
                            type="email"
                            placeholder="Email"
                            value={editConcessionaire
                            ?.email || ''}
                            onChange={(e) => setEditConcessionaire({
                            ...editConcessionaire,
                            email: e.target.value
                        })}
                            className="mb-2 p-2 border border-gray-300 rounded w-full"/>
                        <select
                            value={editConcessionaire
                            ?.concessionName || ''}
                            onChange={(e) => setEditConcessionaire({
                            ...editConcessionaire,
                            concessionName: e.target.value
                        })}
                            className="mb-4 p-2 border border-gray-300 rounded w-full">
                            <option value="">Select a Concession</option>
                            {concessionNames.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                        <div className="flex justify-end">
                            <button
                                onClick={handleEditConcessionaire}
                                className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 mr-2">
                                {isEditing
                                    ? 'Save Changes'
                                    : 'Add'}
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {confirmDelete && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
                        <p>Are you sure you want to delete {selectedConcessionaire
                                ?.name}?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => handleDelete(selectedConcessionaire
                                ?.id)}
                                className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 mr-2">
                                Delete
                            </button>
                            <button
                                onClick={() => setConfirmDelete(false)}
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Concessionaires;
