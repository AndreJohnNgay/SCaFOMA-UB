import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {useNavigate} from 'react-router-dom';

const cafeteriaData = [
    {
        id: 1,
        name: 'Cafeteria One',
        location: 'Building F'
    }, {
        id: 2,
        name: 'Cafeteria Two',
        location: 'Building H'
    }, {
        id: 3,
        name: 'Cafeteria Three',
        location: 'Building A'
    }
];

function Cafeterias() {
    const navigate = useNavigate();
    const [searchTerm,
        setSearchTerm] = useState('');
    const [modalOpen,
        setModalOpen] = useState(false);
    const [editCafeteria,
        setEditCafeteria] = useState(null);
    const [isEditing,
        setIsEditing] = useState(false);
    const [currentPage,
        setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const filteredCafeterias = cafeteriaData.filter(cafeteria => cafeteria.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredCafeterias.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredCafeterias.length / rowsPerPage);

    const handleEditCafeteria = () => {
        console.log('Updated cafeteria:', editCafeteria);
        setModalOpen(false);
    };

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="Cafeterias"/>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search Cafeterias"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border border-gray-300 rounded"/>
                        <button
                            onClick={() => {
                            setModalOpen(true);
                            setIsEditing(false);
                            setEditCafeteria({name: '', location: ''});
                        }}
                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center">
                            <i className="fas fa-plus mr-2"></i>
                            Add Cafeteria
                        </button>
                    </div>
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="py-2 px-4">Cafeteria Name</th>
                                <th className="py-2 px-4">Location</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRows.map((cafeteria) => (
                                <tr key={cafeteria.id}>
                                    <td className="border-t py-2 px-4">{cafeteria.name}</td>
                                    <td className="border-t py-2 px-4">{cafeteria.location}</td>
                                    <td className="border-t py-2 px-4 flex space-x-2">
                                        <button
                                            onClick={() => navigate('/view-cafeteria')}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center">
                                            <i className="fas fa-eye mr-2"></i>
                                            View
                                        </button>
                                        <button
                                            onClick={() => {
                                            setModalOpen(true);
                                            setIsEditing(true);
                                            setEditCafeteria(cafeteria);
                                        }}
                                            className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center">
                                            <i className="fas fa-edit mr-2"></i>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                            console.log(`Deleted cafeteria: ${cafeteria.name}`);
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

                    {modalOpen && (
                        <div
                            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-lg">
                                <h2 className="text-lg font-semibold mb-4">{isEditing
                                        ? 'Edit Cafeteria'
                                        : 'Add Cafeteria'}</h2>
                                <input
                                    type="text"
                                    placeholder="Cafeteria Name"
                                    value={editCafeteria
                                    ?.name || ''}
                                    onChange={(e) => setEditCafeteria({
                                    ...editCafeteria,
                                    name: e.target.value
                                })}
                                    className="mb-2 p-2 border border-gray-300 rounded w-full"/>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={editCafeteria
                                    ?.location || ''}
                                    onChange={(e) => setEditCafeteria({
                                    ...editCafeteria,
                                    location: e.target.value
                                })}
                                    className="mb-4 p-2 border border-gray-300 rounded w-full"/>
                                <div className="flex justify-end">
                                    <button
                                        onClick={handleEditCafeteria}
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
                </div>
            </div>
        </div>
    );
}

export default Cafeterias;
