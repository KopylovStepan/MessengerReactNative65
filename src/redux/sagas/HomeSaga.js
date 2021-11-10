import {call, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_MORE,
} from '../types/home-types';
import {getPostsAPI} from './../../services/homeAPI';

function getData(data) {
  const posts = data.response.items.map(i => {
    const images = [];
    let first_name = null;
    let last_name = null;
    let photo_50 = null;
    let name = null;

    if (i.source_id < 0) {
      data.response.groups.forEach(group => {
        if (Math.abs(i.source_id) === group.id) {
          name = group.name;
          photo_50 = group.photo_50;
        }
      });
    } else if (i.source_id > 0) {
      data.response.profiles.forEach(profile => {
        if (i.source_id === profile.id) {
          first_name = profile.first_name;
          last_name = profile.last_name;
          photo_50 = profile.photo_50;
        }
      });
    }

    i?.attachments?.forEach(item => {
      item?.photo?.sizes.forEach(size => {
        if (size.type === 'p') {
          images.push(size.url);
        }
      });
    });

    const post = {
      id: i.post_id,
      source_id: i.source_id,
      date: i.date,
      text: i.text,
      commentsCount: i.comments.count,
      likesCount: i.likes.count,
      images: images,
      first_name: first_name,
      last_name: last_name,
      name: name,
      photo_50: photo_50,
    };
    return post;
  });
  return posts;
}

function* loadPosts(action) {
  const data = yield call(getPostsAPI, action);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_POSTS_FAILURE, error: data.error.error_msg});
  } else {
    let posts = getData(data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      posts: posts,
      next_from: data.response.next_from,
    });
  }
}

export function* homeSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
}

export function* homeSagaLoadMore() {
  yield takeEvery(LOAD_POSTS_MORE, loadPosts);
}
