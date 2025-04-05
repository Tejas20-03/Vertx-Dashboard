import React from 'react'
import DashboardContent from './content/DashboardContent'
import AnalyticsContent from './content/AnalyticsContent'
import ReportsContent from './content/ReportsContent'
import SettingsContent from './content/SettingsContent'

const ContentArea = ({ activeTab, tabLabel }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'reports':
        return <ReportsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <div className="p-6">Select a tab</div>;
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-black text-white">
      <div className=" shadow-sm p-4 border-b border-gray-300">
        <h1 className="text-2xl font-semibold">{tabLabel}</h1>
      </div>
      {renderContent()}
    </div>
  )
}

export default ContentArea
