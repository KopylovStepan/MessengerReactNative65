import {SET_FRIENDS, TOGGLE_IS_FETCHING} from './../actions/friends-action';

let initialState = {
  friends: [],
  isFetching: false,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
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

export default friendsReducer;
