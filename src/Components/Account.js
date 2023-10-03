import React, { useState } from 'react';
import {Link} from "react-router-dom";

//Design Files
import Subloader from './Sections/Subloader';

// Images Common File
import * as Img from './Sections/Img';


function Account() {

    // Screen Tabbing Js
    const [accountScreen, setAccountScreen] = useState('accountprofile');

    const handleScreenChange = (AccountScreenId) => {
        setAccountScreen(AccountScreenId);
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
                        Following
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
                        <div className="amib-768-width">
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


                    {/* --- Requestes Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountrequestes' ? 'active' : ''} `} id="accountrequestes">
                        <div>
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
                                                    <button className="rvi-btn" data-bs-target="#Orderdetail" data-bs-toggle="modal">Order Details</button>
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
                                                    <button className="rvi-btn" data-bs-target="#Orderdetail" data-bs-toggle="modal">Order Details</button>
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
                                                    <button className="rvi-btn" data-bs-target="#Orderdetail" data-bs-toggle="modal">Order Details</button>
                                                    <button className="rvi-btn cansel-order" data-bs-target="#cancelModal" data-bs-toggle="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="empty-div-bx">
                            <img className="empty-img" src={Img.empty} alt="Data is not available" />
                            <div className="empty-heading">Not Found</div>
                            <div className="empty-sub-heading">Browse thousands of stars offering personalized videos.</div>
                            <Link to="/serach" className="empty-btn">Find a celebrity</Link>
                        </div>
                    </div>
                    {/* --- Requestes Bx End --- */}


                    {/* --- My Videos bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountmyvideos' ? 'active' : ''} `} id="accountmyvideos">
                        <div>
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

                                                <div className="rvl-btns-bx">
                                                    <button className="rvl-btn" data-bs-target="#addreviewmodal" data-bs-toggle="modal">Add Review</button>
                                                </div>
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

                                                <div className="rvl-btns-bx">
                                                    <button className="rvl-btn" data-bs-target="#addreviewmodal" data-bs-toggle="modal">Add Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="empty-div-bx">
                            <img className="empty-img" src={Img.empty} alt="Data is not available" />
                            <div className="empty-heading">Not Found</div>
                            <div className="empty-sub-heading">Browse thousands of stars offering personalized videos.</div>
                            <Link to="/serach" className="empty-btn">Find a celebrity</Link>
                        </div>
                    </div>
                    {/* --- My Videos bx End --- */}
                    

                    {/* --- Following Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountfollow' ? 'active' : ''} `} id="accountfollow">
                        <div>
                            <div className="amib-i-header">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
                                Following
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
                                            <button className="fi-btn unfollow">Unfollow</button>
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            <button className="fi-btn unfollow">Unfollow</button>
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            <button className="fi-btn unfollow">Unfollow</button>
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            <button className="fi-btn unfollow">Unfollow</button>
                                        </div>

                                        <div className="follow-item">
                                            <img className="follow-img" src={Img.demo_img1} alt="" />
                                            <div className="follow-data">
                                                <div className="follow-name-lable">Fabrizio Romano</div>
                                                <div className="follow-tag">Fabrizio@gmail.com</div>
                                            </div>
                                            <button className="fi-btn unfollow">Unfollow</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="empty-div-bx">
                            <img className="empty-img" src={Img.empty} alt="Data is not available" />
                            <div className="empty-heading">Not Found</div>
                            <div className="empty-sub-heading">Find and follow your favorite celebrities</div>
                            <Link to="/serach" className="empty-btn">Find a celebrity</Link>
                        </div>
                        
                    </div>
                    {/* --- Following Bx End --- */}


                    {/* --- Gift Card Bx Start --- */}
                    <div className={`amib-inner-item  ${accountScreen === 'accountgiftcards' ? 'active' : ''} `} id="accountgiftcards">
                        <div className="amib-768-width">
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
                        <div>
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
        </>
    );
}

export default Account;