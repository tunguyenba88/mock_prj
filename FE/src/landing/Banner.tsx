import { useState } from 'react';
import ReactPlayer from 'react-player';

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
      {showVideo ? (
        <ReactPlayer
          id='react-player'
          url='video/1.mp4'
          playing
          width='100%'
          height='100%'
          onEnded={() => handleVideoEnd()}
        />
      ) : (
        <img
          style={{ width: '100%', height: '100%' }}
          src='/images/Banner.jpg'
          alt='Gallery Image'
          onClick={handleClick}
        />
      )}
    </div>
  );
};
export default Banner;
