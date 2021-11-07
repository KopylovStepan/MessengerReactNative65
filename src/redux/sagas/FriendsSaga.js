import {call, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_FRIENDS,
  LOAD_FRIENDS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
} from '../types/friends-types';
import {getFriendsAPI} from './../../services/friendsAPI';

function* loadFriends() {
  const data = yield call(getFriendsAPI);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_FRIENDS_FAILURE, error: data.error.error_msg});
  } else {
    yield put({type: LOAD_FRIENDS_SUCCESS, friends: data.response.items});
  }
}

export function* friendsSaga() {
  yield takeEvery(LOAD_FRIENDS, loadFriends);
}
