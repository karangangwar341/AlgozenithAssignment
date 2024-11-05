import React from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import Mainscreen from './components/Mainscreen';

function App() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFF 0%, #F1FBFF 100%)' }} className="flex min-h-screen w-screen">
      <Sidebar />
      <Mainscreen/>
    </div>
  );
}

export default App;
