import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'

function Navbar({pageTitle}) {

    const [dropdownOpen,
        setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navigate = useNavigate();
    const goToLogin = () =>{
      navigate('/')
    }
    const goToProfile = () =>{
      navigate('/profile')
    }

    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{pageTitle}</h1>

            <div className="relative inline-block text-left">
                <div>
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center space-x-2 text-gray-800 focus:outline-none">
                        <span className="font-semibold">John Doe</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                </div>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                        <div className="py-1">
                            <a onClick={goToProfile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Profile
                            </a>
                            <a onClick={goToLogin} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Logout
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
