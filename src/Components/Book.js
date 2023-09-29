import React, { useState } from 'react';

// Images Common File
import * as Img from './Sections/Img';

function Book() {

    const [isSelectionsTab, setIsSelectionsTab] = useState("d-none");
    const [activeSelection, setActiveSelection] = useState("myself");
    const [isMapPopupVisible, setMapPopupVisible] = useState(false);

    const handleSelectionsshow = () => {
        setIsSelectionsTab("");
        setActiveSelection("someone_else");
    }

    const handleSelectionshide = () => {
        setIsSelectionsTab("d-none");
        setActiveSelection("myself");
    }

    const handleMapCall = () => {
        setMapPopupVisible(true);
    };

    const handleMapClose = () => {
        setMapPopupVisible(false);
    };

    return (
        <>
            <div className='breadcrumb-outer'>
                <div className='container-lg cl-custom'>   
                    <div className='breadcrumb-bx bctwo'>
                        <div className="breadcrumb-back" title="Back">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" color="#F2F1F3" width="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
                        </div>
                        <img src={Img.demo_img1} alt="Celebrity Name" />
                        <div>
                            <div className="bc-lable">New request for Fabrizio Romano</div>
                            <div className="bc-sub-lable">Football / Soccer Journalist</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container-lg cl-custom">
                    <div className="booking-main-div">
                        <div className="bmd-left">

                            <form>
                                <div className="px-md-3">
                                    <div className="bmd-hed">Who's this video for?</div>

                                    <div className="row">
                                        <div className="col-6 pe-1">
                                            <div className={`selections-btn ${activeSelection === "someone_else" ? "active" : ""}`} onClick={handleSelectionsshow}>Someone else</div>
                                        </div>
                                        <div className="col-6 ps-1">
                                            <div className={`selections-btn ${activeSelection === "myself" ? "active" : ""}`} onClick={handleSelectionshide}>Myself</div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-sm-12">
                                            <div className="signinup-group">
                                                <label className="group__label">To (Name): </label>
                                                <input type="text" placeholder="Enter your name"/>
                                            </div>
                                        </div>

                                        <div className="col-12 mt-2">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio">
                                                    <input type="radio" id="To_He_Him" name="Tohsth" hidden/>
                                                    <label htmlFor="To_He_Him">He/Him</label>
                                                    
                                                    <input type="radio" id="To_She_Her" name="Tohsth" hidden/>
                                                    <label htmlFor="To_She_Her">She/Her</label>

                                                    <input type="radio" id="To_They_Them" name="Tohsth" hidden/>
                                                    <label htmlFor="To_They_Them">They/Them</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>  
                                </div>

                                <div className={`sectiongap mt-4 ${isSelectionsTab}`}></div>

                                <div className={`px-md-3 mt-4 ${isSelectionsTab}`}>
                                    <div className="bmd-hed">Who's this video from?</div>

                                    <div className="row">

                                        <div className="col-sm-12">
                                            <div className="signinup-group">
                                                <label className="group__label">From (Name): </label>
                                                <input type="text" placeholder="Enter your name"/>
                                            </div>
                                        </div>

                                        <div className="col-12 mt-2">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio">
                                                    <input type="radio" id="From_He_Him" name="Formhsth" hidden/>
                                                    <label htmlFor="From_He_Him">He/Him</label>
                                                    
                                                    <input type="radio" id="From_She_Her" name="Formhsth" hidden/>
                                                    <label htmlFor="From_She_Her">She/Her</label>

                                                    <input type="radio" id="From_They_Them" name="Formhsth" hidden/>
                                                    <label htmlFor="From_They_Them">They/Them</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="sectiongap mt-4"></div>

                                <div className="px-md-3 mt-4">
                                    <div className="bmd-hed">What's the occasion?</div>

                                    <div className="row occasion-row">

                                        <div className="col-sm-3 col-4">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio sgr-occasion">
                                                    <input type="radio" id="occasion1" name="occasion" hidden/>
                                                    <label htmlFor="occasion1">
                                                        <div className="occasion-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                                                        </div>
                                                        Birthday
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 col-4">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio sgr-occasion">
                                                    <input type="radio" id="occasion2" name="occasion" hidden/>
                                                    <label htmlFor="occasion2"> 
                                                        <div className="occasion-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                        </div>
                                                        Question
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 col-4">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio sgr-occasion">
                                                    <input type="radio" id="occasion3" name="occasion" hidden/>
                                                    <label htmlFor="occasion3">
                                                        <div className="occasion-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                                        </div>
                                                        Advice
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 col-4">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio sgr-occasion">
                                                    <input type="radio" id="occasion4" name="occasion" hidden/>
                                                    <label htmlFor="occasion4"> 
                                                        <div className="occasion-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                                        </div>
                                                        Pep Talk
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 col-4">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio sgr-occasion">
                                                    <input type="radio" id="occasion5" name="occasion" hidden/>
                                                    <label htmlFor="occasion5"> 
                                                        <div className="occasion-icon">
                                                            <svg  fill="currentColor" stroke="none"  xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" version="1.1"viewBox="0 0 1052000 1266000"><path d="M294000 1126000c-455000,-240000 102000,-670000 128000,-974000 187000,125000 185000,289000 231000,384000 96000,-25000 105000,-55000 128000,-154000 113000,83000 280000,514000 -26000,718000 -4000,-166000 -116000,-436000 -256000,-436000 -27000,0 -205000,189000 -205000,462000zm-282000 -308000c0,244000 110000,436000 359000,436000 121000,0 -36000,-378000 179000,-436000 47000,177000 77000,0 77000,411000 285000,66000 551000,-373000 334000,-796000l-166000 -218000c-3000,-3000 -10000,-8000 -14000,-12000 -110000,58000 -47000,-7000 -77000,77000 -128000,-94000 -357000,-505000 -412000,-79000 -25000,191000 -280000,344000 -280000,617000z"/></svg>
                                                        </div>
                                                        Roast
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 col-4">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio sgr-occasion">
                                                    <input type="radio" id="occasion6" name="occasion" hidden/>
                                                    <label htmlFor="occasion6"> 
                                                        <div className="occasion-icon">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2194_913)"><path d="M3.3905 14.8142C2.7975 13.1349 1.71855 8.66128 5.41409 5.16021C9.10973 1.65905 13.5185 2.97831 15.1632 3.66119C15.8412 3.9427 16.3629 4.49341 16.6074 5.18562C17.2005 6.86478 18.2797 11.3384 14.5841 14.8395C10.8885 18.3406 6.47974 17.0216 4.83492 16.3388C4.1568 16.0573 3.63498 15.5065 3.3905 14.8142Z" stroke="#F2F1F3" strokeWidth="1.5"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.8115 10.5787C12.0964 10.8794 12.5711 10.8923 12.8718 10.6074C13.1725 10.3225 13.1853 9.84782 12.9004 9.54712L12.2699 8.88158L12.9353 8.25127C13.2359 7.9664 13.2488 7.4917 12.9639 7.191C12.679 6.8903 12.2043 6.87747 11.9036 7.16235L11.2383 7.79266L10.6079 7.12729C10.3231 6.82659 9.84837 6.81376 9.54768 7.09864C9.24698 7.38351 9.23415 7.85821 9.51902 8.15891L10.1494 8.82428L8.81846 10.0852L8.18811 9.41979C7.90323 9.11909 7.42853 9.10627 7.12784 9.39114C6.82714 9.67602 6.81431 10.1507 7.09918 10.4514L7.72954 11.1168L7.06396 11.7473C6.76327 12.0322 6.75044 12.5069 7.03531 12.8076C7.32019 13.1083 7.79489 13.1211 8.09559 12.8363L8.76116 12.2057L9.39168 12.8712C9.67655 13.1719 10.1513 13.1848 10.4519 12.8999C10.7526 12.615 10.7655 12.1403 10.4806 11.8396L9.85008 11.1741L11.181 9.9132L11.8115 10.5787Z" fill="#F2F1F3"></path></g><defs><clipPath id="clip0_2194_913"><rect width="20" height="20" fill="currentColor"></rect></clipPath></defs></svg>
                                                        </div>
                                                        Fantasy Football
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 col-4">
                                            <div className="signinup-group">
                                                <div className="signinup-group-radio sgr-occasion">
                                                    <input type="radio" id="occasion7" name="occasion" hidden/>
                                                    <label htmlFor="occasion7"> 
                                                        <div className="occasion-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                        </div>
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="sectiongap mt-4"></div>

                                <div className="px-md-3 mt-4">
                                    <div className="bmd-hed">Instructions for Fabrizio Romano</div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="signinup-group sg-150-textarea">
                                                <label className="group__label">Your Description</label>
                                                <textarea placeholder="I've been really discouraged with my fitness goals after the pandemic. I need some motivation to get back on my workout routine and actually stick to it. Tell me any tricks that have worked for you!"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-12 mt-3 mb-4">
                                        <div className="signinup-group">
                                            <label className="group__label">Photo or video (optional)</label>
                                            <label htmlFor="videoupload" className="fileupload" >        
                                                <img className="feud-img" src={Img.video} alt="Video Icon" />
                                                <div className="feud-lable">Drag a photo, video or <span>Browse</span></div>
                                            </label>
                                            {/* <input hidden multiple type="file" name="videoupload" id="videoupload" accept="video/*" onChange={handleFileSelect} /> */}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="signinup-group-checkmark">
                                            <input className="d-none" type="checkbox" id="checkmark"/>
                                            <label className="checkmark-lable" htmlFor="checkmark"><span className="checkmark-icon"></span>Hide this video from Fabrizio Romano's profile</label>
                                        </div>
                                    </div>

                                </div>

                                <button type="button" className="common-submit-btn" disabled>Continue</button>

                                <button type="button" className="lsb-loader-btn">
                                    <img src={Img.loading} alt="Please wait" />Please wait ....
                                </button>

                            </form>

                        </div>
                        <aside className="bmd-right">

                            <div className={`map-line-bx ${isMapPopupVisible ? 'active' : ''}`}>
                                { isMapPopupVisible ? (
                                    <span className="close-icon" onClick={handleMapClose}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                                        </svg>
                                    </span>
                                ) : (
                                    <span></span>
                                ) }

								<div className="map-line-item checked">
									<span className="map-lable">Pick a celebrity</span>
									<div className="map-text">Browse thousands of stars offering personalized videos.</div>
								</div>

								<div className="map-line-item current">
									<span className="map-lable">Write your request</span>
									<div className="map-text">The more details you give, the more personalized your video will be.</div>
								</div>

								<div className="map-line-item">
									<span className="map-lable">Review and pay</span>
									<div className="map-text">Choose your delivery speed and enter your payment information.</div>
								</div>

					        </div>

                        </aside>
                    </div>
                </div>
            </div>

            <div className="map-line-btn" onClick={handleMapCall}>?</div>
            
            <div className={`book-overlay ${isMapPopupVisible ? 'active' : ''} `} onClick={handleMapClose}></div>
        </>
    );
}

export default Book;