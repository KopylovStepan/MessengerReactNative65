import {SET_USER_PROFILE, TOGGLE_IS_FETCHING} from './../types/profile-types';

let initialState = {
  profile: {},
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
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

export default profileReducer;
