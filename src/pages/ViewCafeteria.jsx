import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const cafeteriaDetails = {
    name: 'Cafeteria One',
    location: 'Building F'
};

const concessionData = [
    {
        id: 1,
        concessionName: 'Concession A',
        assignedDate: '2023-09-15'
    }, {
        id: 2,
        concessionName: 'Concession B',
        assignedDate: '2023-09-16'
    }, {
        id: 3,
        concessionName: 'Concession C',
        assignedDate: '2023-09-17'
    }, {
        id: 4,
        concessionName: 'Concession D',
        assignedDate: '2023-09-18'
    }, {
        id: 5,
        concessionName: 'Concession E',
        assignedDate: '2023-09-19'
    }, {
        id: 6,
        concessionName: 'Concession F',
        assignedDate: '2023-09-20'
    }, {
        id: 7,
        concessionName: 'Concession G',
        assignedDate: '2023-09-21'
    }, {
        id: 8,
        concessionName: 'Concession H',
        assignedDate: '2023-09-22'
    }, {
        id: 9,
        concessionName: 'Concession I',
        assignedDate: '2023-09-23'
    }, {
        id: 10,
        concessionName: 'Concession J',
        assignedDate: '2023-09-24'
    }, {
        id: 11,
        concessionName: 'Concession K',
        assignedDate: '2023-09-25'
    }, {
        id: 12,
        concessionName: 'Concession L',
        assignedDate: '2023-09-26'
    }
];

function ViewCafeteria() {
    const [cafeteria] = useState(cafeteriaDetails);
    const [concessions] = useState(concessionData);
    const [searchTerm,
        setSearchTerm] = useState('');
    const [currentPage,
        setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const filteredConcessions = concessions.filter(concession => concession.concessionName.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredConcessions.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredConcessions.length / rowsPerPage);

    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="View Cafeteria"/>
                <div className="p-6">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-4">{cafeteria.name}</h2>
                        <p>
                            <strong>Location:</strong>
                            {cafeteria.location}</p>
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search Concessions"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border border-gray-300 rounded w-full"/>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Assigned Concessions</h3>
                        <table className="min-w-full bg-white rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-200 text-gray-700 text-left">
                                    <th className="py-2 px-4">ID</th>
                                    <th className="py-2 px-4">Concession Name</th>
                                    <th className="py-2 px-4">Assigned Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRows.map((concession) => (
                                    <tr key={concession.id}>
                                        <td className="border-t py-2 px-4">{concession.id}</td>
                                        <td className="border-t py-2 px-4">{concession.concessionName}</td>
                                        <td className="border-t py-2 px-4">{concession.assignedDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-4 flex justify-between items-center">
                            <div>
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
                            <span className="text-gray-600">Showing {currentRows.length}
                                of {filteredConcessions.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCafeteria;
