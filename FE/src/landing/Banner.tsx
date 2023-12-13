import Image from '../../public/images/Banner.jpg';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPlayer from 'react-player';
import './Banner.scss';

const Banner: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoEnd = () => {
    console.log('test');
    setShowVideo(false);
  };
  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div style={{ marginTop: '56px' }}>
      <CSSTransition in={!showVideo} timeout={300} classNames='fade' unmountOnExit>
        <img src={Image} alt='Gallery Image' onClick={handleClick} />
      </CSSTransition>
      <CSSTransition in={showVideo} timeout={300} classNames='fade' unmountOnExit>
        <div>
          <ReactPlayer
            url='video/1.mp4'
            playing
            width='100%'
            height='100%'
            onEnded={() => handleVideoEnd()}
          />
        </div>
      </CSSTransition>
    </div>
  );
};
export default Banner;
