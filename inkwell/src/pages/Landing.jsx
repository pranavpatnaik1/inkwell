import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../Inkwell.css';

const themes = [
  { bg: 'theme-blue', logo: '/inkwell-blue-new.png' },
  { bg: 'theme-pink', logo: '/inkwell-pink-new.png' },
  { bg: 'theme-green', logo: '/inkwell-green-new.png' }
];

const Landing = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeTheme = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length);
      setIsFading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(changeTheme, 5000);
    return () => clearInterval(interval);
  }, [changeTheme]);

  return (
    <div className={`inkwell-container ${themes[currentTheme].bg}`}>
      <div className="inkwell-text">
        <img 
          src={themes[currentTheme].logo}
          alt="inkwell - the journal that writes with you" 
          className={`logo-image ${isFading ? 'fade' : ''}`}
        />
      </div>
    </div>
  );
};

export default Landing; 