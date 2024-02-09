// FadeIn.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import the CSS file

const FadeIn = ({ children, offset, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const elementTop = ref.current.getBoundingClientRect().top;

      const triggerPoint = elementTop - window.innerHeight + offset;

      if (scrollY > triggerPoint) {
        setIsVisible(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger initial check
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default FadeIn;