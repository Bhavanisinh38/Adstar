import React from 'react';

function Howitwork(props) {

    return (
      <>
      <section className="pt-5">
        <div className="container-lg cl-custom">
            <div className="section-heading">How adstar works</div>
            <div className="section-sub-heading">Get a personalized video in just four steps. <a className="hreflink" href="/">Learn more</a></div>
            <div className="row">

                <div className={`${props.ColClass}`}>
                    <div className="hiw-section">
                        <span className="hiw-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2F1F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </span>
                        <div className="hiw-lable">Find a celebrity</div>
                        <div className="hiw-data">Browse thousands of stars offering personalized videos.</div>
                    </div>
                </div>

                <div className={`${props.ColClass}`}>
                    <div className="hiw-section">
                        <span className="hiw-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2F1F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </span>
                        <div className="hiw-lable">Tell them what to say</div>
                        <div className="hiw-data">During checkout, you’ll provide the details the celeb will need to make the perfect personalized video.</div>
                    </div>
                </div>

                <div className={`${props.ColClass}`}>
                    <div className="hiw-section">
                        <span className="hiw-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2F1F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </span>
                        <div className="hiw-lable">Get your video</div>
                        <div className="hiw-data">Celebs have up to 7 days to complete your request. When it’s ready, we’ll send it directly to you.</div>
                    </div>
                </div>

                <div className={`${props.ColClass}`}>
                    <div className="hiw-section">
                        <span className="hiw-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2F1F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                        </span>
                        <div className="hiw-lable">Share with loved ones</div>
                        <div className="hiw-data">Send the video to friends and family and don’t forget to capture their priceless reactions.</div>
                    </div>
                </div>

            </div>
        </div>
      </section>
      </>
    );
}
  
export default Howitwork;

Howitwork.defaultProps = {
    ColClass: "col-lg-3 col-sm-6 mt-3",
}