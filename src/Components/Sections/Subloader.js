import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Subloader() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className={`sub-loader ${loading ? 'hide' : ''}`}>
      <span className="sub-inner"></span>
    </div>
  );
}

export default Subloader;