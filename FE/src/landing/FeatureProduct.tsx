import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product.type';

interface Props {
  movie: ProductType;
}

const FeatureProduct: FC<Props> = ({ movie }: Props) => {
  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <img
          className='card-img-top bg-dark'
          loading='lazy'
          height='240'
          alt=''
          src={`images/${movie.image}`}
        />
        <div className='card-body'>
          <h5 className='card-title text-center'>{movie.name}</h5>
          <p className='card-text text-center text-muted'>{movie.price}$</p>
          <div className='d-grid gap-2'>
            <Link to={`/products/${movie.id}`} className='btn btn-outline-dark' replace>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
