import React from 'react'

const Navigation = ({ navTabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-black border-r border-gray-300 text-white">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Vertx Dashboard</h2>
      </div>
      <nav className="mt-6">
        {navTabs.map(tab => (
          <div 
            key={tab.id}
            className={`px-6 py-3 cursor-pointer ${activeTab === tab.id ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Navigation
