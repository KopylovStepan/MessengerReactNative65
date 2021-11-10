import API_KEY from './../../apikey';
import * as axios from 'axios';

export const getPostsAPI = action => {
  return axios
    .get(
      `https://api.vk.com/method/newsfeed.get?filters=post&count=20&start_from=${
        action.next_from ? action.next_from : ' '
      }&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};
