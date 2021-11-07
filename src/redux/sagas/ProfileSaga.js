import {call, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_PROFILE_INFO,
  LOAD_PROFILE_INFO_SUCCESS,
  LOAD_PROFILE_INFO_FAILURE,
  LOAD_PROFILE_PHOTOS,
  LOAD_PROFILE_PHOTOS_SUCCESS,
  LOAD_PROFILE_PHOTOS_FAILURE,
} from '../types/profile-types';
import {
  getProfileInfoAPI,
  getProfilePhotosAPI,
} from './../../services/profileAPI';

function* loadProfileInfo() {
  const data = yield call(getProfileInfoAPI);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_PROFILE_INFO_FAILURE, error: data.error.error_msg});
  } else {
    yield put({type: LOAD_PROFILE_INFO_SUCCESS, profileInfo: data.response[0]});
  }
}

function* loadProfilePhotos() {
  const data = yield call(getProfilePhotosAPI);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_PROFILE_PHOTOS_FAILURE, error: data.error.error_msg});
  } else {
    const photos = [];
    data.response.items.forEach(item => {
      item.sizes.forEach(size => {
        if (size.type === 'm') {
          photos.push(size.url);
        }
      });
    });
    yield put({
      type: LOAD_PROFILE_PHOTOS_SUCCESS,
      profilePhotos: photos,
    });
  }
}

export function* profileSagaInfo() {
  yield takeEvery(LOAD_PROFILE_INFO, loadProfileInfo);
}

export function* profileSagaPhotos() {
  yield takeEvery(LOAD_PROFILE_PHOTOS, loadProfilePhotos);
}
