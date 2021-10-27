import {
  LOAD_PROFILE_INFO,
  LOAD_PROFILE_INFO_SUCCESS,
  LOAD_PROFILE_INFO_FAILURE,
  LOAD_PROFILE_PHOTOS,
  LOAD_PROFILE_PHOTOS_SUCCESS,
  LOAD_PROFILE_PHOTOS_FAILURE,
} from './../types/profile-types';

let initialState = {
  profileInfo: {},
  profilePhotos: {},
  loading: false,
  error: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_INFO:
      return {
        ...state,
        loading: true,
      };
    case LOAD_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        profileInfo: action.profileInfo,
        loading: false,
      };
    case LOAD_PROFILE_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
