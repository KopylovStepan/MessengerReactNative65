import {call, apply, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_FRIENDS,
  LOAD_FRIENDS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
} from '../types/friends-types';
import API_KEY from './../../../apikey';

function* loadFriends() {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/friends.get?fields=photo_50,city&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_FRIENDS_FAILURE, error: data.error.error_msg});
  } else {
    yield put({type: LOAD_FRIENDS_SUCCESS, friends: data.response.items});
  }
}

export function* friendsSaga() {
  yield takeEvery(LOAD_FRIENDS, loadFriends);
}
