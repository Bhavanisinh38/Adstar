import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

// Design Files
import Subloader from './Sections/Subloader';
import Videosection from './Sections/Videosection';
import Howitwork from './Sections/Howitwork';
import Socialfollowers from './Sections/Socialfollowers';
import Recentreviews from './Sections/Recentreviews';
import Listitem from './Sections/Listitem';
import Faqs from './Sections/Faqs';

// Images Common File
import * as Img from './Sections/Img';

function Detail() {
    const [isFixedBtn, setIsFixedBtn] = useState(false);
    const [isSecureNote, setIsSecureNote] = useState(false);

    useEffect(() => {
      const dpoBx = document.querySelector('.dmb-profile-outer');
      const dpoBxOffset = dpoBx.offsetTop + 200;
  
      const handleScroll = () => {
        if (window.pageYOffset > dpoBxOffset) {
          setIsFixedBtn(true);
        } else {
          setIsFixedBtn(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    const handleSecureNote = () => {
        setIsSecureNote(true);
    };

    const closeSecureNote = () => {
        setIsSecureNote(false);
    };

    return (
        <>
            <Subloader/>
            <div className='breadcrumb-outer'>
                <div className='container-lg cl-custom'>   
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link' to="/search">Categories<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active'>Celebrity Name</Link>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <div className="container-lg cl-custom cl-lg-0">
                    <div className="detail-main-bx">
                        <div className="dmb-right">
                            <div className="dmb-profile-outer">
                                <div className="dmb-profile-bx">
                                    <div className="dpb-img-bx">
                                        <img src={Img.demo_img1} alt="Celebrity Name" />
                                    </div>
                                    <div className="dpb-data-bx">
                                        <div className="dpb-data-name">Ashley Parker Angel</div>
                                        <div className="dpb-data-profession">Singer: O-Town - Actor</div>
                                        <div className="dpb-data-verified"><img title="Verified Celebrity" src={Img.verified} alt="Verified Icon" />Verified</div>
                                        <div className="dpb-data-about">Teen heartthrob of ABC / MTV fame ✨ Actor & Singer || former member of boyband O-Town Broadway Star of HAIRSPRAY and WICKED the musical 🎭</div>
                                        <div className="dpb-data-tag">
                                            <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                            <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                            <div className="ct-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>Highly responsive</div>
                                        </div>
                                        <div className="dpb-data-btn">
                                            <div className="follow-btn d-none d-lg-inline-flex">Follow</div>
                                            <div className="copy-url-btn  d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#sharemodal">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"></path></svg>
                                                Share
                                            </div>
                                            <div className="favourite-tag details-fetg" data-title="add favourite">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                                Favourite
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* --- skeletant start --- */}
                                {/* <div className="dmb-profile-bx skeletant-bx">
                                    <div className="dpb-img-bx skeletant-design"></div>
                                    <div className="dpb-data-bx" style={{width:"100%"}} >
                                        <div className="skeletant-design ld1"></div>
                                        <div className="skeletant-design ld5"></div>
                                        <div className="skeletant-design ld4"></div>
                                        <div className="skeletant-design ld1 mt-3"></div>
                                        <div className="skeletant-design ld1"></div>
                                        <div className="skeletant-design ld2"></div>
                                    </div>
                                </div> */}
                                {/* --- skeletant end --- */}
                                <div className="dmb-book-btns d-block d-lg-none mt-4">
                                    <Link to="/book" className="dbb-btn video-book-btn">Book a personal video ₹2,493</Link>
                                    <div className="row">
                                        <div className="col-md-4 pe-md-1">
                                            <div data-bs-target="#Chatmessage" data-bs-toggle="modal" className="dbb-btn">Chat with Star</div>
                                        </div>
                                        <div className="col-md-4 col-6 ps-md-1 pe-sm-1">
                                            <div className="dbb-btn">Follow</div>
                                        </div>
                                        <div className="col-md-4 col-6 ps-1">
                                            <div className="dbb-btn" data-bs-toggle="modal" data-bs-target="#sharemodal"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"></path></svg>
                                                Share
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
             
                            <Videosection pagetitle="Reels" ClassCso="detail-video"/>
                            <div className="highly-responsive-tag commonscrollbarhide">
                                <div className="hrt-item">
                                    <div className="hrt-lable"><i className="fa fa-bolt" aria-hidden="true"></i>24hr delivery</div>
                                    <div className="hrt-text">Available to book</div>
                                </div>
                                <div className="hrt-item">
                                    <div className="hrt-lable"><i className="fa fa-clock-o" aria-hidden="true"></i>2:30s</div>
                                    <div className="hrt-text">Average video length</div>
                                </div>
                            </div>

                            <div className="sectiongap"></div>

                            <Socialfollowers />
                            
                            <div className="sectiongap"></div>

                            <Howitwork ColClass="col-lg-6 col-sm-6 mt-3"/>

                            <div className="sectiongap"></div>

                            <Recentreviews mw992="2.4" pagetitle="Reviews" detailrs="detail-rs" rdc=" " allreviewsbtn="d-block" rstc="d-none" />
                        </div>
                        <aside className="dmb-left">
                            <div className="dmb-left-inner">
                                <div className={`dmb-book-btns dmb-left-btns ${isFixedBtn ? 'active' : ''}`}>
                                    <Link to="/book" className="dbb-btn video-book-btn">Book a personal video ₹2,493</Link>
                                    <div data-bs-target="#Chatmessage" data-bs-toggle="modal" className="dbb-btn">Chat with Star</div>
                                    <div className="secure-note-btn" onClick={handleSecureNote}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="transparent" stroke="#F2F1F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                        Secure payments & money back guarantee
                                    </div>
                                </div>

                                <div className={`dmb-note-text ${isSecureNote ? 'active' : ''}`}>

                                    <span className="close-icon" onClick={closeSecureNote}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                                        </svg>
                                    </span>

                                    <div className="dnt-lable">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                        Money back guarantee
                                    </div>

                                    <p className="note-data-text">If you pay on web by card, we reserve the amount when you place your order but only charge once you have received the video. 
                                    <br/>
                                    <br/>
                                    If you book a video on web with another payment method, we will always provide a full refund if the celebrity doesn’t respond.</p>

                                    <div className="note-imgs">
                                        <img src={Img.Payment_icon1} alt="Payment Icons" />
                                        <img src={Img.Payment_icon2} alt="Payment Icons" />
                                        <img src={Img.Payment_icon3} alt="Payment Icons" />
                                        <img src={Img.Payment_icon4} alt="Payment Icons" />
                                        <img src={Img.Payment_icon5} alt="Payment Icons" />
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <div className="sectiongap"></div>

            <Listitem pagetitle="Recent views"/>

            <div className="sectiongap"></div>

            <Faqs/>

            <div className="pt-5"></div>

            {/* <div className="last-section"></div> */}

            <div className={`detail-overlay ${isSecureNote ? 'secure-active' : ''} `} onClick={closeSecureNote}></div>
        
            {/* All Reviews Popup */}
            <div className="modal fade zoom" id="allreviewsmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content custom-content">

                        <div className="custom-modal-header">
                            <div className="cmh-lable">All Reviews</div>

                            <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="custom-modal-data">
                            <div className="all-reviews-list commonscrollbarhide">

                                <div className="all-reviews-item ">
                                    <div className='ari-snd'>
                                        <div className="ari-snd-lable">Mr. Chandler Haag</div>
                                        <div className="ari-snd-star">
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                        </div>
                                        <div className="ari-snd-date">August 6th, 2023 <br/> Birthday</div>
                                    </div>
                                    <div className='ari-data'>
                                        Doloremque earum reiciendis voluptas voluptatem fugit. Illum magnam hic odit eos blanditiis. Natus adipisci commodi quia provident aut.
                                    </div>
                                </div>

                                <div className="all-reviews-item">
                                    <div className='ari-snd'>
                                        <div className="ari-snd-lable">Mr. Chandler Haag</div>
                                        <div className="ari-snd-star">
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                        </div>
                                        <div className="ari-snd-date">August 6th, 2023 <br/> Birthday</div>
                                    </div>
                                    <div className='ari-data'>
                                        Doloremque earum reiciendis voluptas voluptatem fugit. Illum magnam hic odit eos blanditiis. Natus adipisci commodi quia provident aut.
                                    </div>
                                </div>

                                <div className="all-reviews-item">
                                    <div className='ari-snd'>
                                        <div className="ari-snd-lable">Mr. Chandler Haag</div>
                                        <div className="ari-snd-star">
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                        </div>
                                        <div className="ari-snd-date">August 6th, 2023 <br/> Birthday</div>
                                    </div>
                                    <div className='ari-data'>
                                        Doloremque earum reiciendis voluptas voluptatem fugit. Illum magnam hic odit eos blanditiis. Natus adipisci commodi quia provident aut.
                                    </div>
                                </div>

                                <div className="all-reviews-item">
                                    <div className='ari-snd'>
                                        <div className="ari-snd-lable">Mr. Chandler Haag</div>
                                        <div className="ari-snd-star">
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                            <i className="fa fa-star active" aria-hidden="true"></i>
                                        </div>
                                        <div className="ari-snd-date">August 6th, 2023 <br/> Birthday</div>
                                    </div>
                                    <div className='ari-data'>
                                        Doloremque earum reiciendis voluptas voluptatem fugit. Illum magnam hic odit eos blanditiis. Natus adipisci commodi quia provident aut.
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

export default Detail;