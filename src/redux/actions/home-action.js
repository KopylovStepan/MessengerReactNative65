import {LOAD_POSTS} from './../types/home-types';

export const getPosts = () => {
  return {
    type: LOAD_POSTS,
  };
};
