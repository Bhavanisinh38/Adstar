import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from '../Sections/Img';

function Celebrityitemtwo() {

    return(
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
            <Link to="/detail" className="celebrity-item ci-two">
                <div>
                    <div className="celebrity-img-bx">
                        <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                    </div>

                    <div className="celebrity-highlight">New</div>

                    <div className="favourite-tag" data-title="add favourite">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" height="20" width="20"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path></svg>
                    </div>

                    <div className="celebrity-name"><img title="Verified Celebrity" src={Img.verified} alt="Verified Icon" />Captain Jason Chambers</div>
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
                    <div className="celebrity-verified-tag">
                        <img title="Verified Celebrity" src={Img.verified} alt="Verified Icon" />Verified
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}
export default Celebrityitemtwo;