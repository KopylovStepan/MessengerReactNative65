import API_KEY from './../../../apikey';
import * as axios from 'axios';

export const getFriendsAPI = () => {
  return axios
    .get(
      `https://api.vk.com/method/friends.get?fields=photo_50,city&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};
