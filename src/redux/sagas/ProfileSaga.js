import {call, apply, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_PROFILE_INFO,
  LOAD_PROFILE_INFO_SUCCESS,
} from '../types/profile-types';
import API_KEY from './../../../apikey';

function* loadProfileData() {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/users.get?fields=education,photo_100,bdate,city,country,counters,career,domain,status,exports&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);

  yield put({type: LOAD_PROFILE_INFO_SUCCESS, profileInfo: data.response[0]});
}

export default function* profileSagaInfo() {
  yield takeEvery(LOAD_PROFILE_INFO, loadProfileData);
}
