import {call, apply, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAILURE,
  LOAD_PEOPLE,
  LOAD_PEOPLE_SUCCESS,
  LOAD_PEOPLE_FAILURE,
  LOAD_GROUPS,
  LOAD_GROUPS_SUCCESS,
  LOAD_GROUPS_FAILURE,
} from '../types/search-types';
import API_KEY from './../../../apikey';

function* loadAll(action) {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/search.getHints?filters=friends,groups&fields=photo_50,city&q=${
      action.searchText ? action.searchText : ' '
    }&limit=20&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_ALL_FAILURE, error: data.error.error_msg});
  } else {
    yield put({type: LOAD_ALL_SUCCESS, allData: data.response.items});
  }
}

function* loadPeople(action) {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/users.search?q=${
      action.searchText ? action.searchText : ' '
    }&fields=photo_50,city&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_PEOPLE_FAILURE, error: data.error.error_msg});
  } else {
    yield put({type: LOAD_PEOPLE_SUCCESS, peopleData: data.response.items});
  }
}

function* loadGroups(action) {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/groups.search?q=${
      action.searchText ? action.searchText : ' '
    }&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_GROUPS_FAILURE, error: data.error.error_msg});
  } else {
    yield put({type: LOAD_GROUPS_SUCCESS, groupsData: data.response.items});
  }
}

export function* groupsAndPeopleSaga() {
  yield takeEvery(LOAD_ALL, loadAll);
}

export function* peopleSaga() {
  yield takeEvery(LOAD_PEOPLE, loadPeople);
}

export function* groupsSaga() {
  yield takeEvery(LOAD_GROUPS, loadGroups);
}
