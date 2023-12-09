import React, { useState, useEffect } from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "./components/Loader"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <LoadingSpinner /> : (
        <BrowserRouter>
          <BaseLayout />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
