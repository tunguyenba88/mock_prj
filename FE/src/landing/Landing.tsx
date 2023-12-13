import React, { FC } from 'react';
import Banner from './Banner';
import FeatureProduct from './FeatureProduct';
import ScrollToTopOnMount from '../template/ScrollToTopOnMount';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListPost } from '../store/product/actions';
import { ProductType } from '../types/product.type';

const Landing: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.post.data);
  const loading = useSelector((state: any) => state.post.loading);
  const error = useSelector((state: any) => state.post.error);

  useEffect(() => {
    dispatch(getListPost());
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className='d-flex flex-column bg-white py-4'>
        <div className='d-flex justify-content-center'>
          <Link to='/products' className='btn btn-primary' replace>
            Browse movies
          </Link>
        </div>
      </div>
      <h2 className='text-muted text-center mt-4 mb-3'>Most Popular</h2>
      <div className='container pb-5 px-lg-5'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5'>
          {data &&
            data.map((movie: ProductType) => (
              <div key={movie.id}>
                <FeatureProduct movie={movie} />
              </div>
            ))}
        </div>
      </div>
      <div className='d-flex flex-column bg-white py-4'>
        <h5 className='text-center mb-3'>Follow us on</h5>
        <div className='d-flex justify-content-center'>
          <a href='!#' className='me-3'>
            <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' />
          </a>
          <a href='!#'>
            <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
          </a>
          <a href='!#' className='ms-3'>
            <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' />
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
