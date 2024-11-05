// Layout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PartsList from './PartsList';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Toggle Button */}
        <div className="lg:hidden p-4 bg-white shadow-md">
          <button onClick={toggleSidebar} className="text-2xl">
            ☰
          </button>
        </div>
        
        {/* Parts List */}
        <div className="p-4 overflow-y-auto">
          <PartsList />
        </div>
      </div>
    </div>
  );
};

export default Layout;
