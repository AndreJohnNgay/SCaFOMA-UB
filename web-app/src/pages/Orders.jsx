import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Orders() {
    return (
        <div className="bg-gray-100 h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar pageTitle="Dashboard"/>
            </div>
        </div>
    )
}

export default Orders