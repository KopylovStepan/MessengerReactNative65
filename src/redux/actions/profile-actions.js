import {LOAD_PROFILE_INFO, LOAD_PROFILE_PHOTOS} from './../types/profile-types';

export const getUserProfileInfo = () => {
  return {
    type: LOAD_PROFILE_INFO,
  };
};

export const getUserProfilePhotos = () => {
  return {
    type: LOAD_PROFILE_PHOTOS,
  };
};
