const simulationData = {
  photos: [
    require('./../../../assets/img/Photo1.jpg'),
    require('./../../../assets/img/Photo2.jpg'),
    require('./../../../assets/img/Photo3.jpg'),
    require('./../../../assets/img/Photo4.jpg'),
    require('./../../../assets/img/Photo5.jpg'),
    require('./../../../assets/img/Photo6.jpg'),
    require('./../../../assets/img/Photo7.jpg'),
    require('./../../../assets/img/Photo8.jpg'),
    require('./../../../assets/img/Photo9.jpg'),
  ],
  photosAmount: 245,
  userName: 'Kat Williams',
  birthday: '08 октября 1992',
  location: 'Россия, Санкт-Петербург',
  job: 'Artist by Passion!',
  followersAmount: 2467,
  followingAmount: 1589,
  status: 'They never ask people to do things they wouldn’t do themselves.',
  education: 'ВГУЮ в г. Санкт-Петербург',
  telegram: 'http://t.me/durov',
  twitter: 'Durov',
  instagram: 'Pavel Durov',
  facebook: 'durov',
  paper: 'durov',
  tag: '@Williams',
};

export const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
export const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING';

const setUserProfileAC = profile => {
  return {type: SET_USER_PROFILE, profile};
};

const toggleIsFetchingAC = isFetching => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};

export const getUserProfile = () => dispatch => {
  dispatch(toggleIsFetchingAC(true));
  setTimeout(() => {
    dispatch(setUserProfileAC(simulationData));
    dispatch(toggleIsFetchingAC(false));
  }, 500);
};
