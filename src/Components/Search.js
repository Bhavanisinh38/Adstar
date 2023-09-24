import React, { useState } from 'react';

import * as Img from './Sections/Img';

function Search() {
    const [isFilter, setIsFilter] = useState(false);
    const [isSort, setIsSort] = useState(false);

    const toggleFilter = () => {
        setIsFilter(!isFilter)
    }

    const handleSort = () => {
        setIsSort(true);
    };

    const closeSort = () => {
        setIsSort(false);
    };

    const closeFilter = () => {
        setIsFilter(false);
    };

    return (
    <>
        <section className="search-main-section">

            {/* Search Page Right Section or content Section */}
            <div className={`spage-right ${isFilter ? 'active' : ''} `}>
                <div className="spage-r-top">
                    <div className="spage-r-lable">Soccer <span className="showing-result">"419 results"</span></div>
                    <div className="spage-r-btn">
                        <div className={`sortfilterbtn ${isSort ? 'active' : ''}`} onClick={handleSort}><img src={Img.sort} alt="Sort Icon" />Sort By <span>Recommended</span></div>
                        <div className={`sortfilterbtn ${isFilter ? 'active' : ''}`} onClick={toggleFilter}><img src={Img.filter} alt="Filter Icon" />
                            {isFilter ? ("Hide") : ("Show") } Filters
                        </div>
                    </div>
                </div>

                <div className="row spage-r-list-row">
                    
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag active">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>
                      
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                        <div className="celebrity-item ci-two">
                            <div>
                                <div className="celebrity-img-bx">
                                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                                </div>

                                <div className="favourite-tag">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                                </div>

                                <div className="celebrity-name">Captain Jason Chambers</div>
                                <div className="celebrity-profession">Below Deck Down Under</div>
                                {/* <div className="celebrity-categorie">Actor</div> */}
                                <div className="celebrity-followers-tags">
                                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                                </div>
                                {/* 
                                <div className="celebrity-tag">
                                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                                </div> 
                                */}
                                <div className="celebrity-price">₹1,00,000<span>/Video</span></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pagination-bx">
                    <div className="pagination-btn pb-left"><i className="fa fa-angle-left"></i></div>
                    <div className="pagination-text">Page 1 of 11</div>
                    <div className="pagination-btn pb-right"><i className="fa fa-angle-right"></i></div>
                </div>
            </div>
            {/* Search Page Right Section or content Section */}

            {/* Search Page Left Section or Filter Section */}
            <aside className={`spage-left ${isFilter ? 'active' : ''} `}>
                <div className="sp-left-header">
                    <div className="slp-lable">Filters</div>
                    <span className="all-reset-btn active" id="reset-all-btn">Clear all</span>
                    <span className="close-icon" onClick={closeFilter}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                        </svg>
                    </span>
                </div>
                <div id="accordion" className="serach-filter-accordion"> {/* data-bs-parent="#accordion" */}
                
                    <div className="acc-item">
                        <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapsecategories" aria-expanded="true" aria-controls="collapsecategories">Categories<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                        <div id="collapsecategories" className="collapse show" aria-labelledby="headingcategories">
                            <div className="acc-detail">
                                <div className="checkbox-group full-width-cb check-square">
                                    <input type="checkbox" id="cate-cb1"/>
                                    <label htmlFor="cate-cb1"><span className="check-icon"></span>Actors<span className="num-tag">02</span> </label>

                                    <input type="checkbox" id="cate-cb2"/>
                                    <label htmlFor="cate-cb2"><span className="check-icon"></span>Athletes<span className="num-tag">02</span></label>

                                    <input type="checkbox" id="cate-cb3"/>
                                    <label htmlFor="cate-cb3"><span className="check-icon"></span>Comedians<span className="num-tag">02</span></label>

                                    <input type="checkbox" id="cate-cb4"/>
                                    <label htmlFor="cate-cb4"><span className="check-icon"></span>Creators<span className="num-tag">02</span></label>

                                    <input type="checkbox" id="cate-cb5"/>
                                    <label htmlFor="cate-cb5"><span className="check-icon"></span>Musicians<span className="num-tag">02</span></label>

                                    <input type="checkbox" id="cate-cb6"/>
                                    <label htmlFor="cate-cb6"><span className="check-icon"></span>Reality TV<span className="num-tag">02</span></label>

                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="acc-item">
                        <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapsepopularly" aria-expanded="true" aria-controls="collapsepopularly">Popularly<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                        <div id="collapsepopularly" className="collapse show" aria-labelledby="headingpopularly">
                            <div className="acc-detail">
                                <div className="checkbox-group full-width-cb check-square">
                                    <input type="checkbox" id="po-cb1"/>
                                    <label htmlFor="po-cb1"><span className="check-icon"></span>Top Start <span className="num-tag">02</span> </label>

                                    <input type="checkbox" id="po-cb2"/>
                                    <label htmlFor="po-cb2"><span className="check-icon"></span>Favourite Start <span className="num-tag">02</span></label>

                                    <input type="checkbox" id="po-cb3"/>
                                    <label htmlFor="po-cb3"><span className="check-icon"></span>Recent Reels<span className="num-tag">02</span></label>

                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="acc-item">
                        <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapseprice" aria-expanded="true" aria-controls="collapseprice">Price<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                        <div id="collapseprice" className="collapse show" aria-labelledby="headingprice">
                            <div className="acc-detail">
                                <div className="checkbox-group full-width-cb check-square">
                                    <input type="checkbox" id="pr-cb1"/>
                                    <label htmlFor="pr-cb1"><span className="check-icon"></span>$0 to $100 <span className="num-tag">02</span> </label>

                                    <input type="checkbox" id="pr-cb2"/>
                                    <label htmlFor="pr-cb2"><span className="check-icon"></span>$100 to $200 <span className="num-tag">02</span></label>

                                    <input type="checkbox" id="pr-cb3"/>
                                    <label htmlFor="pr-cb3"><span className="check-icon"></span>$200 to $300 <span className="num-tag">02</span></label>

                                    <input type="checkbox" id="pr-cb4"/>
                                    <label htmlFor="pr-cb4"><span className="check-icon"></span>$300+ <span className="num-tag">02</span></label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="acc-item">
                        <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapserating" aria-expanded="true" aria-controls="collapserating">Rating<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                        <div id="collapserating" className="collapse show" aria-labelledby="headingrating">
                            <div className="acc-detail">
                                <div className="checkbox-group full-width-cb check-square">
                                    <input type="checkbox" id="ra-cb1"/>
                                    <label htmlFor="ra-cb1"><span className="check-icon"></span>1 <i className="fa fa-star"></i> & Up<span className="num-tag">01</span> </label>

                                    <input type="checkbox" id="ra-cb2"/>
                                    <label htmlFor="ra-cb2"><span className="check-icon"></span>2 <i className="fa fa-star"></i> & Up<span className="num-tag">02</span></label>

                                    <input type="checkbox" id="ra-cb3"/>
                                    <label htmlFor="ra-cb3"><span className="check-icon"></span>3 <i className="fa fa-star"></i> & Up<span className="num-tag">03</span></label>

                                    <input type="checkbox" id="ra-cb4"/>
                                    <label htmlFor="ra-cb4"><span className="check-icon"></span>4 <i className="fa fa-star"></i> & Up<span className="num-tag">04</span></label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="acc-item">
                        <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapsereview" aria-expanded="true" aria-controls="collapsereview">Review<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                        <div id="collapsereview" className="collapse show" aria-labelledby="headingreview">
                            <div className="acc-detail">
                                <div className="checkbox-group cg-flex-row check-icon-hide check-square">
                                    <input type="checkbox" id="re-cb1"/>
                                    <label htmlFor="re-cb1"><span className="check-icon"></span><i className="fa fa-user" aria-hidden="true"></i>25 +</label>

                                    <input type="checkbox" id="re-cb2"/>
                                    <label htmlFor="re-cb2"><span className="check-icon"></span><i className="fa fa-user" aria-hidden="true"></i>50 +</label>

                                    <input type="checkbox" id="re-cb3"/>
                                    <label htmlFor="re-cb3"><span className="check-icon"></span><i className="fa fa-user" aria-hidden="true"></i>100 +</label>

                                    <input type="checkbox" id="re-cb4"/>
                                    <label htmlFor="re-cb4"><span className="check-icon"></span><i className="fa fa-user" aria-hidden="true"></i>200 +</label>

                                    <input type="checkbox" id="re-cb5"/>
                                    <label htmlFor="re-cb5"><span className="check-icon"></span><i className="fa fa-user" aria-hidden="true"></i>500 +</label>

                                    <input type="checkbox" id="re-cb6"/>
                                    <label htmlFor="re-cb6"><span className="check-icon"></span><i className="fa fa-user" aria-hidden="true"></i>1000 +</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="acc-item">
                        <div className="acc-heding" data-bs-toggle="collapse" data-bs-target="#collapsetime" aria-expanded="true" aria-controls="collapsetime">Time<span className="down-icon"><i className="fa fa-angle-down"></i></span></div>

                        <div id="collapsetime" className="collapse show" aria-labelledby="headingtime">
                            <div className="acc-detail">
                                <div className="checkbox-group cg-flex-row check-icon-hide check-square">
                                    <input type="checkbox" id="time-cb1"/>
                                    <label htmlFor="time-cb1"><span className="check-icon"></span><img src={Img.day} alt="Day" /> 1 Day</label>

                                    <input type="checkbox" id="time-cb2"/>
                                    <label htmlFor="time-cb2"><span className="check-icon"></span><img src={Img.day} alt="Day" /> 2 Day</label>

                                    <input type="checkbox" id="time-cb3"/>
                                    <label htmlFor="time-cb3"><span className="check-icon"></span><img src={Img.day} alt="Day" /> 3 Day</label>

                                    <input type="checkbox" id="time-cb4"/>
                                    <label htmlFor="time-cb4"><span className="check-icon"></span><img src={Img.day} alt="Day" /> 4 Day</label>

                                    <input type="checkbox" id="time-cb5"/>
                                    <label htmlFor="time-cb5"><span className="check-icon"></span><img src={Img.day} alt="Day" /> 5 Day</label>

                                    <input type="checkbox" id="time-cb6"/>
                                    <label htmlFor="time-cb6"><span className="check-icon"></span><img src={Img.day} alt="Day" /> 6 Day</label>

                                    <input type="checkbox" id="time-cb7"/>
                                    <label htmlFor="time-cb7"><span className="check-icon"></span><img src={Img.day} alt="Day" /> 7 Day</label>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className="sortfilter-footer">
                    <div className="sff-btn" onClick={closeFilter}>Apply Filters</div>
                </div>
            </aside>
            {/* Search Page Left Section or Filter Section */}

        </section>

        {/* --- Sort By Filter Popup --- */}
        <div className={`sort-filter-popup ${isSort ? 'active' : ''} `}>
            <div className="sort-filter-inner">
                <span className="close-icon" onClick={closeSort}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                </span>
                <div className="sort-popup-lable">Sort By</div>
                <div className="checkbox-group full-width-cb">
                    <input type="radio" id="sfp-cb1" name="sorffilters"/>
                    <label htmlFor="sfp-cb1"><span className="check-icon"></span>Recommended</label>

                    <input type="radio" id="sfp-cb2" name="sorffilters"/>
                    <label htmlFor="sfp-cb2"><span className="check-icon"></span>Price: high - low</label>

                    <input type="radio" id="sfp-cb3" name="sorffilters"/>
                    <label htmlFor="sfp-cb3"><span className="check-icon"></span>Price: low - high</label>

                    <input type="radio" id="sfp-cb4" name="sorffilters"/>
                    <label htmlFor="sfp-cb4"><span className="check-icon"></span>Number of reviews</label>

                    <input type="radio" id="sfp-cb5" name="sorffilters"/>
                    <label htmlFor="sfp-cb5"><span className="check-icon"></span>Newest</label>

                    <input type="radio" id="sfp-cb6" name="sorffilters"/>
                    <label htmlFor="sfp-cb6"><span className="check-icon"></span>Alphabetical</label>
                </div>
                <div className="sortfilter-footer">
                    <div className="sff-btn" onClick={closeSort}>Apply Sorting</div>
                </div>
            </div>
            
        </div>

        {/* --- Serach Page overlay div --- */}
        <div className={`serach-overlay ${isFilter ? 'filter-active' : ''} `} onClick={closeFilter}></div>
        <div className={`serach-overlay ${isSort ? 'active' : ''} `} onClick={closeSort}></div>
    </>
    )
}
export default Search;