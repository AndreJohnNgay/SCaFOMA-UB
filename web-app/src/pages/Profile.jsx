import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Profile() {
  return (
    <div className="bg-gray-100 h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar pageTitle="Profile" />
        <div className="flex-1 p-6 mt-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end mt-4"> {/* Flex container for right alignment */}
                <button
                  type="submit"
                  className="bg-red-950 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
