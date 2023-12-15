import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../landing/Banner';
import { BrowserRouter } from 'react-router-dom';

test('renders Banner component with image initially', () => {
  render(
    <BrowserRouter>
      <Banner />
    </BrowserRouter>
  );
  const imageElement = screen.getByAltText('Gallery Image');
  expect(imageElement).toBeInTheDocument();
});

test('calls handleClick when image is clicked', () => {
  render(
    <BrowserRouter>
      <Banner />
    </BrowserRouter>
  );
  const imageElement = screen.getByAltText('Gallery Image');

  fireEvent.click(imageElement);

  const videoElement = document.getElementById('react-player');
  expect(videoElement).toBeInTheDocument();
});

// test('sets showVideo to false when video ends', async () => {
//   render(
//     <BrowserRouter>
//       <Banner />
//     </BrowserRouter>
//   );
//   const imageElement = screen.getByAltText('Gallery Image');
//   fireEvent.click(imageElement);

//   const videoElement = document.getElementById('react-player');
//   expect(videoElement).toBeInTheDocument();

//   await new Promise((r) => setTimeout(r, 20000));

//   const updatedImageElement = screen.getByAltText('Gallery Image');
//   expect(updatedImageElement).toBeInTheDocument();
// }, 20000);
