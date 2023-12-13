import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../../types/product.type';

interface RelatedProductProps {
  movie: ProductType;
}

const RelatedProduct: FC<RelatedProductProps> = ({ movie }) => {
  return (
    <Link to={`/products/${movie.id}`} className='col text-decoration-none' replace>
      <div className='card shadow-sm'>
        <img
          className='card-img-top bg-dark'
          height='200'
          loading='lazy'
          alt=''
          src={`../images/${movie.image}`}
        />
        <div className='card-body'>
          <h5 className='card-title text-center text-dark text-truncate'>{movie.name}</h5>
          <p className='card-text text-center text-muted'>{movie.price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedProduct;
