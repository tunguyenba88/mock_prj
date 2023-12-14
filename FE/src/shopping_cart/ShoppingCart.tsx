import { FC, useEffect } from 'react';
import ScrollToTopOnMount from '../template/ScrollToTopOnMount';
import './index.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteFromCart, getCart } from '../store/cart/actions';
import { ProductType } from '../types/product.type';

const ShoppingCart: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.cart.data);
  let totalPrice = 0;

  data?.forEach((cartItem: ProductType) => (totalPrice += cartItem.price));

  const handleDelete = (cartItem: ProductType) => {
    dispatch(deleteFromCart(cartItem));
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className='container main-content mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />
      <h2>Cart</h2>
      {data?.length != 0 ? (
        <div className='row mb-4'>
          <div className='col-md-8'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Movie</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((cartItem: ProductType, index: number) => (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.price}$</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-danger'
                          onClick={() => handleDelete(cartItem)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Total</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{totalPrice}$</h6>
                <button type='button' className='btn btn-primary btn-block'>
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No movies in the cart</p>
      )}
    </div>
  );
};

export default ShoppingCart;
