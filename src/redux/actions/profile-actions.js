import {
  LOAD_PROFILE_INFO,
  LOAD_PROFILE_INFO_SUCCESS,
  LOAD_PROFILE_INFO_FAILURE,
  LOAD_PROFILE_PHOTOS,
  LOAD_PROFILE_PHOTOS_SUCCESS,
  LOAD_PROFILE_PHOTOS_FAILURE,
} from './../types/profile-types';

export const getUserProfileInfo = () => {
  return {
    type: LOAD_PROFILE_INFO,
  };
};
