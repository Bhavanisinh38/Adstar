import React from 'react';
import {Link} from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Images Common File
import * as Img from './Img';

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

            <Link to="/detail" className="celebrity-item">
              <div>
                <div className="celebrity-img-bx">
                  <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                  <div className="celebrity-highlight">New</div>
                </div>
                <div className="celebrity-name">Captain Jason Chambers</div>
                {/* <div className="celebrity-profession">Below Deck Down Under</div> */}
                <div className="celebrity-categorie">Actor</div>
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
                <div className="celebrity-price">
                  ₹1,00,000<span>/Video
                </div> 
                */}
              </div>
            </Link>

            <Link to="/detail" className="celebrity-item">
              <div>
                <div className="celebrity-img-bx">
                  <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                  <div className="celebrity-highlight">New</div>
                </div>
                <div className="celebrity-name">Captain Jason Chambers</div>
                {/* <div className="celebrity-profession">Below Deck Down Under</div> */}
                <div className="celebrity-categorie">Actor</div>
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
                <div className="celebrity-price">
                  ₹1,00,000<span>/Video
                </div> 
                */}
              </div>
            </Link>

            <Link to="/detail" className="celebrity-item">
              <div>
                <div className="celebrity-img-bx">
                  <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                  <div className="celebrity-highlight">New</div>
                </div>
                <div className="celebrity-name">Captain Jason Chambers</div>
                {/* <div className="celebrity-profession">Below Deck Down Under</div> */}
                <div className="celebrity-categorie">Actor</div>
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
                <div className="celebrity-price">
                  ₹1,00,000<span>/Video
                </div> 
                */}
              </div>
            </Link>

            <Link to="/detail" className="celebrity-item">
              <div>
                <div className="celebrity-img-bx">
                  <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                  <div className="celebrity-highlight">New</div>
                </div>
                <div className="celebrity-name">Captain Jason Chambers</div>
                {/* <div className="celebrity-profession">Below Deck Down Under</div> */}
                <div className="celebrity-categorie">Actor</div>
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
                <div className="celebrity-price">
                  ₹1,00,000<span>/Video
                </div> 
                */}
              </div>
            </Link>

            <Link to="/detail" className="celebrity-item">
              <div>
                <div className="celebrity-img-bx">
                  <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                  <div className="celebrity-highlight">New</div>
                </div>
                <div className="celebrity-name">Captain Jason Chambers</div>
                {/* <div className="celebrity-profession">Below Deck Down Under</div> */}
                <div className="celebrity-categorie">Actor</div>
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
                <div className="celebrity-price">
                  ₹1,00,000<span>/Video
                </div> 
                */}
              </div>
            </Link>

            <Link to="/detail" className="celebrity-item">
              <div>
                <div className="celebrity-img-bx">
                  <img className="celebrity-img" src={Img.demo_img2} alt="Celebrity Name" />
                  <div className="celebrity-highlight">New</div>
                </div>
                <div className="celebrity-name">Captain Jason Chambers</div>
                {/* <div className="celebrity-profession">Below Deck Down Under</div> */}
                <div className="celebrity-categorie">Actor</div>
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
                <div className="celebrity-price">
                  ₹1,00,000<span>/Video
                </div> 
                */}
              </div>
            </Link>

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

          </OwlCarousel>

      </div>
    </section>
    </>
  );
}

export default Listitem;
