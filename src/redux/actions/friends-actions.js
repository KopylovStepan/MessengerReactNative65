import {LOAD_FRIENDS} from './../types/friends-types';

export const getFriends = () => {
  return {
    type: LOAD_FRIENDS,
  };
};
