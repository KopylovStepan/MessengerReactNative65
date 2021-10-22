import {SET_SEARCH_PEOPLE, TOGGLE_IS_FETCHING} from './../types/search-types';

const simulationData = [
  {
    id: 1,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 2,
    userName: 'Bla bla',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 3,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 4,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 5,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 6,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 7,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 8,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 9,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 10,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 11,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 12,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 13,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
];

const setSearchPeopleAC = searchData => {
  return {type: SET_SEARCH_PEOPLE, searchData};
};

const toggleIsFetchingAC = isFetching => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};

export const getSearchPeople = () => dispatch => {
  dispatch(toggleIsFetchingAC(true));
  setTimeout(() => {
    dispatch(setSearchPeopleAC(simulationData));
    dispatch(toggleIsFetchingAC(false));
  }, 500);
};
