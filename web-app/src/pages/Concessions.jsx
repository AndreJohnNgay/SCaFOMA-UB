import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const concessionData = [
    {
        id: 1,
        name: 'Burger Shack',
        concessionaire: 'John Doe',
        cafeteria: 'Cafeteria A'
    }, {
        id: 2,
        name: 'Pizza Corner',
        concessionaire: 'Jane Smith',
        cafeteria: 'Cafeteria C'
    }, {
        id: 3,
        name: 'Sushi Spot',
        concessionaire: 'Alice Johnson',
        cafeteria: 'Cafeteria C'
    }, {
        id: 4,
        name: 'Taco Time',
        concessionaire: 'Bob Brown',
        cafeteria: 'Cafeteria B'
    }, {
        id: 5,
        name: 'Smoothie Bar',
        concessionaire: 'Charlie Green',
        cafeteria: 'Cafeteria A'
    }, {
        id: 6,
        name: 'Pasta Palace',
        concessionaire: 'Dave White',
        cafeteria: 'Cafeteria A'
    }, {
        id: 7,
        name: 'Salad Station',
        concessionaire: 'Eva Black',
        cafeteria: 'Cafeteria B'
    }, {
        id: 8,
        name: 'Dessert Delights',
        concessionaire: 'Frank Blue',
        cafeteria: 'Cafeteria C'
    }, {
        id: 9,
        name: 'Coffee House',
        concessionaire: 'Grace Red',
        cafeteria: 'Cafeteria B'
    }, {
        id: 10,
        name: 'BBQ Grill',
        concessionaire: 'Harry Yellow',
        cafeteria: 'Cafeteria A'
    }, {
        id: 11,
        name: 'Deli Delights',
        concessionaire: 'Ivy Purple',
        cafeteria: 'Cafeteria B'
    }, {
        id: 12,
        name: 'Crepe Haven',
        concessionaire: 'Jack Orange',
        cafeteria: 'Cafeteria C'
    }
];

function Concessions() {
    const [searchTerm,
        setSearchTerm] = useState('');
    const [currentPage,
        setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [modalOpen,
        setModalOpen] = useState(false);
    const [isEditing,
        setIsEditing] = useState(false);
    const [editConcession,
        setEditConcession] = useState(null);
    const [confirmDelete,
        setConfirmDelete] = useState(false);
    const [selectedConcession,
        setSelectedConcession] = useState(null);

    const filteredConcessions = concessionData.filter(concession => concession.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredConcessions.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredConcessions.length / rowsPerPage);

    const handleDelete = (id) => {
        console.log(`Deleted concession with id: ${id}`);
        setConfirmDelete(false);
    };

    const handleEditConcession = () => {
        console.log('Updated concession:', editConcession);
        setModalOpen(false);
    };

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="Concessions"/>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search Concessions"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border border-gray-300 rounded"/>
                        <button
                            onClick={() => {
                            setModalOpen(true);
                            setIsEditing(false);
                            setEditConcession(null);
                        }}
                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center">
                            <i className="fas fa-plus mr-2"></i>
                            Add Concession
                        </button>
                    </div>
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="py-2 px-4">ID</th>
                                <th className="py-2 px-4">Concession Name</th>
                                <th className="py-2 px-4">Concessionaire</th>
                                <th className="py-2 px-4">Cafeteria</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((concession) => (
                                <tr key={concession.id}>
                                    <td className="border-t py-2 px-4">{concession.id}</td>
                                    <td className="border-t py-2 px-4">{concession.name}</td>
                                    <td className="border-t py-2 px-4">{concession.concessionaire}</td>
                                    <td className="border-t py-2 px-4">{concession.cafeteria}</td>
                                    <td className="border-t py-2 px-4 flex space-x-2">
                                        <button
                                            onClick={() => {
                                            setModalOpen(true);
                                            setIsEditing(true);
                                            setEditConcession(concession);
                                        }}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center">
                                            <i className="fas fa-edit mr-2"></i>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                            setConfirmDelete(true);
                                            setSelectedConcession(concession);
                                        }}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center">
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
                                ? 'Edit Concession'
                                : 'Add Concession'}</h2>
                        <input
                            type="text"
                            placeholder="Concession Name"
                            value={editConcession
                            ?.name || ''}
                            onChange={(e) => setEditConcession({
                            ...editConcession,
                            name: e.target.value
                        })}
                            className="mb-2 p-2 border border-gray-300 rounded w-full"/>
                        <input
                            type="text"
                            placeholder="Concessionaire"
                            value={editConcession
                            ?.concessionaire || ''}
                            onChange={(e) => setEditConcession({
                            ...editConcession,
                            concessionaire: e.target.value
                        })}
                            className="mb-2 p-2 border border-gray-300 rounded w-full"/>
                        <input
                            type="text"
                            placeholder="Cafeteria"
                            value={editConcession
                            ?.cafeteria || ''}
                            onChange={(e) => setEditConcession({
                            ...editConcession,
                            cafeteria: e.target.value
                        })}
                            className="mb-4 p-2 border border-gray-300 rounded w-full"/>
                        <div className="flex justify-end">
                            <button
                                onClick={handleEditConcession}
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
                        <p>Are you sure you want to delete {selectedConcession
                                ?.name}?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => handleDelete(selectedConcession
                                ?.id)}
                                className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 mr-2">
                                Yes, Delete
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

export default Concessions;
