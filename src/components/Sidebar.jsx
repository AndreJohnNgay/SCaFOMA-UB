import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    
    const goToDashboard = () => {
        navigate('/dashboard');
    };

    const goToCustomers = () => {
        navigate('/customers'); // Add the route for customers
    };

    const goToConcessionaires = () => {
        navigate('/concessionaires'); // Add the route for concessionaires
    };

    const goToCafeterias = () => {
        navigate('/cafeterias'); // Add the route for cafeterias
    };

    const goToConcessions = () => {
        navigate('/concessions'); // Add the route for concessions
    };

    const goToOrders = () => {
        navigate('/orders'); // Add the route for orders
    };

    return (
        <aside className="w-64 bg-red-950 text-gray-100 flex flex-col">
            <div className="p-4 text-center text-xl font-semibold">
                SCaFOMA-UB
            </div>
            <nav className="flex-1 px-2 py-4 space-y-2">
                <br />
                <hr />
                <div>
                    <p className="px-4 py-2 text-sm font-bold text-gray-400 uppercase">
                        Home
                    </p>
                    <a 
                        onClick={goToDashboard} 
                        className="flex items-center py-2.5 px-8 rounded transition duration-200 hover:bg-gray-700"
                    >
                        <i className="fas fa-tachometer-alt mr-2"></i>
                        Dashboard
                    </a>
                </div>

                <br />
                <hr />
                <div>
                    <p className="px-4 py-2 text-sm font-bold text-gray-400 uppercase">
                        Customer Management
                    </p>
                    <a 
                        onClick={goToCustomers} 
                        className="flex items-center py-2.5 px-8 rounded transition duration-200 hover:bg-gray-700"
                    >
                        <i className="fas fa-users mr-2"></i>
                        Customers
                    </a>
                </div>

                <br />
                <hr />
                <div>
                    <p className="px-4 py-2 text-sm font-bold text-gray-400 uppercase">
                        Cafeteria Management
                    </p>
                    <a 
                        onClick={goToCafeterias} 
                        className="flex items-center py-2.5 px-8 rounded transition duration-200 hover:bg-gray-700"
                    >
                        <i className="fas fa-coffee mr-2"></i>
                        Cafeterias
                    </a>
                    <a 
                        onClick={goToConcessions} 
                        className="flex items-center py-2.5 px-8 rounded transition duration-200 hover:bg-gray-700"
                    >
                        <i className="fas fa-cart-plus mr-2"></i>
                        Concessions
                    </a>
                    <a 
                        onClick={goToConcessionaires} 
                        className="flex items-center py-2.5 px-8 rounded transition duration-200 hover:bg-gray-700"
                    >
                        <i className="fas fa-utensils mr-2"></i>
                        Concessionaires
                    </a>


                    {/* <a 
                        onClick={goToOrders} 
                        className="flex items-center py-2.5 px-8 rounded transition duration-200 hover:bg-gray-700"
                    >
                        <i className="fas fa-receipt mr-2"></i>
                        Orders
                    </a> */}
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
