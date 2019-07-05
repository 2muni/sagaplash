import { takeEvery, select, call, put } from 'redux-saga/effects';
import { requestImages } from '../API';
import action, { types } from '../Actions';

const { fetchImages } = action;

export function* loadImages() {
  try {
    const { nextPage } = yield select(({ images }) => images);
    const { data } = yield call(requestImages, nextPage);
    yield put(fetchImages.success(data));
  } catch ({ response: { status } }) {
    yield put(fetchImages.failure(status));
  }
}

export default function* watcher() {
  yield takeEvery(types.FETCH_IMAGES.REQUEST, loadImages);
}
