import {call, apply, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
} from '../types/home-types';
import API_KEY from './../../../apikey';

function* loadPosts() {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/newsfeed.get?filters=post&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_POSTS_FAILURE, error: data.error.error_msg});
  } else {
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

      i.attachments.forEach(item => {
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

    yield put({type: LOAD_POSTS_SUCCESS, posts: posts});
  }
}

export function* homeSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
}
