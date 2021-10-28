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
  profilePhotos: [],
  loadingInfo: false,
  loadingPhotos: false,
  error: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_INFO:
      return {
        ...state,
        loadingInfo: true,
      };
    case LOAD_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        profileInfo: action.profileInfo,
        loadingInfo: false,
      };
    case LOAD_PROFILE_INFO_FAILURE:
      return {
        ...state,
        error: action.error,
        loadingInfo: false,
      };
    case LOAD_PROFILE_PHOTOS:
      return {
        ...state,
        loadingPhotos: true,
      };
    case LOAD_PROFILE_PHOTOS_SUCCESS:
      return {
        ...state,
        profilePhotos: action.profilePhotos,
        loadingPhotos: false,
      };
    case LOAD_PROFILE_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.error,
        loadingPhotos: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
