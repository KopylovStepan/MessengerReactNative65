import {SET_POSTS, TOGGLE_IS_FETCHING} from './../types/home-types';

let initialState = {
  posts: [],
  isFetching: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default homeReducer;
