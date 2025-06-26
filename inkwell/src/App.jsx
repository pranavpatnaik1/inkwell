import React, { useState, useEffect } from 'react';
import './Inkwell.css';

const themes = [
  { bg: 'theme-blue', logo: '/inkwell-blue-new.png' },
  { bg: 'theme-pink', logo: '/inkwell-pink-new.png' },
  { bg: 'theme-green', logo: '/inkwell-green-new.png' }
];

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      
      setTimeout(() => {
        setCurrentTheme((prev) => (prev + 1) % themes.length);
        setIsFading(false);
      }, 500);
      
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

export default App;
