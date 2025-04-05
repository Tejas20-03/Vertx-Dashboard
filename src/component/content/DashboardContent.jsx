import React from 'react'

const DashboardContent = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium">Active Sessions</h3>
          <p className="text-2xl font-bold">56</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium">Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
