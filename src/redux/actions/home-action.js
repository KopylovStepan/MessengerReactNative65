import {LOAD_POSTS, LOAD_POSTS_MORE} from './../types/home-types';

export const getPosts = () => {
  return {
    type: LOAD_POSTS,
  };
};

export const getPostsMore = next_from => {
  return {
    type: LOAD_POSTS_MORE,
    next_from: next_from,
  };
};
