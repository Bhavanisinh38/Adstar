import React, { useState, useRef } from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from './Img';

function Loginform(props) {
    const [isbodShow, setisbodShow] = useState(true);
    const [bodValue, setbodValue] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const [activeScreen, setActiveScreen] = useState('login-screen'); // Set the default active screen

    const handlebodChange = (e) => {
      const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      const formattedValue = formatbod(value);
      setisbodShow(value === '');
      setbodValue(formattedValue);
    };
  
    const formatbod = (value) => {
      if (value.length === 0) return '';
      if (value.length <= 2) return value;
      if (value.length <= 4) return `${value.slice(0, 2)}/${value.slice(2)}`;
      return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
    };

    const handlebodClear = () => {
        setbodValue("");
        setisbodShow(true)
    };
  
    const handleChange = (e, index) => {
        const value = e.target.value;
    
        if (!isNaN(value) && value.length <= 1) {
          const newOtp = [...otp];
          newOtp[index] = value;
          setOtp(newOtp);
    
          if (index < otp.length - 1 && value !== '') {
            inputRefs[index + 1].current.focus();
          }
        } else if (value === '' && index > 0) {
          // If backspace is pressed and the input field is empty, move focus to the previous input
          inputRefs[index - 1].current.focus();
        }
    };
    
    const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
        e.preventDefault();
        if (index > 0) {
        // Move focus to the previous input
        inputRefs[index - 1].current.focus();
        }
        // Clear the current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
    }
    };

    const handleScreenChange = (screenId) => {
    setActiveScreen(screenId);
    };

    return(
        <>
        <div className="sign-in-up-bx">
            
            <div className={`signinup-screen ${activeScreen === 'login-screen' ? 'active' : ''}`} id="login-screen">

                <div className="screen-hed">Log in or sign up {props.screenhed}</div>

                <form>

                    <div className="row">
                        <div className="col-12">
                            <div className="signinup-group sgli">
                                <label className="group__label">Phone Number</label>
                                <input type="number" placeholder="Enter phone number" />
                                <span className="group_left_icon">+91</span>
                            </div>
                        </div>
                    </div>

                    <div className="site-info text-center">
                        By continuing you agree to adstar's <a href="/">Terms & Conditions</a>, including <a href="/">Additional Terms</a>, and <a href="/">Privacy Policy</a>.
                    </div>

                    <button onClick={() => handleScreenChange('otp-screen')} type="button" className="login-submit-btn" >Continue</button> {/* disabled */}

                    <button onClick={() => handleScreenChange('registration-screen')} type="button" className="lsb-loader-btn">
                        <img src={Img.loading} alt="Please wait" />Please wait ....
                    </button>

                    <div className="logins-btn">
                        <a className="login-commun-btn facebook-btn" href="/">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fillRule="evenodd" />
                            </svg>
                            <span>Continue with Facebook</span>
                        </a>

                        {/* <a className="login-commun-btn instagram-btn" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                <path
                                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                <path
                                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                            </svg>
                            <span>Continue with Instagram</span>
                        </a>
                    
                        <a className="login-commun-btn google-btn" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                <path
                                    d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
                            </svg>
                            <span>Continue with Google</span>
                        </a> */}
                    </div>

                </form>

                <Link className="back-link-tag" to="/">
                    <i className="fa fa-angle-left"></i>Back to home
                </Link>

            </div>

            <div className={`signinup-screen ${activeScreen === 'otp-screen' ? 'active' : ''}`} id="otp-screen">

                <div className="screen-hed">Verify OTP</div>
                <div className="otp-sent-msg">Enter 6 digit OTP sent to <span>+918320289867</span><div className="edit-this" onClick={() => handleScreenChange('login-screen')}><i className="fa fa-pencil-square-o"></i>Edit</div></div>
                
                <form>

                    <div className="row">
                        <div className="col-12">
                            <div className="signinup-group otp-group">
                            {otp.map((digit, index) => (
                                <input key={index}  inputMode="numeric" type="text" maxLength="1" placeholder=" " value={digit} onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} ref={inputRefs[index]} />
                            ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="otp-sent-msg mt-0">Didn't get the OTP? <span>Resend OTP in 30s</span></div>
                        <button type="button" className="resend-otp-btn" disabled>Resend OTP</button>
                    </div>

                    <div className="site-info text-center mt-1">
                        By continuing you agree to adstar's <a href="/">Terms & Conditions</a>, including <a href="/">Additional Terms</a>, and <a href="/">Privacy Policy</a>.
                    </div>

                    <button type="button" className="login-submit-btn" disabled>Continue</button>

                    <button type="button" className="lsb-loader-btn">
                        <img src={Img.loading} alt="Please wait" />Please wait ....
                    </button>

                </form>

                <Link className="back-link-tag" to="/">
                    <i className="fa fa-angle-left"></i>Back to home
                </Link>
            </div>
   
            <div className={`signinup-screen mw768ss ${activeScreen === 'registration-screen' ? 'active' : ''}`} id="registration-screen">

                <div className="screen-hed">Finish signing up {props.screenhed}</div>
                <div className="screen-pera">You'll need a free adstar account in order to follow your favorite celebrities and get other adstar news & special offers</div>

                <form>

                    <div className="row">

                        <div className="col-12">
                            <div className="signinup-group">
                                <label className="group__label">Gender</label>
                                <div className="signinup-group-radio">
                                    <input type="radio" id="male" name="gender" hidden/>
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" id="female" name="gender" hidden/>
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="signinup-group">
                                <label className="group__label">Your Name</label>
                                <input type="text" placeholder="Enter your name"/>
                            </div>
                        </div>

                        <div className={`col-sm-6 ${props.startfield}`}>
                            <div className="signinup-group sgri">
                                <label className="group__label">Your Categorie</label>
                                <select defaultValue="Selectcategorie">
                                    <option value="Selectcategorie" disabled>Select categorie</option>
                                    <option value="Actors">Actors</option>
                                    <option value="Athletes">Athletes</option>
                                    <option value="Comedians">Comedians</option>
                                    <option value="Creators">Creators</option>
                                    <option value="Musicians">Musicians</option>
                                    <option value="RealityTV">Reality TV</option>
                                </select>
                                <span className="down-icon"></span>
                            </div>
                        </div>

                        <div className={`col-sm-6 ${props.startfield}`}>
                            <div className="signinup-group">
                                <label className="group__label">Your Designation</label>
                                <input type="text" placeholder="Enter your Designation"/>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="signinup-group sgli">
                                <label className="group__label">Phone Number</label>
                                <input type="number" placeholder="Enter phone number"/>
                                <span className="group_left_icon">+91</span>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="signinup-group error-group">
                                <label className="group__label">Your email</label>
                                <input type="email" placeholder="you@example.com"/>
                                <span className="form-error-msg">You must provide an email</span>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="signinup-group">
                                <label className="group__label">Date of birth</label>
                                <input type="text" inputMode="numeric"  value={bodValue}  onChange={handlebodChange} placeholder="DD/MM/YYYY"/>
                                <span className="clear-input-icon" hidden={isbodShow} onClick={handlebodClear}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="site-info mt-1">By submitting this form, you agree to receive recurring automated promotional and personalized marketing text messages from adstar at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. View <a href="/">Terms</a> & <a href="/">Privacy</a>.</div> */}

                    <div className="site-info text-center">
                        By continuing you agree to adstar's <a href="/">Terms & Conditions</a>, including <a href="/">Additional Terms</a>, and <a href="/">Privacy Policy</a>.
                    </div>

                    <button type="button"  className="login-submit-btn" disabled>Continue</button>

                    <button type="button"  className="lsb-loader-btn">
                        <img src={Img.loading} alt="Please wait" />Please wait ....
                    </button>

                    <div onClick={() => handleScreenChange('login-screen')} className="signuptooglebtn text-center mt-4">Already have an account?<span>Log in</span></div>

                </form>

                <Link className="back-link-tag mt-4" to="/">
                    <i className="fa fa-angle-left"></i>Back to home
                </Link>
            </div>

        </div>
        </>
    )
}
export default Loginform;

Loginform.defaultProps = {
    startfield: "d-none",
}