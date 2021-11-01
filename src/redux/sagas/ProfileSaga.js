import {call, apply, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_PROFILE_INFO,
  LOAD_PROFILE_INFO_SUCCESS,
  LOAD_PROFILE_INFO_FAILURE,
  LOAD_PROFILE_PHOTOS,
  LOAD_PROFILE_PHOTOS_SUCCESS,
  LOAD_PROFILE_PHOTOS_FAILURE,
} from '../types/profile-types';
import API_KEY from './../../../apikey';

function* loadProfileInfo() {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/users.get?fields=education,photo_100,bdate,city,country,counters,career,domain,status,exports&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_PROFILE_INFO_FAILURE, error: data.error.error_msg});
  } else {
    yield put({type: LOAD_PROFILE_INFO_SUCCESS, profileInfo: data.response[0]});
  }
}

function* loadProfilePhotos() {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/photos.getAll?&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
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
