import React from 'react';
import { Link } from "react-router-dom";

// Design Files
import Subloader from './Sections/Subloader';

function Sitemap() {

    return(
        <>
            <Subloader/>

            <div className='breadcrumb-outer'>
                <div className='container-lg cl-custom'>   
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active'>Sitemap</Link>
                    </div>
                </div>
            </div>

            <section className="pt-3 pb-5">
                <div className="container-lg cl-custom">
                    <div className="page-heading">Sitemap</div>
                    <span className="sitemap-heding">Usefull Links</span>
                    <ul className="sitemap-ul">
                        <li>
                            <Link className="sitemap-link" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="sitemap-link" to="/about">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="sitemap-link" to="/faqs">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link className="sitemap-link" to="/privacy">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link className="sitemap-link" to="/terms">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link className="sitemap-link" to="/help">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Help
                            </Link>
                        </li>
                    </ul>

                    <span className="sitemap-heding mt-5">Categories</span>
                    <ul className="sitemap-ul">
                        <li>
                            <div className="sitemap-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Actors
                            </div>
                        </li>
                        <li>
                            <div className="sitemap-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Athletes
                            </div>
                        </li>
                        <li>
                            <div className="sitemap-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Comedians
                            </div>
                        </li>
                        <li>
                            <div className="sitemap-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Musicians
                            </div>
                        </li>
                        <li>
                            <div className="sitemap-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Kids
                            </div>
                        </li>
                        <li>
                            <div className="sitemap-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                                Reality TV
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="pt-5"></div>
        
        </>
    )
}
export default Sitemap;