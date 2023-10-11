import React from 'react';
import { Link } from "react-router-dom";

// Design Files
import Subloader from './Sections/Subloader';

function Terms() {

    return(
        <>
            <Subloader/>

            <div className='breadcrumb-outer'>
                <div className='container-lg cl-custom'>   
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link' to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active'>Terms</Link>
                    </div>
                </div>
            </div>

            <section className="pt-4 pb-5">
                <div className="container-lg cl-custom">
                    <div className="page-heading">Terms & conditions</div>
                    <div className="legal-content">
                      
                        <div className="main-sub-lable">Lorem ipsum dolor sit amet.</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>

                        <div className="main-sub-lable">Lorem ipsum dolor sit amet.</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>

                        <div className="main-sub-lable">Lorem ipsum dolor sit amet.</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>

                        <div className="main-sub-lable">Lorem ipsum dolor sit amet.</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>

                        <div className="main-sub-lable">Lorem ipsum dolor sit amet.</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa omnis maiores a ipsa accusantium ducimus repellat voluptas, minima mollitia error eos inventore distinctio doloribus, dicta, aspernatur dolorum quaerat fuga.</p>
                    </div>
                </div>
            </section>

            <div className="pt-5"></div>
        
        </>
    )
}
export default Terms;