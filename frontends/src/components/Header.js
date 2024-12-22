//Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ToggleModeButton from './ToggleModeButton';  // Import the ToggleModeButton

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>CR Assistant</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>
      <ToggleModeButton />  {/* Add the toggle button here */}
    </header>
  );
};

export default Header;