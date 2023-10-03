import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from './Img';

function Sidemenu() {

    const [isActive, setIsActive] = useState(false);

    const handleItemClick = () => {
      setIsActive((prevIsActive) => !prevIsActive);
    };

    useEffect(() => {
        $(".smb-drop-bx > .smb-link").on("click", function () {
            $(".smb-main-bx").addClass("smb-hide");
            $(".smb-seconde-bx").addClass("smb-se-show");
        });
        $(".smb-link-name").on("click", function () {
            $(".smb-main-bx").removeClass("smb-hide");
            $(".smb-seconde-bx").removeClass("smb-se-show");
        });
    });
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

                <div className="smb-menu-bx smb-main-bx">
                    <Link to="/account" className="account-left-pic">
                        <img className="alp-img" src={Img.demo_img1} alt="" />
                        <div className="alp-data">
                            <div className="alp-name-lable">Fabrizio Romano</div>
                            <div className="alp-email-lable">Fabrizio@gmail.com</div>
                        </div>
                    </Link>
                    <ul>
                        <li className={`smb-drop-menu ${isActive ? 'active' : ''}`}>
                            <div className="smb-link smb-link-not" onClick={handleItemClick}>Categories<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                            <div className="smb-drop-bx">
                                <div className="smb-link">Actors<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div className="smb-link">Athletes<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div className="smb-link">Comedians<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div className="smb-link">Creators<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div className="smb-link">Musicians<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                                <div className="smb-link">Reality TV<i className="fa fa-angle-right" aria-hidden="true"></i></div>
                            </div>
                        </li>
                        <li><div className="smb-link">For business</div></li>
                        <li><Link to="/starportfolio" className="smb-link">How it works</Link></li>
                        <li><Link to="/starlogin" className="smb-link">Join as talent</Link></li>
                    </ul>
                </div>

                <div className="smb-menu-bx smb-seconde-bx">
                    <div className="smb-link-name"><i className="fa fa-angle-left" aria-hidden="true"></i>Athletes</div>
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
                    <Link to="/login" className='smb-login'>Login</Link>
                </div>

            </aside>
            <div className="overlaydiv"></div>
        </>
    );
}

export default Sidemenu;



