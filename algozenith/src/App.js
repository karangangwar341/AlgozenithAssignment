import React from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-700">
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default App;
