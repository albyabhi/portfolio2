import React, { useState } from 'react';
import './Appbar.css';

const Appbar = ({ onSectionChange }) => {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleButtonClick = (sectionName) => {
    setSelectedSection(sectionName); // Update the selected section state
    onSectionChange(sectionName); // Call the onSectionChange function passed as a prop
  };

  return (
    <div>
      <header className="appbar">
        <nav className="nav-links">
          <button
            className={`nav-item ${selectedSection === 'about' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('about')}
          >
            About
          </button>
          <button
            className={`nav-item ${selectedSection === 'portfolio' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('portfolio')}
          >
            Portfolio
          </button>

          <button
            className={`nav-item ${selectedSection === 'resume' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('resume')}
          >
            resume
          </button>
          <button
            className={`nav-item ${selectedSection === 'contact' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('contact')}
          >
            Contact
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Appbar;
