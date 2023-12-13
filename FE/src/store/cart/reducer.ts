import {
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  DELETE_FROM_CART,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_FAILURE,
  GET_CART,
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
} from './actionTypes';

interface DataState {
  data: any;
  loading: boolean;
  error: any;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CART:
      return { ...state, loading: true, error: null };
    case GET_CART_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_CART:
      return { ...state, loading: true, error: null };
    case ADD_TO_CART_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ADD_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_FROM_CART:
      return { ...state, loading: true, error: null };
    case DELETE_FROM_CART_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case DELETE_FROM_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
