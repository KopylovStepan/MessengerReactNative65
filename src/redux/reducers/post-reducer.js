import {SET_POST, TOGGLE_IS_FETCHING} from './../types/post-types';

let initialState = {
  post: [],
  isFetching: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        post: action.post,
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

export default postReducer;
