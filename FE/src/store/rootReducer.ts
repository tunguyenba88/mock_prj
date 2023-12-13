import { combineReducers } from 'redux';
import { filterReducer, postsReducer, producDetailReducer } from './product/reducer';
import { cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
  post: postsReducer,
  detail: producDetailReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export type PostState = ReturnType<typeof rootReducer>;
export default rootReducer;
