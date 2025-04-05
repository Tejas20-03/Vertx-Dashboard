import React from 'react'

const SettingsContent = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded" 
            defaultValue="admin"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Notifications</label>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            <span>Enable email notifications</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default SettingsContent
