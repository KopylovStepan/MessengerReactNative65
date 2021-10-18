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

export const SET_FRIENDS = 'friends/SET_USER_PROFILE';
export const TOGGLE_IS_FETCHING = 'friends/TOGGLE_IS_FETCHING';

const setFriendsAC = friends => {
  return {type: SET_FRIENDS, friends};
};

const toggleIsFetchingAC = isFetching => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};

export const getFriends = () => dispatch => {
  dispatch(toggleIsFetchingAC(true));
  setTimeout(() => {
    dispatch(setFriendsAC(simulationData));
    dispatch(toggleIsFetchingAC(false));
  }, 500);
};
