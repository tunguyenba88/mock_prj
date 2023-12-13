import { put, takeEvery } from 'redux-saga/effects';
import {
  getCartFailure,
  getCartSuccess,
  addToCartSuccess,
  addToCartFailure,
  deleteFromCartSuccess,
  deleteFromCartFailure,
} from './actions';

function* getCartSaga() {
  try {
    let data;
    if (localStorage.getItem('cart')) {
      data = JSON.parse(localStorage.getItem('cart'));
    } else {
      data = [];
    }
    yield put(getCartSuccess(data));
  } catch (error) {
    yield put(getCartFailure(error));
  }
}

function* addToCartSaga(action: any) {
  try {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    const duplicates = cart.filter((cartItem: any) => cartItem.id === action.payload.id);
    if (duplicates.length === 0) {
      const productToAdd = {
        ...action.payload,
      };

      cart.push(productToAdd);

      localStorage.setItem('cart', JSON.stringify(cart));

      yield put(addToCartSuccess(cart));
    }
  } catch (error) {
    yield put(addToCartFailure(error));
  }
}

function* deleteFromCartSaga(action: any) {
  try {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    const updatedCart = cart.filter((cartItem: any) => cartItem.id !== action.payload.id);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    yield put(deleteFromCartSuccess(updatedCart));
  } catch (error) {
    yield put(deleteFromCartFailure(error));
  }
}

export function* cartSaga() {
  yield takeEvery('GET_CART', getCartSaga);
  yield takeEvery('ADD_TO_CART', addToCartSaga);
  yield takeEvery('DELETE_FROM_CART', deleteFromCartSaga);
}

export default cartSaga;
