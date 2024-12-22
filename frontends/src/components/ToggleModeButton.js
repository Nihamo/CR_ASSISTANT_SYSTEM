// ToggleModeButton.js
import React, { useState } from "react";
import '../styles/ToggleModeButton.css';

const ToggleModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <button className="toggle-mode-btn" onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleModeButton;