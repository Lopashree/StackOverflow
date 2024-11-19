import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content-grid">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
