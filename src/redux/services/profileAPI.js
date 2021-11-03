import API_KEY from './../../../apikey';
import * as axios from 'axios';

export const getProfileInfoAPI = () => {
  return axios
    .get(
      `https://api.vk.com/method/users.get?fields=education,photo_100,bdate,city,country,counters,career,domain,status,exports&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};

export const getProfilePhotosAPI = () => {
  return axios
    .get(
      `https://api.vk.com/method/photos.getAll?&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};
