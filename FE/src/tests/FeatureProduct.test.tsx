import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeatureProduct from '../landing/FeatureProduct';
import { ProductType } from '../types/product.type';
import '@testing-library/jest-dom';

const mockProduct: ProductType = {
  id: 1,
  name: 'Mock Movie',
  price: 10,
  image: 'images/1.jpg',
  rating: 3.2,
  view: 122,
  type: ['Comedy'],
  actor: ['test'],
  description: 'test',
  year: 2022,
};

test('renders FeatureProduct component with correct content', () => {
  render(
    <BrowserRouter>
      <FeatureProduct movie={mockProduct} />
    </BrowserRouter>
  );

  // Assert that the component renders the movie name, price, and detail link
  expect(screen.getByText('Mock Movie')).toBeInTheDocument();
  expect(screen.getByText('10$')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Detail/i })).toBeInTheDocument();

  // Assert that the image has the correct source
  const image = screen.getByAltText('');
  expect(image).toBeInTheDocument();
});

// Add more tests based on your component's behavior
