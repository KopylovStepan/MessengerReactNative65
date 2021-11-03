import {call, apply, takeEvery, put} from 'redux-saga/effects';
import {
  LOAD_POST_COMMENTS,
  LOAD_POST_COMMENTS_SUCCESS,
  LOAD_POST_COMMENTS_FAILURE,
} from '../types/post-types';
import API_KEY from './../../../apikey';

function* loadPostComments(action) {
  const request = yield call(
    fetch,
    `https://api.vk.com/method/wall.getComments?thread=items,count&need_likes=1&extended=1&post_id=${action.postId}&owner_id=${action.ownerId}&access_token=${API_KEY}&v=5.131`,
  );
  const data = yield apply(request, request.json);
  if (data?.error?.error_msg) {
    yield put({type: LOAD_POST_COMMENTS_FAILURE, error: data.error.error_msg});
  } else {
    const postComments = data.response.items.map(i => {
      let first_name = null;
      let last_name = null;
      let photo_50 = null;
      let name = null;

      if (i.from_id < 0) {
        data.response.groups.forEach(group => {
          if (Math.abs(i.from_id) === group.id) {
            name = group.name;
            photo_50 = group.photo_50;
          }
        });
      } else if (i.from_id > 0) {
        data.response.profiles.forEach(profile => {
          if (i.from_id === profile.id) {
            first_name = profile.first_name;
            last_name = profile.last_name;
            photo_50 = profile.photo_50;
          }
        });
      }

      const comment = {
        commentId: i.id,
        post_id: i.post_id,
        date: i.date,
        text: i.text,
        likesCount: i.likes.count,
        first_name: first_name,
        last_name: last_name,
        name: name,
        photo_50: photo_50,
      };
      return comment;
    });

    yield put({
      type: LOAD_POST_COMMENTS_SUCCESS,
      postComments: postComments,
    });
  }
}

export function* postSaga() {
  yield takeEvery(LOAD_POST_COMMENTS, loadPostComments);
}
