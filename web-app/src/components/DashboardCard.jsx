import React from 'react'

function DashboardCard({title, value}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}

export default DashboardCard