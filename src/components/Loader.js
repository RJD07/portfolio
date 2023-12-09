import React from 'react';
import './Loader.scss';

const LoadingSpinner = () => {
  return (
    <div className="container">
      <div className="dash uno"></div>
      <div className="dash dos"></div>
      <div className="dash tres"></div>
      <div className="dash cuatro"></div>
    </div>
  );
};

export default LoadingSpinner;