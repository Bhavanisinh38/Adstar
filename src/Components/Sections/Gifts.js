import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Gifts() {
  const Giftsslider = {
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
            items: 3.2,
		  }
		}
  };
  return (
    <>
    <section className="pt-5">
      <div className="container-lg cl-custom">
          <div className="section-heading">Gifts for every budget</div>

          <OwlCarousel className="mt-3" {...Giftsslider}>
              <div className="gifts-item">
                  <div className="gifts-lable">Under</div>
                  <div className="gifts-data">₹25</div>
              </div>
         
              <div className="gifts-item">
                  <div className="gifts-lable">Under</div>
                  <div className="gifts-data">₹50</div>
              </div>
         
              <div className="gifts-item">
                  <div className="gifts-lable">Under</div>
                  <div className="gifts-data">₹100</div>
              </div>
              
              <div className="gifts-item">
                  <div className="gifts-lable">Under</div>
                  <div className="gifts-data">₹150</div>
              </div>
          </OwlCarousel>

      </div>
    </section>
    </>
  );
}

export default Gifts;
