import {
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  DELETE_FROM_CART,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_FAILURE,
} from './actionTypes';

export const getCart = () => {
  return {
    type: GET_CART,
  };
};

export const getCartSuccess = (payload: any) => {
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};
export const getCartFailure = (payload: any) => {
  return {
    type: GET_CART_FAILURE,
    payload,
  };
};

export const addToCart = (payload: any) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const addToCartSuccess = (payload: any) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload,
  };
};
export const addToCartFailure = (payload: any) => {
  return {
    type: ADD_TO_CART_FAILURE,
    payload,
  };
};

export const deleteFromCart = (payload: any) => {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
};

export const deleteFromCartSuccess = (payload: any) => {
  return {
    type: DELETE_FROM_CART_SUCCESS,
    payload,
  };
};
export const deleteFromCartFailure = (payload: any) => {
  return {
    type: DELETE_FROM_CART_FAILURE,
    payload,
  };
};
