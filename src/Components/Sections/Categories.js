import React from 'react';
import {Link} from "react-router-dom";

// Images Common File
import * as Img from './Img';

function Categories(props) {

    return (
      <>
        <section className="pt-5">
          <div className="container-lg cl-custom">
            <div className={`section-heading ${props.extraClass}`}>{props.pagetitle}</div>
            <div className="custom-row-categories">
              
              <Link to="/search" className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Actors</div>
                </div>
              </Link>
            
              <Link to="/search" className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Athletes</div>
                </div>
              </Link>
            
              <Link to="/search" className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Comedians</div>
                </div>
              </Link>

              <Link to="/search" className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Creators</div>
                </div>
              </Link>

              <Link to="/search" className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Musicians</div>
                </div>
              </Link>

              <Link to="/search" className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Reality TV</div>
                </div>
              </Link>

              <Link to="/search" className="crc-item crc-view-all">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <div className="crc-text">View All</div>
                  </div>
                </div>
              </Link>

              {/* --- skeletant start --- */}
              {/* <div className="crc-item skeletant-bx">
                <div className="crc-item-inner">
                  <div className="crc-img skeletant-design border-0"></div>
                  <div className="skeletant-design ld4 mx-auto mt-3"></div>
                </div>
              </div> */}
              {/* --- skeletant end --- */}

            </div>
          </div>
        </section>
      </>
    );
}
  
export default Categories;
  