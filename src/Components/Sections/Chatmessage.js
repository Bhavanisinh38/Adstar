import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from './Img';

function Chatmessage() {

    return (
      <>
      {/* --- Chatmessage Breadcrumb Start --- */}
      <div className="breadcrumb-outer bctwo">
          <div className="breadcrumb-bx px-3">
              {/* <div className="breadcrumb-back" title="Back" data-bs-dismiss="modal" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" color="#F2F1F3" width="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
              </div> */}
              <img src={Img.demo_img1} alt="User Name" />
              <div className="breadcrumb-text-data">
                <div className="bc-lable">Bhavanisinh Parmar</div>
                <div className="bc-sub-lable">Last seen today at 7:05pm</div>
              </div>
          </div>

          <span style={{top:"15px"}} className="close-icon" data-bs-dismiss="modal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"></path>
              </svg>
          </span>

      </div>
      {/* --- Chatmessage Breadcrumb end --- */}

      {/* --- Chat message bx start --- */}
      <form>
        <div className="chatting-bx commonscrollbarhide">

          <div className="chatting-msg-bx">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate recusandae quis quam dolorum repellendus dicta ut! Labore perspiciatis optio nemo, exercitationem recusandae ratione, tenetur qui explicabo obcaecati ea quisquam asperiores illum excepturi atque in esse sint quos dolore incidunt molestiae porro voluptatum quidem tempore? Corrupti repudiandae assumenda obcaecati illum asperiores.
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx chatme">
            <Link to="https://fonts.google.com/">https://fonts.google.com/</Link>
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate recusandae quis quam dolorum repellendus dicta ut! Labore perspiciatis optio nemo, exercitationem recusandae ratione, tenetur qui explicabo obcaecati ea quisquam asperiores illum excepturi atque in esse sint quos dolore incidunt molestiae porro voluptatum quidem tempore? Corrupti repudiandae assumenda obcaecati illum asperiores.
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx chatme">
            <Link to="https://fonts.google.com/">https://fonts.google.com/</Link>
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate recusandae quis quam dolorum repellendus dicta ut! Labore perspiciatis optio nemo, exercitationem recusandae ratione, tenetur qui explicabo obcaecati ea quisquam asperiores illum excepturi atque in esse sint quos dolore incidunt molestiae porro voluptatum quidem tempore? Corrupti repudiandae assumenda obcaecati illum asperiores.
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx chatme">
            <Link to="https://fonts.google.com/">https://fonts.google.com/</Link>
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate recusandae quis quam dolorum repellendus dicta ut! Labore perspiciatis optio nemo, exercitationem recusandae ratione, tenetur qui explicabo obcaecati ea quisquam asperiores illum excepturi atque in esse sint quos dolore incidunt molestiae porro voluptatum quidem tempore? Corrupti repudiandae assumenda obcaecati illum asperiores.
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx chatme">
            <Link to="https://fonts.google.com/">https://fonts.google.com/</Link>
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate recusandae quis quam dolorum repellendus dicta ut! Labore perspiciatis optio nemo, exercitationem recusandae ratione, tenetur qui explicabo obcaecati ea quisquam asperiores illum excepturi atque in esse sint quos dolore incidunt molestiae porro voluptatum quidem tempore? Corrupti repudiandae assumenda obcaecati illum asperiores.
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatting-msg-bx chatme">
            <Link to="https://fonts.google.com/">https://fonts.google.com/</Link>
            <span className="chattingtime">7:05pm</span>
          </div>

          <div className="chatmessage-type-bx">
            <div className="signinup-group">
                <input type="text" placeholder="Type a message"/>
            </div>
            <button className="chat-send-btn" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>
            </button>
          </div>

        </div>
      </form>
      {/* --- Chat message bx end --- */}
      </>
    );
}

export default Chatmessage;