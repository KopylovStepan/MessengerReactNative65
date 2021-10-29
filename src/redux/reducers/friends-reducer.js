import {
  LOAD_FRIENDS,
  LOAD_FRIENDS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
} from './../types/friends-types';

let initialState = {
  friends: [],
  loading: false,
  error: '',
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FRIENDS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.friends,
        loading: false,
      };
    case LOAD_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default friendsReducer;
