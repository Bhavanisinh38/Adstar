import React, { useState, useEffect } from 'react';

// Images Common File
import * as Img from './Img';

function Loader() {
    const [addDeactivate, setDeactivateClass] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setDeactivateClass(true);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);
    
    return (
        <div className={`web-preloader ${addDeactivate ? 'deactivate' : ''}`}>
            <span className="web-inner">
                <img src={Img.icon_white} alt="adstar Icon" />
            </span>
        </div>
    );
}

export default Loader;