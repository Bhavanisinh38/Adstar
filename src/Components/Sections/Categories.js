// Images Common File
import * as Img from './Img';

function Categories(props) {

    return (
      <>
        <section className="pt-5">
          <div className="container-lg cl-custom">
            <div className={`section-heading ${props.extraClass}`}>{props.pagetitle}</div>
            <div className="custom-row-categories">
              
              <div className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Actors</div>
                </div>
              </div>
            
              <div className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Athletes</div>
                </div>
              </div>
            
              <div className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Comedians</div>
                </div>
              </div>

              <div className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Creators</div>
                </div>
              </div>

              <div className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Musicians</div>
                </div>
              </div>

              <div className="crc-item">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <img src={Img.demo_img1} alt="demo Img" />
                  </div>
                  <div className="crc-name">Reality TV</div>
                </div>
              </div>

              <div className="crc-item crc-view-all">
                <div className="crc-item-inner">
                  <div className="crc-img">
                    <div className="crc-text">View All</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    );
}
  
export default Categories;
  