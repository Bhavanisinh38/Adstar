// Images Common File
import * as Img from './Img';

// Design File
import Celebrityvideo from "../SingleItem/Celebrityvideo";

function Videosection(props) {
  
  return (
    <>
      <section className="pt-5">
        <div className="container-lg cl-custom">
          <div className="section-heading">{props.pagetitle}</div>
          <div className={` celebrity-section-outer ${props.ClassCso} `}>
            <Celebrityvideo src={Img.demo_video}/>
            <Celebrityvideo src={Img.demo_video2}/>
            <Celebrityvideo src={Img.demo_video3}/>
            <Celebrityvideo src={Img.demo_video}/>
            <Celebrityvideo src={Img.demo_video2}/>
            <Celebrityvideo src={Img.demo_video3}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Videosection;
