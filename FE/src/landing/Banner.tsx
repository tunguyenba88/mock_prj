import { useState } from 'react';
import ReactPlayer from 'react-player';
import './Banner.scss';
import { useNavigate } from 'react-router-dom';

const Banner: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleVideoEnd = () => {
    console.log('test');
    setShowVideo(false);
    setShowButton(true);
  };
  const handleClick = () => {
    setShowVideo(true);
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products');
  };

  return (
    <div className='banner'>
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
        <div>
          <button className='btn-img'>
            <img
              style={{ width: '100%', height: '100%' }}
              src='/images/Banner.jpg'
              alt='Gallery Image'
              onClick={handleClick}
            />
          </button>
          {showButton && (
            <button
              type='button'
              className='btn btn-secondary btn-lg center'
              onClick={handleNavigate}
            >
              Buy Now
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default Banner;
