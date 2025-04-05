import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import Navigation from "./component/Navigation";
import ContentArea from "./component/ContentArea";

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navTabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Navigation
        navTabs={navTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ContentArea
        activeTab={activeTab}
        tabLabel={navTabs.find((tab) => tab.id === activeTab)?.label}
      />
    </div>
  );
};

export default App;
