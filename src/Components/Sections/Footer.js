import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
// import * as Img from './Img';

function Footer(props) {
    return (
    <>
    <footer className={`pt-5 mt-5 ${props.footertag}`}>
        <div className="container-lg cl-custom">
            <div className="row">
                <div className="col-md-6">
                    <div className="footer-item-box">
                        <div className="footer-heading-top">Join our mailing list</div>
                        <div className="footer-heading">Be the first to know about the newest stars and best deals on adstar</div>
                        <form>
                            <div className="signinup-group newsletter-group">
                                <input type="email" placeholder="you@example.com"/>
                                <button type="submit" disabled><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 text-md-end">
                    <div className="footer-heading mt-md-0">Ready to become a talent on adstar?</div>
                    <Link to="/starlogin" className="footer-btn">Join as star</Link>
                </div>
                <div className="col-md-6 mt-2 mt-md-0">
                    <div className="footer-heading">Useful Links</div>
                    <div className="footer-links-bx justify-content-start">
                        <div className="footer-link">Home</div>
                        <div className="footer-link">About</div>
                        <div className="footer-link">FAQs</div>
                        <div className="footer-link">Privacy</div>
                        <div className="footer-link">Terms</div>
                        <div className="footer-link">Help</div>
                        <div className="footer-link">Sitemap</div>
                    </div>
                </div>
                <div className="col-md-6 text-md-end mt-2 mt-md-0">
                    <div className="footer-heading">Social media</div>
                    <div className="social-icon justify-content-md-end justify-content-start">
                        <Link className="si-item fb-item" to="/">
                            <span className='si-icon'>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                        </Link>
                        <Link className="si-item insta-item" to="/">
                            <span className='si-icon'>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </span>
                        </Link>
                        <Link className="si-item whatsapp-item" to="/">
                            <span className='si-icon'>
                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">© 2023 adstar. All Rights Reserved.</div>
                <div className="mede-with">Made with
                    <span className="icons-box-made">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    by: <Link to="/">Bhavansinh Parmar</Link>
                    {/* <a href="https://pmcommu.com/" target="_blank" rel="noreferrer">PM Communications</a> */}
                </div>
            </div>
        </div>
    </footer>

    {/* Share Popup */}
    <div className="modal fade zoom" id="sharemodal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content custom-content">
                <div className="custom-modal-header">
                    <div className="cmh-lable">Share vai</div>

                    <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                        </svg>
                    </span>
                </div>
                <div className="custom-modal-data">
                    <div className="social-share-icon">
                        <a className="ssi-item fb-item" href="/" target="_blank">
                            <span className='ssi-icon'>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                            <div className='ssi-lable'>Facebook</div>
                        </a>
                        <a className="ssi-item insta-item" href="/" target="_blank">
                            <span className='ssi-icon'>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </span>
                            <div className='ssi-lable'>Instagram</div>
                        </a>
                        <a className="ssi-item whatsapp-item" href="/" target="_blank">
                            <span className='ssi-icon'>
                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            </span>
                            <div className='ssi-lable'>Whatsapp</div>
                        </a>
                        <a className="ssi-item copy-item" href="/" target="_self">
                            <span className='ssi-icon'>
                                <i className="fa fa-link" aria-hidden="true"></i>
                            </span>
                            <div className='ssi-lable'>Copy Link</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Full Review Popup */}
    <div className="modal fade zoom" id="fullreview" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content custom-content">
                <div className="custom-modal-header p-0">
                    {/* <div className="cmh-lable">Share vai</div> */}
                    <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                        </svg>
                    </span>
                </div>
                <div className="custom-modal-data">
                    <div className="all-reviews-item ari-single">
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
    </>
    );
}

export default Footer;