import React from 'react';
import {Link} from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Design Files
import Celebrityitem from '../SingleItem/Celebrityitem';

function Listitem(props) {
  const Listitemslider = {
		loop: false,
    margin:20,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		dots:false,
		nav:true,
		autoplay: true,
		items: 1,
		navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" d="M328 112L184 256l144 144"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" d="M184 112l144 144-144 144"/></svg>'],
		responsiveClass: true,
		responsive: {
		  0: {
        items: 2,
		  },
      576: {
        items: 3,
      },
		  768: {
        items: 4,
		  },
		  992: {
        items: 5,
		  },
		  1200: {
        items: 6,
		  }
		}
  };
  return (
    <>
    <section className="pt-5">
      <div className="container-lg cl-custom">
          <div className="section-heading">
            {props.pagetitle}
            <Link to="/search" className={`section-heading-btn shb-sa-btn ${props.seeallbtn}`}>See all</Link>
          </div>

          <OwlCarousel className="mt-3" {...Listitemslider}>
            
            <Celebrityitem />
            <Celebrityitem />
            <Celebrityitem />
            <Celebrityitem />
            <Celebrityitem />
            <Celebrityitem />
            <Celebrityitem />

          </OwlCarousel>

          {/* --- skeletant start --- */}
          {/* <div className='owl-skeletant'>
            <div className="celebrity-item skeletant-bx">
                <div>
                    <div className="celebrity-img-bx skeletant-design"></div>
                    <div className="skeletant-design ld1 mt-3"></div>
                    <div className="skeletant-design ld4 mx-auto"></div>
                </div>
            </div>
            <div className="celebrity-item skeletant-bx">
                <div>
                    <div className="celebrity-img-bx skeletant-design"></div>
                    <div className="skeletant-design ld1 mt-3"></div>
                    <div className="skeletant-design ld4 mx-auto"></div>
                </div>
            </div>
            <div className="celebrity-item skeletant-bx">
                <div>
                    <div className="celebrity-img-bx skeletant-design"></div>
                    <div className="skeletant-design ld1 mt-3"></div>
                    <div className="skeletant-design ld4 mx-auto"></div>
                </div>
            </div>
            <div className="celebrity-item skeletant-bx">
                <div>
                    <div className="celebrity-img-bx skeletant-design"></div>
                    <div className="skeletant-design ld1 mt-3"></div>
                    <div className="skeletant-design ld4 mx-auto"></div>
                </div>
            </div>
            <div className="celebrity-item skeletant-bx">
                <div>
                    <div className="celebrity-img-bx skeletant-design"></div>
                    <div className="skeletant-design ld1 mt-3"></div>
                    <div className="skeletant-design ld4 mx-auto"></div>
                </div>
            </div>
            <div className="celebrity-item skeletant-bx">
                <div>
                    <div className="celebrity-img-bx skeletant-design"></div>
                    <div className="skeletant-design ld1 mt-3"></div>
                    <div className="skeletant-design ld4 mx-auto"></div>
                </div>
            </div>
          </div> */}
          {/* --- skeletant end --- */}

      </div>
    </section>
    </>
  );
}

export default Listitem;
