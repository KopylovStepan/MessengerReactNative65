import {LOAD_POST_COMMENTS} from './../types/post-types';

export const getPostComments = (postId, ownerId) => {
  return {
    type: LOAD_POST_COMMENTS,
    postId: postId,
    ownerId: ownerId,
  };
};
