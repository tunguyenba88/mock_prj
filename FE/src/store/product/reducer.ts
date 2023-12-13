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

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LIST_POST:
      return { ...state, loading: true, error: null };
    case GET_LIST_POST_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_LIST_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const producDetailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID:
      return { ...state, loading: true, error: null };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FILTER_PRODUCT:
      return { ...state, loading: true, error: null };
    case FILTER_PRODUCT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FILTER_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
