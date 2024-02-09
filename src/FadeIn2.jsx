// FadeIn.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const FadeIn2 = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in-component ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default FadeIn2;
