function Faqs() {

    return (
      <>
      <section className="pt-5 py-5">
        <div className="container-lg cl-custom">
            <div className="section-heading">Frequently asked questions</div>
  
            <div id="faqsaccordion" className="faqs-accordion"> {/*  data-bs-parent="#faqsaccordion" */}
              
                <div className="acc-item">
                    <div className="acc-heding collapsed" id="headingQo" data-bs-toggle="collapse" data-bs-target="#collapseQo" aria-expanded="true" aria-controls="collapseQo">
                      How can I check the status of my personalized adstar video?
                      <span className="down-icon"><i className="fa fa-angle-down"></i></span>
                    </div>
  
                    <div id="collapseQo" className="collapse" aria-labelledby="headingQo">
                        <div className="faqs-data">
                          You can check the status of your adstar request through the link provided in your confirmation email.
                        </div>
                    </div>
                </div>
  
                <div className="acc-item">
                    <div className="acc-heding collapsed" id="headingQt" data-bs-toggle="collapse" data-bs-target="#collapseQt" aria-expanded="true" aria-controls="collapseQt">
                      Is there anything celebrities won’t do in my personalized adstar video?
                      <span className="down-icon"><i className="fa fa-angle-down"></i></span>
                    </div>
  
                    <div id="collapseQt" className="collapse" aria-labelledby="headingQt">
                        <div className="faqs-data">
                        adstar celebrities love connecting with their fans. While they are pretty open to most suggestions, celebrities have final say whether they will accept or decline a video. For a list of things that we don't allow, please take a look at our <a className="hreflink" href="/">Acceptable Use Policy and Community Guidelines.</a>
                        </div>
                    </div>
                </div>
  
                <div className="acc-item">
                    <div className="acc-heding collapsed" id="headingQth" data-bs-toggle="collapse" data-bs-target="#collapseQth" aria-expanded="true" aria-controls="collapseQth">
                      What should (and shouldn’t) I put in my request?
                      <span className="down-icon"><i className="fa fa-angle-down"></i></span>
                    </div>
  
                    <div id="collapseQth" className="collapse" aria-labelledby="headingQth">
                        <div className="faqs-data">
                        So long as your request isn't inappropriate or in violation of our <a className="hreflink" href="/">Acceptable Use Policy and Community Guidelines,</a> feel free to get as creative as you'd like with your request! The celebrities do have the right to decline any requests at their own discretion, though. Oh, and don't put any links in the request!
                        </div>
                    </div>
                </div>
  
                <div className="acc-item">
                    <div className="acc-heding collapsed" id="headingQf" data-bs-toggle="collapse" data-bs-target="#collapseQf" aria-expanded="true" aria-controls="collapseQf">
                      What’s the turnaround time for a personalized adstar video?
                      <span className="down-icon"><i className="fa fa-angle-down"></i></span>
                    </div>
  
                    <div id="collapseQf" className="collapse" aria-labelledby="headingQf">
                        <div className="faqs-data">
                        Once you send your request over to a celebrity, they'll have up to 7 days to fulfill the request (for a regular adstar) or 24 hours (for 24hr delivery.) You can check the status of your request in the adstar app or through the link in your confirmation email. When the Talent fulfills your request, you'll receive a notification and email with a link to view the completed personalized adstar video!
                        </div>
                    </div>
                </div>
  
                <div className="acc-item">
                    <div className="acc-heding collapsed" id="headingQfi" data-bs-toggle="collapse" data-bs-target="#collapseQfi" aria-expanded="true" aria-controls="collapseQfi">
                      What if the celebrity doesn’t accept or fulfill my request in time?
                      <span className="down-icon"><i className="fa fa-angle-down"></i></span>
                    </div>
  
                    <div id="collapseQfi" className="collapse" aria-labelledby="headingQfi">
                        <div className="faqs-data">
                        If the request is declined or expires, we’ll notify you.
                        </div>
                    </div>
                </div>
  
            </div>
  
        </div>
      </section>
      </>
    );
  }
  
  export default Faqs;
  