import {
  LOAD_POST_COMMENTS,
  LOAD_POST_COMMENTS_SUCCESS,
  LOAD_POST_COMMENTS_FAILURE,
} from './../types/post-types';

let initialState = {
  postComments: [],
  postId: null,
  ownerId: null,
  loading: false,
  error: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        postComments: action.postComments,
        loading: false,
      };
    case LOAD_POST_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
