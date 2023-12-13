import {
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
  GET_LIST_POST_FAILURE,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
  FILTER_PRODUCT,
  FILTER_PRODUCT_SUCCESS,
  FILTER_PRODUCT_FAILURE,
} from './actionTypes';

export const getListPost = () => {
  return {
    type: GET_LIST_POST,
  };
};

export const getListPostSuccess = (payload: any) => {
  return {
    type: GET_LIST_POST_SUCCESS,
    payload,
  };
};
export const getListPostFailure = (payload: any) => {
  return {
    type: GET_LIST_POST_FAILURE,
    payload,
  };
};

export const getProductById = (id: number) => {
  return {
    type: GET_PRODUCT_BY_ID,
    payload: { id },
  };
};

export const getProductByIdSuccess = (payload: any) => {
  return {
    type: GET_PRODUCT_BY_ID_SUCCESS,
    payload,
  };
};
export const getProductByIdFailure = (payload: any) => {
  return {
    type: GET_PRODUCT_BY_ID_FAILURE,
    payload,
  };
};

export const filterProduct = (payload: any) => {
  return {
    type: FILTER_PRODUCT,
    payload,
  };
};

export const filterProductSuccess = (payload: any) => {
  return {
    type: FILTER_PRODUCT_SUCCESS,
    payload,
  };
};

export const filterProductFailure = (payload: any) => {
  return {
    type: FILTER_PRODUCT_FAILURE,
    payload,
  };
};
