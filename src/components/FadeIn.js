// src/components/FadeIn.js
import React, { useEffect, useState } from 'react';
import './FadeIn.scss';

const FadeIn = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay (you can replace this with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  return <div className={`fade-in ${isLoaded ? 'loaded' : ''}`}>{children}</div>;
};

export default FadeIn;
