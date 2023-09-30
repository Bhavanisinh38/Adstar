import React, { useState } from 'react';

// Design Files
import Subloader from './Sections/Subloader';

// Images Common File
import * as Img from './Sections/Img';

function Starportfolio() {
    const [isbodShow, setisbodShow] = useState(true);
    const [bodValue, setbodValue] = useState('');
    const [activePortfolioScreen, setPortfolioActiveScreen] = useState('stardetails');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showVideoPopup, setShowVideoPopup] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

    const handlebodChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue = formatbod(value);
    setisbodShow(value === '');
    setbodValue(formattedValue);
    };

    const formatbod = (value) => {
    if (value.length === 0) return '';
    if (value.length <= 2) return value;
    if (value.length <= 4) return `${value.slice(0, 2)}/${value.slice(2)}`;
    return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
    };

    const handlebodClear = () => {
        setbodValue("");
        setisbodShow(true)
    };

    const handlePortfolioScreenChange = (PortfolioscreenId) => {
        setPortfolioActiveScreen(PortfolioscreenId);
    };
  
    const handleFileSelect = (e) => {
      const files = Array.from(e.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };
  
    const preventDefault = (e) => {
      e.preventDefault();
    };
  
    const playVideo = (url) => {
      setSelectedVideoUrl(url);
      setShowVideoPopup(true);
    };
  
    const closeVideoPopup = () => {
      setSelectedVideoUrl(null);
      setShowVideoPopup(false);
    };
  
    const deleteVideo = (index) => {
      const updatedFiles = [...selectedFiles];
      updatedFiles.splice(index, 1);
      setSelectedFiles(updatedFiles);
    };

    return (
        <>
            <Subloader/>
            <div className="progress-bx">
                <div className="progress-lable">Set up your portfolio</div>
                <div className="progress-percentage">25%</div>
                <div className="progress-bar">
                    <div style={{width:"25%"}} className="progress-bar-inner"></div>
                </div>
            </div>

            <section>
                <div className="container-lg cl-custom">
                    <div className="star-portfolio-main">

                        <div className={`portfolio-screen ${activePortfolioScreen === 'stardetails' ? 'active' : ''}`} id="stardetails">
                            <div className="psc-hed">Add your details</div>
                            <div className="psc-pera">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati nulla at.</div>
                            <form>
                                <div className="profile-details">
                                    <div className="profile-pic-bx">
                                        <label htmlFor="profile-photo" className="profile-pic-lable">
                                            <img className="profile-pic-img" src={Img.userm}  alt="Profile Pic" />
                                            <div className="profile-upload">Upload</div>
                                        </label>
                            
                                        <label title="Edit Pic" className="profile-pic-btn edit-btn" htmlFor="profile-photo"><i className="fa fa-pencil-square-o"></i></label>
                                        <div title="Remove Pic" className="profile-pic-btn delete-btn"><i className="fa fa-trash-o"></i></div>
                                        
                                        <input type="file" name="profile-photo" id="profile-photo" hidden />
                                    </div>
                                    <div className="profile-row row">

                                        <div className="col-12">
                                            <div className="middle-lable">Basic Details</div>
                                        </div>

                                        <div className="col-12">
                                            <div className="signinup-group">
                                                <label className="group__label">Gender</label>
                                                <div className="signinup-group-radio">
                                                    <input type="radio" id="male" name="gender" hidden/>
                                                    <label htmlFor="male">Male</label>
                                                    <input type="radio" id="female" name="gender" hidden/>
                                                    <label htmlFor="female">Female</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Your Name</label>
                                                <input type="text" placeholder="Enter your name"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group sgli">
                                                <label className="group__label">Phone Number</label>
                                                <input type="number" placeholder="Enter phone number" value="8320289867" disabled/>
                                                <span className="group_left_icon">+91</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group error-group">
                                                <label className="group__label">Your email</label>
                                                <input type="email" placeholder="you@example.com"/>
                                                <span className="form-error-msg">You must provide an email</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Date of birth</label>
                                                <input type="text" inputMode="numeric"  value={bodValue}  onChange={handlebodChange} placeholder="DD/MM/YYYY"/>
                                                <span className="clear-input-icon" hidden={isbodShow} onClick={handlebodClear}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                           <div className='middle-lable'>Additional details</div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Name<span>(Instagram Name)</span></label>
                                                <input type="text" placeholder="Enter instagram Name"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group sgri">
                                                <label className="group__label">Your Categorie</label>
                                                <select defaultValue="Selectcategorie">
                                                    <option value="Selectcategorie" disabled>Select categorie</option>
                                                    <option value="Actors">Actors</option>
                                                    <option value="Athletes">Athletes</option>
                                                    <option value="Comedians">Comedians</option>
                                                    <option value="Creators">Creators</option>
                                                    <option value="Musicians">Musicians</option>
                                                    <option value="RealityTV">Reality TV</option>
                                                </select>
                                                <span className="down-icon"></span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Your Designation</label>
                                                <input type="text" placeholder="Enter your Designation"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group sgri">
                                                <label className="group__label">Time</label>
                                                <select defaultValue="SelectTime">
                                                    <option value="SelectTime" disabled>Select Time</option>
                                                    <option value="day1">1 Day</option>
                                                    <option value="day2">2 Day</option>
                                                    <option value="day3">3 Day</option>
                                                    <option value="day4">4 Day</option>
                                                    <option value="day5">5 Day</option>
                                                    <option value="day6">6 Day</option>
                                                    <option value="day7">7 Day</option>
                                                </select>
                                                <span className="down-icon"></span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group sgri">
                                                <label className="group__label">Your State</label>
                                                <select defaultValue="SelectCity">
                                                    <option value="SelectCity" disabled>Select your state</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Goa">Goa</option>
                                                </select>
                                                <span className="down-icon"></span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group sgri">
                                                <label className="group__label">Your City</label>
                                                <select defaultValue="SelectCity">
                                                    <option value="SelectCity" disabled>Select your City</option>
                                                    <option value="Mumbai">Mumbai</option>
                                                    <option value="Ahmedabad">Ahmedabad</option>
                                                    <option value="Goa">Goa</option>
                                                </select>
                                                <span className="down-icon"></span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="signinup-group sgri">
                                                <label className="group__label">Your Description</label>
                                                <textarea placeholder="Description here..."></textarea>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="nextprevious-bx justify-content-end">
                                    {/* <button onClick={() => handlePortfolioScreenChange('registration-screen')} type="button" className="nextprevious-btn" hidden><i className="fa fa-angle-left" aria-hidden="true"></i>Previous</button> */}
                                    <button onClick={() => handlePortfolioScreenChange('socialmedia')} type="button" className="nextprevious-btn">Continue<i className="fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </div>

                        <div className={`portfolio-screen ${activePortfolioScreen === 'socialmedia' ? 'active' : ''}`} id="socialmedia">
                            <div className="psc-hed">Add your social media</div>
                            <div className="psc-pera">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati nulla at.</div>
                            <form>
                                <div className="row mx-0 social-field">
                                    <div className="ps-0 col-10">
                                        <div className="signinup-group sgli">
                                            <label className="group__label">Facebook link</label>
                                            <input type="text" placeholder="Enter facebook link"/>
                                            <span className="group_left_icon"><i className="fa fa-facebook"></i></span>
                                        </div>
                                    </div>
                                    <div className="px-0 col-2">
                                        <div className="signinup-group">
                                            <label className="group__label">Followers</label>
                                            <input type="text" placeholder="Eg:1.5M"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 social-field">
                                    <div className="ps-0 col-10">
                                        <div className="signinup-group sgli">
                                            <label className="group__label">Instagram link</label>
                                            <input type="text" placeholder="Enter Instagram link"/>
                                            <span className="group_left_icon"><i className="fa fa-instagram"></i></span>
                                        </div>
                                    </div>
                                    <div className="px-0 col-2">
                                        <div className="signinup-group">
                                            <label className="group__label">Followers</label>
                                            <input type="text" placeholder="Eg:1.5M"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 social-field">
                                    <div className="ps-0 col-10">
                                        <div className="signinup-group sgli">
                                            <label className="group__label">Youtube link</label>
                                            <input type="text" placeholder="Enter youtube Link"/>
                                            <span className="group_left_icon"><i className="fa fa-youtube-play"></i></span>
                                        </div>
                                    </div>
                                    <div className="px-0 col-2">
                                        <div className="signinup-group">
                                            <label className="group__label">Followers</label>
                                            <input type="text" placeholder="Eg:1.5M"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="nextprevious-bx">
                                    <button onClick={() => handlePortfolioScreenChange('stardetails')} type="button" className="nextprevious-btn"><i className="fa fa-angle-left" aria-hidden="true"></i>Previous</button>
                                    <button onClick={() => handlePortfolioScreenChange('videoreels')} type="button" className="nextprevious-btn">Next<i className="fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </div>

                        <div className={`portfolio-screen ${activePortfolioScreen === 'videoreels' ? 'active' : ''}`} id="videoreels">
                            <div className="psc-hed">Add your reels</div>
                            <div className="psc-pera">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati nulla at.</div>
                            <form action="">

                                <ol className="fileupload-list">
                                {selectedFiles.map((file, index) => (
                                    <li className="fileupload-item" key={index}>
                                    {file.name}
                                    <span className="fileupload-play" onClick={() => playVideo(URL.createObjectURL(file))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <span className="clear-input-icon" onClick={() => deleteVideo(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                    </span>
                                    </li>
                                ))}
                                </ol>

                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="videoupload" className="fileupload" onDrop={handleDrop} onDragOver={preventDefault}>        
                                            <img className="feud-img" src={Img.video} alt="Video Icon" />
                                            <div className="feud-lable">Drag a video or <span>Browse</span></div>
                                        </label>
                                        <input hidden multiple type="file" name="videoupload" id="videoupload" accept="video/*" onChange={handleFileSelect} />
                                    </div>
                                </div>

                                 <div className="nextprevious-bx">
                                    <button onClick={() => handlePortfolioScreenChange('socialmedia')} type="button" className="nextprevious-btn"><i className="fa fa-angle-left" aria-hidden="true"></i>Previous</button>
                                    <button onClick={() => handlePortfolioScreenChange('starprices')} type="button" className="nextprevious-btn">Next<i className="fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </div>

                        <div className={`portfolio-screen ${activePortfolioScreen === 'starprices' ? 'active' : ''}`} id="starprices">
                            <div className="psc-hed">Add video prices</div>
                            <div className="psc-pera">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati nulla at.</div>
                            <form action="">

                                <div className="video-price-list-bx">
                                    <div className="vplb-lable">Reels</div>
                                    <ol className="dataupload-list">
                                        <div className="row">

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">30<span>Day</span></div>
                                                <div className="dui-item">₹5,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">60<span>Day</span></div>
                                                <div className="dui-item">₹10,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">90<span>Day</span></div>
                                                <div className="dui-item">₹15,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">180<span>Day</span></div>
                                                <div className="dui-item">₹30,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">365<span>Day</span></div>
                                                <div className="dui-item">₹60,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                        </div>
                                    </ol>
                                </div>

                                <div className="video-price-list-bx">
                                    <div className="vplb-lable">Shop Visit Reels</div>
                                    <ol className="dataupload-list">
                                        <div className="row">

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">30<span>Day</span></div>
                                                <div className="dui-item">₹5,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">60<span>Day</span></div>
                                                <div className="dui-item">₹10,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">90<span>Day</span></div>
                                                <div className="dui-item">₹15,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">180<span>Day</span></div>
                                                <div className="dui-item">₹30,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">365<span>Day</span></div>
                                                <div className="dui-item">₹60,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                        </div>
                                    </ol>
                                </div>

                                <div className="video-price-list-bx">
                                    <div className="vplb-lable">Outdoor Reels</div>
                                    <ol className="dataupload-list">
                                        <div className="row">

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">30<span>Day</span></div>
                                                <div className="dui-item">₹5,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">60<span>Day</span></div>
                                                <div className="dui-item">₹10,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">90<span>Day</span></div>
                                                <div className="dui-item">₹15,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">180<span>Day</span></div>
                                                <div className="dui-item">₹30,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">365<span>Day</span></div>
                                                <div className="dui-item">₹60,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                        </div>
                                    </ol>
                                </div>

                                <div className="video-price-list-bx">
                                    <div className="vplb-lable">Photo Use</div>
                                    <ol className="dataupload-list">
                                        <div className="row">

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">30<span>Day</span></div>
                                                <div className="dui-item">₹5,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">60<span>Day</span></div>
                                                <div className="dui-item">₹10,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">90<span>Day</span></div>
                                                <div className="dui-item">₹15,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">180<span>Day</span></div>
                                                <div className="dui-item">₹30,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 col-6">
                                                <li className="dataupload-item">
                                                <div className="dui-item">365<span>Day</span></div>
                                                <div className="dui-item">₹60,000<span>Price</span></div>
                                                <span className="clear-input-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                                </li>
                                            </div>

                                        </div>
                                    </ol>
                                </div>

                                <div className="add-more-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                    Add More Price
                                </div>

                                <div className="row mx-0 portfolio-price-video">
                                    
                                    <div className="col-md-4 col-12">
                                        <div className="signinup-group sgri">
                                            <label className="group__label">Video type</label>
                                            <select defaultValue="Selectvideotype">
                                                <option value="Selectvideotype" disabled>Select Categorie</option>
                                                <option value="Reels">Reels</option>
                                                <option value="Shopvisitreels">Shop Visit Reels</option>
                                                <option value="Outdoor">Outdoor</option>
                                                <option value="Photouse">Photo Use</option>
                                            </select>
                                            <span className="down-icon"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="signinup-group sgri">
                                            <label className="group__label">Video Days</label>
                                            <select defaultValue="Selectvideoday">
                                                <option value="Selectvideoday" disabled>Select Days</option>
                                                <option value="Day30">30 Day</option>
                                                <option value="Day60">60 Day</option>
                                                <option value="Day90">90 Day</option>
                                                <option value="Day180">180 Day</option>
                                                <option value="Day365">365 Day</option>
                                            </select>
                                            <span className="down-icon"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="signinup-group sgli">
                                            <label className="group__label">Price</label>
                                            <input type="number" placeholder="Enter Price"/>
                                            <span className="group_left_icon">₹</span>
                                        </div>
                                    </div>
                                    <button disabled type="submit" className="common-submit-btn">Add Price</button>
                                </div>
                                
                                <div className="nextprevious-bx">
                                    <button onClick={() => handlePortfolioScreenChange('videoreels')} type="button" className="nextprevious-btn"><i className="fa fa-angle-left" aria-hidden="true"></i>Previous</button>
                                    <button type="button" className="nextprevious-btn">Continue</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {showVideoPopup && (
                <div className="fileupload-video-popup">

                    <div className="video-wraper-item">
                        <video controls autoPlay>
                            <source src={selectedVideoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    <span onClick={closeVideoPopup} className="close-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                        </svg>
                    </span>

                </div>
            )}
        </>
    );
}

export default Starportfolio;