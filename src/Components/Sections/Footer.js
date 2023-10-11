import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
// import * as Img from './Img';

function Footer(props) {
    return (
    <>
        <footer className={`pt-5 ${props.footertag}`}>
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
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/about" className="footer-link">About</Link>
                            <Link to="/faqs" className="footer-link">FAQs</Link>
                            <Link to="/privacy" className="footer-link">Privacy</Link>
                            <Link to="/terms" className="footer-link">Terms</Link>
                            <Link to="/help" className="footer-link">Help</Link>
                            <Link to="/sitemap" className="footer-link">Sitemap</Link>
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
                        by: <a href="https://pmcommu.com/" target="_blank" rel="noreferrer">PM Communications</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
}

export default Footer;