import React from 'react';
import { Link } from "react-router-dom";

// Design Files
import Subloader from './Sections/Subloader';
import Faqs from './Sections/Faqs';

function FAQs() {

    return(
        <>
            <Subloader/>

            <div className='breadcrumb-outer'>
                <div className='container-lg cl-custom'>   
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active'>FAQs</Link>
                    </div>
                </div>
            </div>

            <section className="pt-4 pb-5">
                <div className="container-lg cl-custom">
                    <div className="page-heading">FAQs</div>
                    <div className="page-sub-heading">Frequently asked questions</div>
                    <div className="legal-content faqs-content">
                        <Faqs />
                    </div>
                </div>
            </section>

            <div className="pt-5"></div>
        
        </>
    )
}
export default FAQs;