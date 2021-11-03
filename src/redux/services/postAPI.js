import API_KEY from './../../../apikey';
import * as axios from 'axios';

export const getPostAPI = action => {
  return axios
    .get(
      `https://api.vk.com/method/wall.getComments?thread=items,count&thread_items_count=10&need_likes=1&extended=1&post_id=${action.postId}&owner_id=${action.ownerId}&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};
