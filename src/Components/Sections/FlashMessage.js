import React, { useEffect, useState } from 'react';

// Images Common File
import * as Img from './Img';

function FlashMessage() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        let popupTimer;

        if (isPopupVisible) {
            // Start a timer to hide the popup after 5 seconds
            popupTimer = setTimeout(() => {
                setPopupVisible(false);
            }, 5000);
        }

        return () => {
            // Clear the timer when the component unmounts or when isPopupVisible changes
            clearTimeout(popupTimer);
        };
    }, [isPopupVisible]);

    const handlefmp = () => {
        setPopupVisible(true);
    };

    const handlefmpclose = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <div className="cmp-btn" onClick={handlefmp}><i className="fa fa-commenting-o" aria-hidden="true"></i></div>

            <div className={`flash-message sf-msg ${isPopupVisible ? 'fmp-message' : ''}`}>
                <div className="flash-message-inner">
                    <span className="msg-close" onClick={handlefmpclose}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                        </svg>
                    </span>
                    <img className="flash-img" src={Img.success} alt="cdf" />
                    <div className="flash-text">
                        <h6>Success</h6>
                        <p id="sf-msg-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa nostrum aperiam.</p>
                    </div>
                </div>
            </div>

            {/* <div className={`flash-message ef-msg ${isPopupVisible ? 'fmp-message' : ''}`}>
                <div className="flash-message-inner">
                    <span className="msg-close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                        </svg>
                    </span>
                    <img className="flash-img" src={Img.error} alt="cdf" />
                    <div className="flash-text">
                        <h6>Error</h6>
                        <p id="ef-msg-error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa nostrum aperiam.</p>
                    </div>
                </div>
            </div> */}

            <div className={` flash-message-popup ${isPopupVisible ? 'fmp-active' : ''} `} onClick={handlefmpclose}></div>
        </>
    );
}

export default FlashMessage;
