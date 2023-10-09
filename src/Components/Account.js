import React, { useState } from 'react';
import {Link, useLocation} from "react-router-dom";

//Design Files
import Subloader from './Sections/Subloader';

// Images Common File
import * as Img from './Sections/Img';


function Account() {
    
    //
    const location = useLocation();

    // Screen Tabbing Js
    const [accountScreen, setAccountScreen] = useState('accountprofile');

    const handleScreenChange = (AccountScreenId) => {
        setAccountScreen(AccountScreenId);
    };


    // Screen section Tabbing Js
    const [amibSection, setAmibSection] = useState('portfolioad');

    const handleAmibSection = (AmibSectionId) => {
        setAmibSection(AmibSectionId);
    };


    // Input Field js
    const [isbodShow, setisbodShow] = useState(true);
    const [bodValue, setbodValue] = useState('');

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


    // Video Upload Js
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showVideoPopup, setShowVideoPopup] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

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

        <section className="account-main-section">

            <aside className="account-left commonscrollbarhide" >

                <div className="account-left-pic">
                    <img className="alp-img" src={Img.demo_img1} alt="" />
                    <div className="alp-data">
                        <div className="alp-name-lable">Fabrizio Romano</div>
                        <div className="alp-email-lable">Fabrizio@gmail.com</div>
                    </div>
                </div>

                <div className="account-menu-bx commonscrollbarhide">

                    <div className={`amb-link ${accountScreen === 'accountprofile' ? 'active' : ''}`} 
                         onClick={() => handleScreenChange('accountprofile')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
                        Profile
                    </div>

                    {location.pathname === '/staraccount' && (
                    <div className={`amb-link ${accountScreen === 'accountportfolio' ? 'active' : ''}`} 
                         onClick={() => handleScreenChange('accountportfolio')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M259.92 262.91L216.4 149.77a9 9 0 00-16.8 0l-43.52 113.14a9 9 0 01-5.17 5.17L37.77 311.6a9 9 0 000 16.8l113.14 43.52a9 9 0 015.17 5.17l43.52 113.14a9 9 0 0016.8 0l43.52-113.14a9 9 0 015.17-5.17l113.14-43.52a9 9 0 000-16.8l-113.14-43.52a9 9 0 01-5.17-5.17zM108 68L88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zM426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                        Portfolio
                    </div>
                    )}

                    <div className={`amb-link ${accountScreen === 'accountrequestes' ? 'active' : ''}`} 
                         onClick={() => handleScreenChange('accountrequestes')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                        Requestes
                    </div>

                    <div className={`amb-link ${accountScreen === 'accountmyvideos' ? 'active' : ''}`} 
                         onClick={() => handleScreenChange('accountmyvideos')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"/></svg>
                        My Videos
                    </div>

                    <div className={`amb-link ${accountScreen === 'accountfollow' ? 'active' : ''}`} 
                         onClick={() => handleScreenChange('accountfollow')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
                        {location.pathname === '/staraccount' ? (
                            <>Followers</>
                        ) : (
                            <>Following</>
                        )}
                    </div>

                    <div className={`amb-link ${accountScreen === 'accountgiftcards' ? 'active' : ''}`} 
                         onClick={() => handleScreenChange('accountgiftcards')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                        Gift Cards
                    </div>

                    <div className={`amb-link ${accountScreen === 'accountnotification' ? 'active' : ''}`} 
                         onClick={() => handleScreenChange('accountnotification')}>
                        <span className="amb-num">1</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                        Notifications
                    </div>

                    <div className="amb-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M378 108a191.41 191.41 0 0170 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0169-148M256 64v192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                        Logout
                    </div>

                </div>
            </aside>

            <div className="account-right">

                <div className='breadcrumb-outer'>
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active'>Account</Link>
                    </div>
                </div>

                <div className="account-menu-item-bx">

                    {/* --- Profile Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountprofile' ? 'active' : ''} `} id="accountprofile">
                        <div className="amib-900-width">
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
                                Profile
                            </div>
                            <div className="amib-item pb-2">
                                <form action="">
                                
                                    <div className="row">

                                        <div className="col-12">
                                            <div className="profile-pic-bx">
                                                <label htmlFor="profile-photo" className="profile-pic-lable">
                                                    <img className="profile-pic-img" src={Img.userm}  alt="Profile Pic" />
                                                    <div className="profile-upload">Upload</div>
                                                </label>
                                    
                                                <label title="Edit Pic" className="profile-pic-btn edit-btn" htmlFor="profile-photo"><i className="fa fa-pencil-square-o"></i></label>
                                                <div title="Remove Pic" className="profile-pic-btn delete-btn"><i className="fa fa-trash-o"></i></div>
                                                
                                                <input type="file" name="profile-photo" id="profile-photo" hidden />
                                            </div>
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
                                                <input type="number" placeholder="Enter phone number" value="8128181082" disabled/>
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

                                    </div>
                                    
                                    <div className="amib-save-btn-bx">
                                        <button type="button" className="common-submit-btn">Save</button>
                                        <button type="button" className="lsb-loader-btn">
                                            <img src={Img.loading} alt="Please wait" />Please wait ....
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* --- Profile Bx End --- */}


                    {/* --- Portfolio Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountportfolio' ? 'active' : ''} `} id="accountportfolio">

                        <div className="amib-inner-tabbx commonscrollbarhide">
                            <div className={`ait-link ${amibSection === 'portfolioad' ? 'active' : ''}`} onClick={() => handleAmibSection('portfolioad')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
                                Additional Details
                            </div>
                            <div className={`ait-link ${amibSection === 'portfoliosm' ? 'active' : ''}`} onClick={() => handleAmibSection('portfoliosm')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                Social media
                            </div>
                            <div className={`ait-link ${amibSection === 'portfoliors' ? 'active' : ''}`} onClick={() => handleAmibSection('portfoliors')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216"/></svg>
                                Reels
                            </div>
                            <div className={`ait-link ${amibSection === 'portfoliovp' ? 'active' : ''}`} onClick={() => handleAmibSection('portfoliovp')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="currentColor" d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z"/><path d="M230 480l262-262a13.81 13.81 0 004-10V80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                Video Price
                            </div>
                        </div>
                        
                        {/* --- Portfolio Additional Details start --- */}
                        <div className={`amib-900-width amib-i-tab ${amibSection === 'portfolioad' ? 'active' : ''}`} id="portfolioad">
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
                                Additional Details
                            </div>
                            <div className="amib-item pb-2">
                                <form action="">
                                
                                    <div className="row">
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
                                                <span className="twl-lable">0/150 word</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="amib-save-btn-bx mt-2">
                                        <button type="button" className="common-submit-btn">Save</button>
                                        <button type="button" className="lsb-loader-btn">
                                            <img src={Img.loading} alt="Please wait" />Please wait ....
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* --- Portfolio Additional Details end --- */}
                        

                        {/* --- Portfolio Social media start --- */}
                        <div className={`amib-900-width amib-i-tab ${amibSection === 'portfoliosm' ? 'active' : ''}`} id="portfoliosm">
                            <div className="amib-i-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                Social media
                            </div>
                            <div className="amib-item pb-2">
                                <form action="">
                                
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
                                        <span className="clear-input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                        </span>
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
                                        <span className="clear-input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                        </span>
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
                                        <span className="clear-input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                        </span>
                                    </div>

                                    <div className="add-btn" data-bs-toggle="modal" data-bs-target="#socialmediamodal">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                        Add your social links
                                    </div>

                                    <div className="add-more-btn" data-bs-toggle="modal" data-bs-target="#socialmediamodal">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                        Add more social link
                                    </div>
          
                                    <div className="amib-save-btn-bx">
                                        <button type="button" className="common-submit-btn">Save</button>
                                        <button type="button" className="lsb-loader-btn">
                                            <img src={Img.loading} alt="Please wait" />Please wait ....
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* --- Portfolio Social media end --- */}


                        {/* --- Portfolio Reels start --- */}
                        <div className={`amib-900-width amib-i-tab ${amibSection === 'portfoliors' ? 'active' : ''}`} id="portfoliors">
                            <div className="amib-i-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216"/></svg>
                                Reels
                            </div>
                            <div className="amib-item pb-2">
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
                                    
                                    <div className="amib-save-btn-bx">
                                        <button type="button" className="common-submit-btn">Save</button>
                                        <button type="button" className="lsb-loader-btn">
                                            <img src={Img.loading} alt="Please wait" />Please wait ....
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* --- Portfolio Reels end --- */}


                        {/* --- Portfolio Video price start --- */}
                        <div className={`amib-900-width amib-i-tab ${amibSection === 'portfoliovp' ? 'active' : ''}`} id="portfoliovp">
                            <div className="amib-i-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="currentColor" d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z"/><path d="M230 480l262-262a13.81 13.81 0 004-10V80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                            Video Price
                            </div>
                            <div className="amib-item pb-2">
                                <form action="">
                                
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
                                    
                                    <div className="amib-save-btn-bx">
                                        <button type="button" className="common-submit-btn">Save</button>
                                        <button type="button" className="lsb-loader-btn">
                                            <img src={Img.loading} alt="Please wait" />Please wait ....
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* --- Portfolio Video price end --- */}


                    </div>
                    {/* --- Portfolio Bx End --- */}


                    {/* --- Requestes Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountrequestes' ? 'active' : ''} `} id="accountrequestes">
                        <div className="amib-992-width">
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                Requestes
                            </div>
                            <div className="amib-item">
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="requestes-video-item">
                                            <div className="rvi-inner">
                                                <div className="rvi-heading">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                                    Happy birthday video for Rahul Patel
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="rvi-order-data">
                                                            Order Id:<br/><span>#B8J1P97</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="rvi-order-data">
                                                            Order Date:<br/><span>2 Oct 2023</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="rvi-order-data">
                                                        Delivery Date:<br/><span>Estimated delivery will be within 7 days from order date.</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="rvi-order-data">Order Status: <span>Pendding</span></div>
                                                        <div className="progress-bx rvi-progress-bx">
                                                            <div className="progress-bar">
                                                                <div style={{width:"100%"}} className="progress-bar-inner"></div>
                                                            </div>
                                                            <div className="progress-step-lable psl-w-3">
                                                                <span className="active">Order placed</span>
                                                                <span className="active">Accepted</span>
                                                                <span className="active">Delivered</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="rvi-btns-bx">
                                                    <button className="rvi-btn" data-bs-target="#Orderdetail" data-bs-toggle="modal">Details</button>
                                                    <button className="rvi-btn" data-bs-target="#Sendvideourl" data-bs-toggle="modal">Send URL</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="requestes-video-item">
                                            <div className="rvi-inner">
                                                <div className="rvi-heading">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                                    Happy birthday video for Rahul Patel
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="rvi-order-data">
                                                            Order Id:<br/><span>#B8J1P97</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="rvi-order-data">
                                                            Order Date:<br/><span>2 Oct 2023</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="rvi-order-data">
                                                        Delivery Date:<br/><span>Estimated delivery will be within 7 days from order date.</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="rvi-order-data">Order Status: <span>Pendding</span></div>
                                                        <div className="progress-bx rvi-progress-bx">
                                                            <div className="progress-bar">
                                                                <div style={{width:"50%"}} className="progress-bar-inner"></div>
                                                            </div>
                                                            <div className="progress-step-lable psl-w-3">
                                                                <span className="active">Order placed</span>
                                                                <span className="active">Accepted</span>
                                                                <span>Delivered</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="rvi-btns-bx">
                                                    <button className="rvi-btn" data-bs-target="#Orderdetail" data-bs-toggle="modal">Details</button>
                                                    <button className="rvi-btn" data-bs-target="#Sendvideourl" data-bs-toggle="modal">Send URL</button>
                                                    <button className="rvi-btn cansel-order" data-bs-target="#cancelModal" data-bs-toggle="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="requestes-video-item">
                                            <div className="rvi-inner">
                                                <div className="rvi-heading">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                                    Happy birthday video for Rahul Patel
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="rvi-order-data">
                                                            Order Id:<br/><span>#B8J1P97</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="rvi-order-data">
                                                            Order Date:<br/><span>2 Oct 2023</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="rvi-order-data">
                                                        Delivery Date:<br/><span>Estimated delivery will be within 7 days from order date.</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="rvi-order-data">Order Status: <span>Pendding</span></div>
                                                        <div className="progress-bx rvi-progress-bx">
                                                            <div className="progress-bar">
                                                                <div style={{width:"0%"}} className="progress-bar-inner"></div>
                                                            </div>
                                                            <div className="progress-step-lable psl-w-3">
                                                                <span className="active">Order placed</span>
                                                                <span>Accepted</span>
                                                                <span>Delivered</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="rvi-btns-bx">
                                                    <button className="rvi-btn" data-bs-target="#Orderdetail" data-bs-toggle="modal">Details</button>
                                                    <button className="rvi-btn approve-order">Accepted</button>
                                                    <button className="rvi-btn cansel-order" data-bs-target="#cancelModal" data-bs-toggle="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {location.pathname === '/staraccount' ? (
                            <div className="empty-div-bx">
                                <img className="empty-img" src={Img.empty} alt="Data is not available" />
                                <div className="empty-heading">Not Found</div>
                                <div className="empty-sub-heading">Request not available</div>
                            </div>
                        ) : (
                            <div className="empty-div-bx">
                                <img className="empty-img" src={Img.empty} alt="Data is not available" />
                                <div className="empty-heading">Not Found</div>
                                <div className="empty-sub-heading">Browse thousands of stars offering personalized videos.</div>
                                <Link to="/search" className="empty-btn">Find a celebrity</Link>
                            </div>
                        )}
                    </div>
                    {/* --- Requestes Bx End --- */}


                    {/* --- My Videos bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountmyvideos' ? 'active' : ''} `} id="accountmyvideos">
                        <div className="amib-992-width">
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"/></svg>
                                My Videos
                            </div>
                            <div className="amib-item">
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="requestes-video-link">
                                            <div className="rvl-inner">
                                                <div className="rvl-heading">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                                    Happy birthday video for Rahul Patel
                                                </div>

                                                <div className="rvl-link">
                                                    http://celebritybooking.pm/account
                                                    <span className="rvl-copy-link" title="Copy Link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                    </span>
                                                </div>

                                                {location.pathname === '/staraccount' ? (
                                                    <></>
                                                ) : (
                                                    <div className="rvl-btns-bx">
                                                        <button className="rvl-btn" data-bs-target="#addreviewmodal" data-bs-toggle="modal">Add Review</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="requestes-video-link">
                                            <div className="rvl-inner">
                                                <div className="rvl-heading">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                                    Happy birthday video for Rahul Patel
                                                </div>

                                                <div className="rvl-link">
                                                    http://celebritybooking.pm/account
                                                    <span className="rvl-copy-link" title="Copy Link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                    </span>
                                                </div>

                                                
                                                {location.pathname === '/staraccount' ? (
                                                    <></>
                                                ) : (
                                                    <div className="rvl-btns-bx">
                                                        <button className="rvl-btn" data-bs-target="#addreviewmodal" data-bs-toggle="modal">Add Review</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {location.pathname === '/staraccount' ? (
                            <div className="empty-div-bx">
                                <img className="empty-img" src={Img.empty} alt="Data is not available" />
                                <div className="empty-heading">Not Found</div>
                                <div className="empty-sub-heading">Links not available</div>
                            </div>
                        ) : (
                            <div className="empty-div-bx">
                                <img className="empty-img" src={Img.empty} alt="Data is not available" />
                                <div className="empty-heading">Not Found</div>
                                <div className="empty-sub-heading">Browse thousands of stars offering personalized videos.</div>
                                <Link to="/search" className="empty-btn">Find a celebrity</Link>
                            </div>
                        )}
                    </div>
                    {/* --- My Videos bx End --- */}
                    

                    {/* --- Following Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountfollow' ? 'active' : ''} `} id="accountfollow">
                        <div className="amib-992-width">
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                {location.pathname === '/staraccount' ? (
                                    <>Followers</>
                                ) : (
                                    <>Following</>
                                )}
                            </div>
                            <div className="amib-item">
                                <form action="">
                                    <div className="follow-list-bx">

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            {location.pathname === '/staraccount' ? (
                                                <></>
                                            ) : (
                                                <button className="fi-btn unfollow">Unfollow</button>
                                            )}
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            {location.pathname === '/staraccount' ? (
                                                <></>
                                            ) : (
                                                <button className="fi-btn unfollow">Unfollow</button>
                                            )}
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            {location.pathname === '/staraccount' ? (
                                                <></>
                                            ) : (
                                                <button className="fi-btn unfollow">Unfollow</button>
                                            )}
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            {location.pathname === '/staraccount' ? (
                                                <></>
                                            ) : (
                                                <button className="fi-btn unfollow">Unfollow</button>
                                            )}
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            {location.pathname === '/staraccount' ? (
                                                <></>
                                            ) : (
                                                <button className="fi-btn unfollow">Unfollow</button>
                                            )}
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            {location.pathname === '/staraccount' ? (
                                                <></>
                                            ) : (
                                                <button className="fi-btn unfollow">Unfollow</button>
                                            )}
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>


                        {location.pathname === '/staraccount' ? (
                            <div className="empty-div-bx">
                                <img className="empty-img" src={Img.empty} alt="Data is not available" />
                                <div className="empty-heading">Not Found</div>
                                <div className="empty-sub-heading">Request not available</div>
                            </div>
                        ) : (
                            <div className="empty-div-bx">
                                <img className="empty-img" src={Img.empty} alt="Data is not available" />
                                <div className="empty-heading">Not Found</div>
                                <div className="empty-sub-heading">Find and follow your favorite celebrities</div>
                                <Link to="/search" className="empty-btn">Find a celebrity</Link>
                            </div>
                        )}                        
                    </div>
                    {/* --- Following Bx End --- */}


                    {/* --- Gift Card Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountgiftcards' ? 'active' : ''} `} id="accountgiftcards">
                        <div className="amib-900-width">
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                Gift Card
                            </div>
                            <div className="amib-item pb-2">
                                <form action="">
                                
                                    <div className="row">

                                        <div className="col-12">
                                            <div className="signinup-group">
                                                <label className="group__label">Select gift Price</label>
                                                <div className="signinup-group-radio">
                                                    <input type="radio" id="g25p" name="giftprice" hidden/>
                                                    <label htmlFor="g25p">₹25</label>
                                                    <input type="radio" id="g50p" name="giftprice" hidden/>
                                                    <label htmlFor="g50p">₹50</label>
                                                    <input type="radio" id="g100p" name="giftprice" hidden/>
                                                    <label htmlFor="g100p">₹100</label>
                                                    <input type="radio" id="g150p" name="giftprice" hidden/>
                                                    <label htmlFor="g150p">₹150</label>
                                                    <input type="radio" id="gcustomp" name="giftprice" hidden/>
                                                    <label htmlFor="gcustomp">Custom</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group sgli">
                                                <label className="group__label">Price</label>
                                                <input type="number" placeholder="Enter Price"/>
                                                <span className="group_left_icon">₹</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6"></div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Recipient name</label>
                                                <input type="text" placeholder="Enter your name"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group error-group">
                                                <label className="group__label">Recipient email</label>
                                                <input type="email" placeholder="you@example.com"/>
                                                <span className="form-error-msg">You must provide an email</span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="signinup-group">
                                                <label className="group__label">Gift message</label>
                                                <textarea placeholder="Gift message here..."></textarea>
                                                <span className="twl-lable">0/150 word</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Your Name</label>
                                                <input type="text" placeholder="Enter your name"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Your email</label>
                                                <input type="email" placeholder="you@example.com"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="signinup-group">
                                                <label className="group__label">Send Date</label>
                                                <input type="text" inputMode="numeric"  value={bodValue}  onChange={handlebodChange} placeholder="DD/MM/YYYY"/>
                                                <span className="clear-input-icon" hidden={isbodShow} onClick={handlebodClear}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <button type="button" className="common-submit-btn" disabled>Continue to payment</button>
                                    <button type="button" className="lsb-loader-btn">
                                        <img src={Img.loading} alt="Please wait" />Please wait ....
                                    </button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* --- Gift Card Bx End --- */}
                    

                    {/* --- Notification Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountnotification' ? 'active' : ''} `} id="accountnotification">
                        <div className="amib-992-width">
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                Notifications
                            </div>
                            <div className="amib-item">
                                <form action="">
                                    <div className="notification-list-bx">
                                        <div className="nlb-outer">
                                            <div className="nlb-outer-label">To day</div>

                                            <div className="nlb-item nlb-new">
                                                <div className="nlb-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                </div>
                                                <div className="nlb-data">
                                                    <div className="nlb-lable">Share with loved ones</div>
                                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                                </div>
                                            </div>

                                            <div className="nlb-item nlb-new">
                                                <div className="nlb-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                </div>
                                                <div className="nlb-data">
                                                    <div className="nlb-lable">Share with loved ones</div>
                                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nlb-outer">
                                            <div className="nlb-outer-label">Yesterday</div>

                                            <div className="nlb-item">
                                                <div className="nlb-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                </div>
                                                <div className="nlb-data">
                                                    <div className="nlb-lable">Share with loved ones</div>
                                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                                </div>
                                            </div>

                                            <div className="nlb-item">
                                                <div className="nlb-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                                                </div>
                                                <div className="nlb-data">
                                                    <div className="nlb-lable">Share with loved ones</div>
                                                    <div className="nlb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi adipisci id esse obcaecati sequi, hic quisquam corrupti aperiam expedita, dignissimos, ducimus iste dolor libero in commodi? Hic est sequi fugiat recusandae ad?</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="empty-div-bx">
                            <img className="empty-img" src={Img.empty} alt="Data is not available" />
                            <div className="empty-heading">Not Found</div>
                            <div className="empty-sub-heading">There are no new notifications</div>
                        </div>
                    </div>
                    {/* --- Notification Bx End --- */}

                </div>
            </div>

        </section>

        {/* Cancel & Unfollow Popup */}
        <div className="modal fade zoom" id="cancelModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content custom-content">
                    <div className="custom-modal-header">
                        <div className="cmh-lable">Are You Sure?</div>
                        <div className="cmh-sub-lable">Do you want cancel this appointment?</div>

                        <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="custom-modal-data">
                        <div className="custom-modal-btn text-center">
                            <button className="cmb-btn yes" data-bs-dismiss="modal" aria-label="Close">Yes Cancel it!</button>        
                            <button className="cmb-btn no" data-bs-dismiss="modal" aria-label="Close">No</button>  
                        </div>
                        <div className="custom-modal-nots">
                            <span>Please note:</span>
                            <p>The Cancellation request will be taken & blocked amount will automatically be added to your balance in 3-4 working days after verification by concerned team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Send video URL Popup */}
        <div className="modal fade zoom" id="Sendvideourl" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content custom-content">
                    <div className="custom-modal-header">
                        <div className="cmh-lable">Send Video Link</div>

                        <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="custom-modal-data">
                        <form action="" className="px-4 pb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="signinup-group">
                                        <label className="group__label">Subject</label>
                                        <input type="text" placeholder="Enter subject here..."/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="signinup-group">
                                        <label className="group__label">Video Link</label>
                                        <input type="text" placeholder="Add link here..."/>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="common-submit-btn" disabled>Submit</button>
                            <button type="button" className="lsb-loader-btn">
                                <img src={Img.loading} alt="Please wait" />Please wait ....
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Order detail Popup */}
        <div className="modal fade zoom" id="Orderdetail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content custom-content">
                    <div className="custom-modal-header">
                        <div className="cmh-lable">Order Detail</div>
                        <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="custom-modal-data">

                        <div className="row mx-0 px-2 pt-1">

                            <div className='col-12 mb-2'>
                                <div className="orderdetail-data">Transaction Id<br/><span>#B8J1P97B8J1P97</span></div>
                            </div>

                            <div className='col-md-6 col-sm-6 mb-2'>
                                <div className="orderdetail-data">Orderer's Name<br/><span>Rahul Patel</span></div>
                            </div>

                            <div className='col-md-6 col-sm-6 mb-2'>
                                <div className="orderdetail-data">Video from (Name)<br/><span>Rahul Patel</span></div>
                            </div>

                            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                                <div className="orderdetail-data">Occasion<br/><span>Birthday</span></div>
                            </div>

                            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                                <div className="orderdetail-data">Order Id<br/><span>#B8J1P97</span></div>
                            </div>

                            <div className='col-md-4 col-sm-6 col-6 mb-2'>
                                <div className="orderdetail-data">Order Date<br/><span>2 Oct 2023</span></div>
                            </div>

                            <div className="col-12">
                                <div className="summary-bx mb-4 mt-2 border-top-0">
                                    <div className="summary-heading">
                                        Order Summary
                                    </div>
                                    <div className="summary-data-bx">
                                        <div className="summary-data-item">
                                            <div className="sdi-inner">
                                                <div>Reels</div>
                                                <div><span>(180 Day)</span>₹100000</div>
                                            </div>
                                        </div>
                                        <div className="summary-data-item">
                                            <div className="sdi-inner">
                                                <div>Service fee</div>
                                                <div>₹100000</div>
                                            </div>
                                            <div className="sdi-inner">
                                                <div>Sales tax</div>
                                                <div>Free</div>
                                            </div>
                                        </div>
                                        <div className="summary-data-item">
                                            <div className="sdi-inner sdi-total">
                                                <div>Total</div>
                                                <div>₹300000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                
                    </div>
                </div>
            </div>
        </div>

        {/* Video play & preview popup */}
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

export default Account;