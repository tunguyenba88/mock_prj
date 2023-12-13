import { all, fork } from 'redux-saga/effects';

import postsSaga from './product/saga';
import cartSaga from './cart/saga';

export function* rootSaga() {
  yield all([fork(postsSaga), fork(cartSaga)]);
}
