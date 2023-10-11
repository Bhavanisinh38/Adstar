import $ from 'jquery';
import React, { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from './Img';

// Design Files
import Sidemenu from './Sidemenu';

function Header() {

    // --- Header Search placeholder Text js Start --- //
      const words = [
        'Search for wwe...',
        'Search for designer...',
        'Search for driver...',
        'Search for developer...',
        'Search for poet...',
        'Search for teacher...',
        'Search for happy person...',
      ];
      const [placeholderText, setplaceholderText] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setplaceholderText((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
      }, [words.length]);
    // --- Header Search placeholder Text End --- //


    // ---  --- //
    const [headerSticky, setheaderSticky] = useState('');
    const [searchValue, setsearchValue] = useState('');
    const [isShow, setisShow] = useState(true);
    const [isSearchActive, setisSearchActive] = useState(false);
    const searchBoxRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
          // Click occurred outside of the search box
          setisSearchActive(false);
          handleClearSearch();
        }
      };
  
      // Add a click event listener to the document
      document.addEventListener('mousedown', handleClickOutside);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleSearchActive = () => {
      setisSearchActive(true);
    };
  
    const handleSearchClose = () => {
      setisSearchActive(false);
      handleClearSearch();
    };
  
    const handleChangeSearch = (e) => {
      const newText = e.target.value;
      setsearchValue(newText);
      setisShow(newText === '');
    };
  
    const handleClearSearch = () => {
      setsearchValue('');
      setisShow(true);
    };
    // --- --- //

    // --- Header Js Start --- //
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    const delta = 15;
  
    useEffect(() => {
      function handleScroll() {
        const st = window.scrollY;
  
        if (Math.abs(lastScrollTop - st) <= delta) return;
  
        if (st > lastScrollTop && lastScrollTop > 0) {
          // Downscroll code
          // setHeaderTop(-110);
          setHeaderTop(0);
          setheaderSticky("active");
        } else {
          // Upscroll code
          setHeaderTop(0);
          setheaderSticky("active");
        }
        setLastScrollTop(st);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollTop]);
    // --- Header Js End --- //

    useEffect(() => {
        $(".menu-icon-bx").on("click", function () {
            $(".side-menu-bx").addClass("active");
            $("body").addClass("over-body");
        });

        $(".trigger-closed, .overlaydiv, li > .smb-link, .smb-logo-link, .smb-login, .account-left-pic").on("click", function (event) {
          if (!$(this).hasClass("smb-link-not")) {
            $(".side-menu-bx").removeClass("active");
            $("body").removeClass("over-body");
            $(".smb-main-bx").removeClass("smb-hide");
            $(".smb-seconde-bx").removeClass("smb-se-show");
          }
        });
    });

    return (
      <>
      <header className={`custom-header ${headerSticky}`} style={{ top: `${headerTop}px` }}>
        <div className="ch-inner">
          
          <div className="ch-left">
            {/* aside Menu Icon Start */}
            <div className="menu-icon-bx">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* aside Menu Icon End */}

            {/* Website Logo Start */}
              <Link to="/" className="ch-logo">
                <img src={Img.logo_color} alt="adstart" />
              </Link>
            {/* Website Logo End */}
          </div>

          {/* Website Categories Menu Start */}
          <div className="ch-menu-bx">

            <div className="cmb-drop-item">
              <div className="cmb-item">Categories <i className="fa fa-angle-down"></i></div>

              <div className="cmb-drop-bx">
                <div className="cmb-drop-inner">
                  <div className="cdi-main">
                    <Link to="/search" className="cdi-main-item active">Actors</Link>
                    <Link to="/search" className="cdi-main-item">Athletes</Link>
                    <Link to="/search" className="cdi-main-item">Comedians</Link>
                    <Link to="/search" className="cdi-main-item">Creators</Link>
                    <Link to="/search" className="cdi-main-item">Musicians</Link>
                    <Link to="/search" className="cdi-main-item">Reality TV</Link>
                  </div>
                  <div className="cdi-main-sub">
                      <div className="cdi-main-item">Actors</div>
                      <div className="cdi-main-item">Athletes</div>
                      <div className="cdi-main-item">Comedians</div>
                      <div className="cdi-main-item">Creators</div>
                      <div className="cdi-main-item">Musicians</div>
                      <div className="cdi-main-item">Reality TV</div>
                      <div className="cdi-main-item">Actors</div>
                      <div className="cdi-main-item">Athletes</div>
                      <div className="cdi-main-item">Comedians</div>
                      <div className="cdi-main-item">Creators</div>
                      <div className="cdi-main-item">Musicians</div>
                      <div className="cdi-main-item cmi-view-all">View All<i className="fa fa-arrow-right" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>

            </div>
            
            <Link to="/about" className="cmb-item">How it works</Link>
            <Link to="/starlogin" className="cmb-item">Join as star</Link>
            <Link to="/starportfolio" className="cmb-item">Star portfolio</Link>
          </div>
          {/* Website Categories Menu End */}


          <div className="ch-right">
            {/* Search Input Start */}
            <div className={`ch-search-bx ${isSearchActive ? 'active' : ''}`} ref={searchBoxRef}>
              <div className="csb-input" onClick={handleSearchActive}>
                <input value={searchValue} onChange={handleChangeSearch} placeholder={words[placeholderText]} />
                <i className="fa fa-search" aria-hidden="true"></i>
                <span className="clear-icon" hidden={isShow} onClick={handleClearSearch} >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                </span>
              </div>

              <div className="search-cancel-btn" onClick={handleSearchClose}>Cancel</div>

              <div className="search-drop-bx">
                <div className="search-drop-inner">
                  
                  <div className="sdi-categories-bx">
                      <div className="scb-lable">Popular categories</div>
                      <div className="row">
                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div className="sdi-categories-bx mt-4">
                      <div className="scb-lable">Browse all</div>
                      <div className="row">

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>

                          <div className="col-4">
                            <div className="scb-item-bx">
                              <div className="scb-item-img">
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                                <img src={Img.demo_img1} alt="demo_img1" />
                              </div>
                              <div className="scb-item-lable">Athletes</div>
                              <svg width="138" height="100" viewBox="5 5 123  80" fill="none"><mask id="prefix__a" x="0" y="0" width="138" height="100"><path d="M200 128c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h176c6.627 0 12 5.373 12 12v116z" fill="#fff"></path></mask><g mask="url(#prefix__a)"><path d="M156.143 94.909C56.593 64.934 92.281 26.54 42.636 4.446A104.817 104.817 0 0032.526.539 11.24 11.24 0 0029.035 0H12.008C5.574 0 .297 5.073.158 11.505A658.475 658.475 0 000 25.5v79l-.665 23.156C-.859 134.415 4.568 140 11.33 140H188.448c.368 0 .731.019 1.097.056.834.086 2.541.259 4.536.454 5.248.513 8.864-4.398 6.419-9.069-8.903-17.006-23.069-30.123-44.357-36.532z" fill="#000000" fillOpacity="0.1"></path></g></svg>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div className="sdi-categories-bx mt-4">
                    <div className="scb-lable mb-2">No search results found.</div>
                    <div className="search-result-bx">

                      <div className="search-result-item">
                        <div className="sri-img-bx">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ADAEB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <div className="sri-data">
                          <div className="sri-data-name">"sagsrhgtdrhedth"</div>
                        </div>
                      </div>

                      <div className="search-result-item">
                        <div className="sri-img-bx">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ADAEB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <div className="sri-data">
                          <div className="sri-data-name">Calebrity Name</div>
                        </div>
                      </div>

                      <div className="search-result-item">
                        <div className="sri-img-bx">
                          <img src={Img.demo_img1} alt="demo_img1" />
                        </div>
                        <div className="sri-data">
                          <div className="sri-data-name">Calebrity Name</div>
                          <div className="sri-data-tagline">Actors</div>
                        </div>
                      </div>

                      <div className="search-result-item">
                        <div className="sri-img-bx">
                          <img src={Img.demo_img1} alt="demo_img1" />
                        </div>
                        <div className="sri-data">
                          <div className="sri-data-name">Calebrity Name</div>
                          <div className="sri-data-tagline">Actors</div>
                        </div>
                      </div>

                    </div>
                  </div>
                
                </div>
              </div>
            </div>
            {/* Search Input End */}


            {/* Signup Btns Start */}
            <div className="signinup-btn-bx">
              <Link to="login" className="sip-btn">Login</Link>
              <Link to="/account" className="sip-btn sip-account-btn ms-2">
                <img src={Img.demo_img1} alt="Name Here..." />
                Account
              </Link>
            </div>
            {/* Signup Btns End */}
          </div>
          
        </div>
      </header>

      <Sidemenu/>
      </>
    );
}
  
export default Header;
  