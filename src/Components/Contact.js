import React from 'react';
import { Link } from "react-router-dom";

// Design Files
import Subloader from './Sections/Subloader';

// Images Common File
import * as Img from './Sections/Img';

function Contact() {

    return(
        <>
            <Subloader/>

            <div className='breadcrumb-outer'>
                <div className='container-lg cl-custom'>   
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active'>Contact Us</Link>
                    </div>
                </div>
            </div>

            <section className="pt-3 pb-5">
                <div className="container-lg cl-custom">
                    <div className="page-heading">Contact Us</div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-5 col-md-6 mt-3 mt-md-0 order-2 order-md-1">
                            <div className="row">
                                <div className="col-md-12 col-sm-6">
                                    <Link className="contact-info" to="tel:+918081113111">
                                        <span className="contact-icon">
                                            <img src={Img.phone} alt="Phone Icon" />
                                        </span>
                                        <div className="contact-text">
                                            <h6>Call Us</h6>
                                            <p>+91 808 111 3111</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-md-12 col-sm-6">
                                    <Link className="contact-info" to="mailto:info@dentriage.com">
                                        <span className="contact-icon">
                                            <img src={Img.email} alt="Email Icon" />
                                        </span>
                                        <div className="contact-text">
                                            <h6>Email Us</h6>
                                            <p>Info@adstar.com</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-12">
                                    <Link className="contact-info">
                                        <span className="contact-icon">
                                            <img src={Img.location} alt="Locations Icon" />
                                        </span>
                                        <div className="contact-text">
                                            <h6>Main Office</h6>
                                            <p>PM Communications, 6th Floor, Zydus Tower, Astron Tower, Iskcon Cross Rd, Satellite, Ahmedabad, Gujarat 380015</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="contact-text-lable text-center mb-1">Social media</div>
                                    <div className="social-icon">
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
                        </div>
                        <div className="col-lg-5 col-md-6 order-1 order-md-2">
                            <form action="">
                                <div className="row">

                                    <div className="col-12">
                                        <div className="signinup-group">
                                            <label className="group__label">Your Name</label>
                                            <input type="text" placeholder="Enter your name"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="signinup-group sgli">
                                            <label className="group__label">Phone Number</label>
                                            <input type="number" placeholder="Enter phone number"/>
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

                                    <div className="col-12">
                                        <div className="signinup-group">
                                            <label className="group__label">Message</label>
                                            <textarea placeholder="Message here..."></textarea>
                                            <span className="twl-lable">0/250 word</span>
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
            </section>

            <div className="pt-5"></div>
        
        </>
    )
}
export default Contact;