import API_KEY from './../../../apikey';
import * as axios from 'axios';

export const getAllAPI = action => {
  return axios
    .get(
      `https://api.vk.com/method/search.getHints?filters=friends,groups&fields=photo_50,city&q=${
        action.searchText ? action.searchText : ' '
      }&limit=20&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};

export const getPeopleAPI = action => {
  return axios
    .get(
      `https://api.vk.com/method/users.search?q=${
        action.searchText ? action.searchText : ' '
      }&fields=photo_50,city&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};

export const getGroupsAPI = action => {
  return axios
    .get(
      `https://api.vk.com/method/groups.search?q=${
        action.searchText ? action.searchText : ' '
      }&access_token=${API_KEY}&v=5.131`,
    )
    .then(response => {
      return response.data;
    });
};
