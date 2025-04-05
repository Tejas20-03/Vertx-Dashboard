import React from 'react'

const ReportsContent = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Reports</h2>
      <div className="bg-white p-4 rounded shadow">
        <p>Reports and data exports will be available here.</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Generate Report
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded">
            Export Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportsContent
