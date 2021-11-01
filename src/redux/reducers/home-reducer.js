import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
} from './../types/home-types';

let initialState = {
  posts: {},
  loading: false,
  error: '',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false,
      };
    case LOAD_POSTS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
