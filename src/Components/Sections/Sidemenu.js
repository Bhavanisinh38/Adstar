// import $ from 'jquery';
import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";

// Images Common File
import * as Img from './Img';

function Sidemenu() {

    const [isActive, setIsActive] = useState(false);

    const handleItemClick = () => {
      setIsActive((prevIsActive) => !prevIsActive);
    };

    const [submenuActive, setSubMenuActive] = useState(false);

    const handleCategoryClick = (e) => {
        e.preventDefault();

        setSubMenuActive(true);

        // $(".smb-main-bx").removeClass("smb-hide");
        // $(".smb-seconde-bx").addClass('d-none');
        // $(".smb-main-bx").addClass("smb-hide");
        // $('#category'+cat).removeClass("d-none");
        // $('#category'+cat).addClass("smb-se-show");
    }

    const handleCategorybackClick = () => {
        setSubMenuActive(false);
    }

    return (
        <>
            <aside className="side-menu-bx">
                <div className="smb-logo-bx">
                    <span className="close-icon trigger-closed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                    </span>
                    <Link to="/" className="smb-logo-link">
                        <img className='logo-img' src={Img.logo_color} alt="adstart" />
                    </Link>
                </div>

                <div className={`smb-menu-bx smb-main-bx ${submenuActive ? 'smb-hide' : ''}`}>
                    <Link to="/staraccount" className="account-left-pic">
                        <img className="alp-img" src={Img.demo_img1} alt="" />
                        <div className="alp-data">
                            <div className="alp-name-lable">Fabrizio Romano</div>
                            <div className="alp-email-lable">Fabrizio@gmail.com</div>
                        </div>
                    </Link>
                    <ul className="pb-0">
                        <li className={`smb-drop-menu ${isActive ? 'active' : ''}`}>
                            <div className="smb-link smb-link-not" onClick={handleItemClick}>Categories<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                            <div className="smb-drop-bx">
                                <div onClick={handleCategoryClick} className="smb-link">Actors<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div onClick={handleCategoryClick} className="smb-link">Athletes<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div onClick={handleCategoryClick} className="smb-link">Comedians<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div onClick={handleCategoryClick} className="smb-link">Creators<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div onClick={handleCategoryClick} className="smb-link">Musicians<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div onClick={handleCategoryClick} className="smb-link">Reality TV<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                            </div>
                        </li>
                        <li><Link to="/about" className="smb-link">How it works</Link></li>
                        <li><Link to="/starlogin" className="smb-link">Join as star</Link></li>
                        <li><Link to="/starportfolio" className="smb-link">Star portfolio</Link></li>
                    </ul>

                    <ul>
                        <div className="smb-nav-lable mt-3">Usefull link</div>
                        <li><NavLink to="/" className="smb-link">Home</NavLink></li>
                        <li><NavLink to="/about" className="smb-link">About</NavLink></li>
                        <li><NavLink to="/faqs" className="smb-link">FAQs</NavLink></li>
                        <li><NavLink to="/privacy" className="smb-link">Privacy</NavLink></li>
                        <li><NavLink to="/terms" className="smb-link">Terms</NavLink></li>
                        <li><NavLink to="/help" className="smb-link">Help</NavLink></li>
                        <li><NavLink to="/sitemap" className="smb-link">Sitemap</NavLink></li>
                    </ul>
                </div>

                <div className={`smb-menu-bx smb-seconde-bx ${submenuActive ? 'smb-se-show' : ''}`}>
                    <div onClick={handleCategorybackClick} className="smb-link-name"><i className="fa fa-angle-left" aria-hidden="true"></i>Athletes</div>
                    <ul>
                        <li><div className="smb-link">Actors</div></li>
                        <li><div className="smb-link">Athletes</div></li>
                        <li><div className="smb-link">Comedians</div></li>
                        <li><div className="smb-link">Creators</div></li>
                        <li><div className="smb-link">Musicians</div></li>
                        <li><div className="smb-link">Reality TV</div></li>
                        <li><div className="smb-link smb-view-all">View All<i className="fa fa-arrow-right" aria-hidden="true"></i></div></li>
                    </ul>
                </div>

                <div className="smb-footer">
                    <Link to="/starlogin" className='smb-login'>Login</Link>
                </div>

            </aside>
            <div className="overlaydiv"></div>
        </>
    );
}

export default Sidemenu;



