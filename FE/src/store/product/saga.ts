import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getListPostSuccess,
  getListPostFailure,
  getProductByIdFailure,
  getProductByIdSuccess,
  filterProductSuccess,
  filterProductFailure,
} from './actions';
import { getPostData, getProductByIdData } from '../../api/product';

function* getListPostSaga() {
  try {
    const res = yield call(getPostData);
    const data = res.data.sort((a: any, b: any) => b.view - a.view).slice(0, 6);
    yield put(getListPostSuccess(data));
  } catch (error) {
    yield put(getListPostFailure(error));
  }
}

function* getProductByIdSaga(action: any) {
  try {
    const res = yield call(getProductByIdData, action.payload.id);
    const rel = yield call(getPostData);

    const data = res.data;
    const related = rel.data
      .filter((movie: any) => movie.type.find((i: string) => data.type.includes(i)))
      .slice(0, 4)
      .filter((movie: any) => movie.id != data.id);
    yield put(getProductByIdSuccess({ ...data, related: related }));
  } catch (error) {
    yield put(getProductByIdFailure(error));
  }
}

function* filterProductSaga(action: any) {
  try {
    const res = yield call(getPostData);
    const data = res.data;
    let dataFilter = data;

    if (action.payload.genre) {
      dataFilter = dataFilter.filter((movie: any) =>
        movie.type.find((i: string) => i.toLowerCase() == action.payload.genre)
      );
    }
    if (action.payload.ratings) {
      dataFilter = dataFilter.filter((movie: any) => movie.ratings > action.payload.ratings);
    }
    if (action.payload.min_price) {
      dataFilter = dataFilter.filter((movie: any) => movie.price >= action.payload.min_price);
    }
    if (action.payload.max_price) {
      dataFilter = dataFilter.filter((movie: any) => movie.price <= action.payload.max_price);
    }
    if (action.payload.search) {
      if (action.payload.type == '') {
        dataFilter = dataFilter.filter(
          (movie: any) =>
            movie.name.toLowerCase().includes(action.payload.search.toLowerCase()) ||
            movie.actor.find((actor: string) =>
              actor.toLowerCase().includes(action.payload.search.toLowerCase())
            )
        );
      }

      if (action.payload.type == 'name') {
        dataFilter = dataFilter.filter((movie: any) => {
          return movie.name.toLowerCase().includes(action.payload.search.toLowerCase());
        });
      }

      if (action.payload.type == 'actor') {
        dataFilter = dataFilter.filter((movie: any) =>
          movie.actor.find((actor: string) =>
            actor.toLowerCase().includes(action.payload.search.toLowerCase())
          )
        );
      }
    }
    if (action.payload.sort == true) {
      dataFilter.sort((a: any, b: any) => b.year - a.year);
    }
    yield put(filterProductSuccess(dataFilter));
  } catch (error) {
    yield put(filterProductFailure(error));
  }
}

export function* postsSaga() {
  yield takeEvery('GET_LIST_POST', getListPostSaga);
  yield takeEvery('GET_PRODUCT_BY_ID', getProductByIdSaga);
  yield takeEvery('FILTER_PRODUCT', filterProductSaga);
}

export default postsSaga;
