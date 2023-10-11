import React from 'react';
import { Link } from "react-router-dom";

// Design Files
import Subloader from './Sections/Subloader';

// Images Common File
import * as Img from './Sections/Img';

function About() {

    return(
        <>
            <Subloader/>

            <section className="bg-linear">
                <div className='container-lg cl-custom'>
                    <div className='breadcrumb-outer'>
                        <div className='breadcrumb-bx'>
                            <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                            <Link className='breadcrumb-link breadcrumb-active'>About</Link>
                        </div>
                    </div>
                    <div className="row align-items-center pt-2 pt-md-4 pb-5">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="common-text-layout ctl-white text-md-start text-center">
                                <div className="ctl-heading">Adstar is where you connect with your favorite stars</div>
                                <p className="ctl-text">Access thousands of celebrities and request a personalized video message for any occasion.</p>

                                <Link to="/search" className="ctl-btn ms-md-0 mx-auto">Browse stars</Link>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="common-digital-layout">
                                <video autoPlay muted loop className="cdl-video cdl-pe-none cdl-video2">
                                    <source src={Img.aboutfulladstar} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5">
                <div className="container-lg cl-custom">
                    <div className="section-heading big-heading">How Adstar works</div>

                    <div className="row align-items-center py-2">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="common-text-layout">
                                <div className="ctl-tag"><span className="ctl-t-num">1</span> Search for a star</div>
                                <div className="ctl-heading">Find the right celeb for any occasion</div>
                                <p className="ctl-text">Birthdays, milestones, or even a well-deserved roast, the perfect celebrity is only a search away. Find yours and request them.</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="common-digital-layout">
                                <img className="cdl-img" src={Img.hiw1} alt="Stpe 1" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center py-2 mt-5 mt-md-3">
                        <div className="col-md-6">
                            <div className="common-digital-layout">
                                <img className="cdl-img" src={Img.hiw2} alt="Stpe 1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="common-text-layout">
                                <div className="ctl-tag"><span className="ctl-t-num">2</span>Request them</div>
                                <div className="ctl-heading">Get your personalized video message</div>
                                <p className="ctl-text">Include all the important details in your request form. After it’s submitted, stars have up to 7 days to complete it. Choose our 24hr delivery option if you need it sooner.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center py-2 mt-5 mt-md-3">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="common-text-layout">
                                <div className="ctl-tag"><span className="ctl-t-num">3</span> Share the magic</div>
                                <div className="ctl-heading">Capture the WOW</div>
                                <p className="ctl-text">Magical moments deserve to be shared. Whether you’re giving one or receiving a personalized video, we want to see your reaction. Bonus points if you tag us.</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="common-digital-layout">
                                <video autoPlay muted loop className="cdl-video cdl-pe-none">
                                    <source src={Img.hiw3} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-linear2">
                <div className='container-lg cl-custom pt-4'>
                    <div className="row align-items-center pt-5">
                        <div className="col-md-7">
                            <div className="common-text-layout ctl-white text-center">
                                <div className="ctl-heading">Download the app</div>
                                <p className="ctl-text">Personalized videos are just the beginning. We’ve created world-class products that make it easier to connect with your favorite stars.</p>
                                <div className="common-store-links">
                                    <div className="csl-store-links">
                                        <div className="cs-link"><img src={Img.playstore} alt="PlayStore"/></div>
                                        <div className="cs-link"><img src={Img.appstore} alt="Appstore"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="common-digital-layout">
                                <img className="cdl-img" src={Img.appdemo} alt="App Img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}
export default About;