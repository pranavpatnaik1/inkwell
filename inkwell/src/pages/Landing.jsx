import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Inkwell.css';

const themes = [
  { bg: 'theme-blue', logo: '/inkwell-blue-new.png' },
  { bg: 'theme-pink', logo: '/inkwell-pink-new.png' },
  { bg: 'theme-green', logo: '/inkwell-green-new.png' }
];

const Landing = () => {
  // Randomly select a theme index on component mount
  const [currentTheme] = useState(() => Math.floor(Math.random() * themes.length));

  return (
    <div className={`inkwell-container ${themes[currentTheme].bg}`}>
      <div className="inkwell-text">
        <img 
          src={themes[currentTheme].logo}
          alt="inkwell - the journal that writes with you" 
          className="logo-image"
        />
      </div>
    </div>
  );
};

export default Landing; 