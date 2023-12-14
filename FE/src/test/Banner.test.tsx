import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../landing/Banner';

test('renders Banner component with image initially', () => {
  render(<Banner />);
  const imageElement = screen.getByAltText('Gallery Image');
  expect(imageElement).toBeInTheDocument();
});

test('calls handleClick when image is clicked', () => {
  render(<Banner />);
  const imageElement = screen.getByAltText('Gallery Image');

  fireEvent.click(imageElement);

  const videoElement = document.getElementById('react-player');
  expect(videoElement).toBeInTheDocument();
});

test('sets showVideo to false when video ends', () => {
  render(<Banner />);
  const imageElement = screen.getByAltText('Gallery Image');
  fireEvent.click(imageElement);

  const videoElement = document.getElementById('react-player');
  fireEvent.ended(videoElement);

  const updatedImageElement = screen.getByAltText('Gallery Image');
  expect(updatedImageElement).toBeInTheDocument();
});

test('applies inline styles correctly', () => {
  render(<Banner />);
  const containerElement = screen.getByAltText('Gallery Image').parentElement;

  expect(containerElement).toHaveStyle({ marginTop: '56px' });
});
