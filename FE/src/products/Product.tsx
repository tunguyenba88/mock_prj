import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductType } from '../types/product.type';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/actions';

interface Props {
  movie: ProductType;
}
const Product: FC<Props> = ({ movie }: Props) => {
  const dispatch = useDispatch();

  const handleAddCart = (data: ProductType) => {
    dispatch(addToCart(data));
  };
  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <Link to={`/products/${movie.id}`} replace>
          <img
            className='card-img-top bg-dark'
            loading='lazy'
            height='200'
            alt=''
            src={`images/${movie.image}`}
          />
        </Link>
        <div className='card-body'>
          <h5 className='card-title text-center text-dark text-truncate'>{movie.name}</h5>
          <p className='card-text text-center text-muted mb-0'>{movie.price}$</p>
          <div className='d-grid d-block'>
            <button
              type='button'
              className='btn btn-outline-dark mt-3'
              onClick={() => handleAddCart(movie)}
            >
              <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
