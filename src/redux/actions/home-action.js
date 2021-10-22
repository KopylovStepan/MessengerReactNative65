import {SET_POSTS, TOGGLE_IS_FETCHING} from './../types/home-types';

const simulationData = [
  {
    id: 1,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '1h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: [
      require('./../../../assets/img/postImage.jpg'),
      require('./../../../assets/img/postImage2.jpg'),
      require('./../../../assets/img/postImage3.jpg'),
    ],
    postText: '',
  },
  {
    id: 2,
    userName: 'Tony Monta',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '8h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: null,
    postText: 'Writing code is not so bad!',
  },
  {
    id: 3,
    userName: 'Tony Monta',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '1h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: [require('./../../../assets/img/postImage.jpg')],
    postText: '',
  },
  {
    id: 4,
    userName: 'Tony Monta',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '1h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: [require('./../../../assets/img/postImage.jpg')],
    postText: 'Как',
  },
];

const setPostsAC = posts => {
  return {type: SET_POSTS, posts};
};

const toggleIsFetchingAC = isFetching => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};

export const getPosts = () => dispatch => {
  dispatch(toggleIsFetchingAC(true));
  setTimeout(() => {
    dispatch(setPostsAC(simulationData));
    dispatch(toggleIsFetchingAC(false));
  }, 500);
};
