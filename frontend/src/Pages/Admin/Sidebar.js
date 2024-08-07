import React, { useState } from 'react';
//import './App.css'; // Ensure to include styling
import '../../Assets/CSS/Side.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul>
          <li><a href="#home">Dashboard</a></li>
          <li><a href="#students">Users</a></li>
          <li><a href="#assignments">Courses</a></li>
          <li><a href="#contact">Analytics</a></li>
          <li><a href="#contact">Settings</a></li>
          <li><a href="/adminprofile">Profile</a></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
      <div className="content">
        <button className="menu-btn" onClick={toggleSidebar}>
          &#9776;
        </button>
        
      </div>
    </div>
  );
}

export default Sidebar;
