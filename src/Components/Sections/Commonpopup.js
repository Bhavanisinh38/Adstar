import React, { useState } from 'react';

//Design Files
import Starrating from './Starrating';

// Images Common File
import * as Img from './Img';

function Commonpopup() {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
      // You can perform additional actions when the rating changes, such as sending it to a server.
    };

    return (
        <>
            {/* Social Media Popup */}
            <div className="modal fade zoom" id="socialmediamodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content custom-content">
                        <div className="custom-modal-header">
                            <div className="cmh-lable">Select Social Media</div>

                            <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="custom-modal-data">
                            <div className="social-icon social-media-select">
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Facebook</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Instagram</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Youtube</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Twitter</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Telegram</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-pinterest" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Pinterest</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-reddit" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Reddit</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Linkedin</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Whatsapp</div>
                                    </div>
                                </div>
                                <div className="si-sms">
                                    <div className="si-item">
                                        <span className='si-icon'>
                                            <i className="fa fa-globe" aria-hidden="true"></i>
                                        </span>
                                        <div className='si-lable'>Other</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <button type="button" className="common-submit-btn" disabled>Add Social Media</button>
                                <button type="button" className="lsb-loader-btn">
                                    <img src={Img.loading} alt="Please wait" />Please wait ....
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share Popup */}
            <div className="modal fade zoom" id="sharemodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content custom-content">
                        <div className="custom-modal-header">
                            <div className="cmh-lable">Share vai</div>

                            <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="custom-modal-data">
                            <div className="social-share-icon">
                                <a className="ssi-item fb-item" href="/" target="_blank">
                                    <span className='ssi-icon'>
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </span>
                                    <div className='ssi-lable'>Facebook</div>
                                </a>
                                <a className="ssi-item insta-item" href="/" target="_blank">
                                    <span className='ssi-icon'>
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </span>
                                    <div className='ssi-lable'>Instagram</div>
                                </a>
                                <a className="ssi-item whatsapp-item" href="/" target="_blank">
                                    <span className='ssi-icon'>
                                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                    </span>
                                    <div className='ssi-lable'>Whatsapp</div>
                                </a>
                                <a className="ssi-item copy-item" href="/" target="_self">
                                    <span className='ssi-icon'>
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </span>
                                    <div className='ssi-lable'>Copy Link</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add review Popup */}
            <div className="modal fade zoom" id="addreviewmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content custom-content">
                        <div className="custom-modal-header">
                            <div className="cmh-lable">Add your review</div>

                            <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="custom-modal-data">
                            <form action="" className="px-4 pb-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="signinup-group">
                                            <label className="group__label">Add Your Rating</label>
                                            <Starrating totalStars={5} initialRating={rating} onRatingChange={handleRatingChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="signinup-group">
                                            <label className="group__label">Your Name</label>
                                            <input type="text" placeholder="Enter your name"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="signinup-group">
                                            <label className="group__label">Review</label>
                                            <textarea placeholder="Review text here..."></textarea>
                                            <span className="twl-lable">0/150 word</span>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="common-submit-btn" disabled>Submit</button>
                                <button type="button" className="lsb-loader-btn">
                                    <img src={Img.loading} alt="Please wait" />Please wait ....
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Review Popup */}
            <div className="modal fade zoom" id="fullreview" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content custom-content">
                        <div className="custom-modal-header p-0">
                            {/* <div className="cmh-lable">Share vai</div> */}
                            <span className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="custom-modal-data">
                            <div className="all-reviews-item ari-single">
                                <div className='ari-snd'>
                                    <div className="ari-snd-lable">Mr. Chandler Haag</div>
                                    <div className="ari-snd-star">
                                        <i className="fa fa-star active" aria-hidden="true"></i>
                                        <i className="fa fa-star active" aria-hidden="true"></i>
                                        <i className="fa fa-star active" aria-hidden="true"></i>
                                        <i className="fa fa-star active" aria-hidden="true"></i>
                                        <i className="fa fa-star active" aria-hidden="true"></i>
                                    </div>
                                    <div className="ari-snd-date">August 6th, 2023 <br/> Birthday</div>
                                </div>
                                <div className='ari-data'>
                                    Doloremque earum reiciendis voluptas voluptatem fugit. Illum magnam hic odit eos blanditiis. Natus adipisci commodi quia provident aut.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Commonpopup;