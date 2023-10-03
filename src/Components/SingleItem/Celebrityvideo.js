import React, { useEffect, useRef, useState } from 'react';

import * as Img from '../Sections/Img';

function Celebrityvideo({src}) {
  const [isshow, setIsshow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start with muted state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Update duration and set a listener for time updates
    video.addEventListener('durationchange', () => {
      setDuration(video.duration);
    });

    video.addEventListener('timeupdate', () => {
      setCurrentTime(video.currentTime);
    });

    // Listen for the "canplaythrough" event to know when the video is ready to play.
    video.addEventListener('canplaythrough', () => {
      
    });

  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsMuted(false);
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;

    // Check if the video is ready to play
    if (video.readyState >= 1) {
      video.play();
      setIsPlaying(true);
      setIsshow(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <>
        <div className="celebrity-video-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video className="celebrity-video" playsInline webkit-playsinline="true" muted={isMuted} loop ref={videoRef}>
              <source src={src} type="video/mp4" />
            </video>
            <span className='cvi-duration'>{formatTime(duration)}</span>
            <div className="cvi-data-bx">
              <div className="cvi-data-celebrity">
                  <img src={Img.demo_img1} alt="Celebrity Name ...." />
                  <div className="cdc-data">
                  <div className="cdc-data-name">Calebrity Name</div>
                  <div className="cdc-data-tagline">Actors</div>
                  </div>
              </div>
              <div className="cvi-controls">
                  <div className={`cvi-play-btn ${isshow ? '' : 'd-none'}`} onClick={togglePlay}>
                  {isPlaying && isHovered ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd"></path>
                  </svg>
                  ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd"/>
                  </svg>
                  )}
                  </div>
                  <div className="cvi-time">
                  <span>{formatTime(currentTime)}</span>
                  <span>/</span>
                  <span>{formatTime(duration)}</span>
                  </div>
                  <div className="cvi-volume-btn" onClick={toggleMute}>
                  {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                  ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                  )}
                  </div>
              </div>
            </div>
        </div>
    </>
  );
}

export default Celebrityvideo;
