import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Recentreviews(props) {
    const reviewsslider = {
		loop: true,
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
            items: 1.2,
		  },
		  576: {
            items: 2.2,
		  },
		  992: {
            items: props.mw992,
		  }
		}
    };
    return (
      <>
      <section className="pt-5">
        <div className="container-lg cl-custom">
            <div className="section-heading">
                {props.pagetitle}
                <div className={`section-heading-btn view-all-reviews ${props.allreviewsbtn} `} data-bs-toggle="modal" data-bs-target="#allreviewsmodal">View all (61)</div>
            </div>

            <OwlCarousel className="mt-3" {...reviewsslider}>
                <div className="reviews-section">
                    <div className="reviews-star-name">
                        <div className="reviews-lable">Birthday from Joe Veleno</div>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <span className={`${props.rstc}`}>Name Here...</span>
                    </div>
                    <div className={`reviews-date ${props.rdc}`}>August 6th, 2023 • Birthday</div>
                    <div className="reviews-data">We cannot thank you enough! Sophie was beyond thrilled to get your message and it really helped her get through a little bit of missing home!</div>
                    <div className="reviews-btn"  data-bs-toggle="modal" data-bs-target="#fullreview">View More <i className="fa fa-angle-right"></i></div>
                </div>
                <div className="reviews-section">
                    <div className="reviews-star-name">
                        <div className="reviews-lable">Birthday from Joe Veleno</div>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <span className={`${props.rstc}`}>Name Here...</span>
                    </div>
                    <div className={`reviews-date ${props.rdc}`}>August 6th, 2023 • Birthday</div>
                    <div className="reviews-data">We cannot thank you enough! Sophie was beyond thrilled to get your message and it really helped her get through a little bit of missing home!</div>
                    <div className="reviews-btn"  data-bs-toggle="modal" data-bs-target="#fullreview">View More <i className="fa fa-angle-right"></i></div>
                </div>
                <div className="reviews-section">
                    <div className="reviews-star-name">
                        <div className="reviews-lable">Birthday from Joe Veleno</div>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <span className={`${props.rstc}`}>Name Here...</span>
                    </div>
                    <div className={`reviews-date ${props.rdc}`}>August 6th, 2023 • Birthday</div>
                    <div className="reviews-data">We cannot thank you enough! Sophie was beyond thrilled to get your message and it really helped her get through a little bit of missing home!</div>
                    <div className="reviews-btn"  data-bs-toggle="modal" data-bs-target="#fullreview">View More <i className="fa fa-angle-right"></i></div>
                </div>
                <div className="reviews-section">
                    <div className="reviews-star-name">
                        <div className="reviews-lable">Birthday from Joe Veleno</div>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <span className={`${props.rstc}`}>Name Here...</span>
                    </div>
                    <div className={`reviews-date ${props.rdc}`}>August 6th, 2023 • Birthday</div>
                    <div className="reviews-data">We cannot thank you enough! Sophie was beyond thrilled to get your message and it really helped her get through a little bit of missing home!</div>
                    <div className="reviews-btn"  data-bs-toggle="modal" data-bs-target="#fullreview">View More <i className="fa fa-angle-right"></i></div>
                </div>
                <div className="reviews-section">
                    <div className="reviews-star-name">
                        <div className="reviews-lable">Birthday from Joe Veleno</div>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <i className="fa fa-star active" aria-hidden="true"></i>
                        <span className={`${props.rstc}`}>Name Here...</span>
                    </div>
                    <div className={`reviews-date ${props.rdc}`}>August 6th, 2023 • Birthday</div>
                    <div className="reviews-data">We cannot thank you enough! Sophie was beyond thrilled to get your message and it really helped her get through a little bit of missing home!</div>
                    <div className="reviews-btn"  data-bs-toggle="modal" data-bs-target="#fullreview">View More <i className="fa fa-angle-right"></i></div>
                </div>
            </OwlCarousel>
            <button className="common-btn mt-3" data-bs-target="#addreviewmodal" data-bs-toggle="modal">Add review</button>
            
            {/* --- skeletant start --- */}
            {/* <div className='owl-skeletant'>
                <div className={`reviews-section ${props.detailrs}  skeletant-bx skeletant-design skeletant-height`}></div>
                <div className={`reviews-section ${props.detailrs}  skeletant-bx skeletant-design skeletant-height`}></div>
                <div className={`reviews-section ${props.detailrs} skeletant-bx skeletant-design skeletant-height`}></div>
                <div className={`reviews-section ${props.detailrs} skeletant-bx skeletant-design skeletant-height`}></div>
            </div> */}
            {/* --- skeletant end --- */}

        </div>
      </section>
      </>
    );
}
  
export default Recentreviews;

Recentreviews.defaultProps = {
    detailrs: " ",
    rdc: "d-none",
    mw992: "3.2",
    allreviewsbtn: "d-none",
}
  