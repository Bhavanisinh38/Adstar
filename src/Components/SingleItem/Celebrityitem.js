import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from '../Sections/Img';

function Celebrityitem() {

    return(
        <>
        <Link to="/detail" className="celebrity-item">
            <div>
                <div className="celebrity-img-bx">
                    <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                    <div className="celebrity-highlight">New</div>
                </div>
                <div className="celebrity-name"><img title="Verified Celebrity" src={Img.verified} alt="Verified Icon" />Captain Jason Chambers</div>
                {/* <div className="celebrity-profession">Below Deck Down Under</div> */}
                <div className="celebrity-categorie">Actor</div>
                <div className="celebrity-followers-tags">
                    <div className="cft-item"><i className="fa fa-facebook"></i>1.5M</div>
                    <div className="cft-item"><i className="fa fa-instagram"></i>1.5M</div>
                    <div className="cft-item"><i className="fa fa-youtube-play"></i>1.5M</div>
                </div>
                <div className="celebrity-verified-tag">
                    <img title="Verified Celebrity" src={Img.verified} alt="Verified Icon" />Verified
                </div>
                {/*
                <div className="celebrity-tag">
                    <div className="ct-item"><i className="fa fa-star" aria-hidden="true"></i>4.99<span>(334)</span></div>
                    <div className="ct-item"><i className="fa fa-bolt" aria-hidden="true"></i>25hr</div>
                </div>
                <div className="celebrity-price">
                    ₹1,00,000<span>/Video
                </div> 
                */}
            </div>
        </Link>
        </>
    )
}
export default Celebrityitem;