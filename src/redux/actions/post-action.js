import {SET_POST, TOGGLE_IS_FETCHING} from './../types/post-types';

const simulationData = [
  {
    id: 1,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '1h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    postText: '',
    images: [
      require('./../../../assets/img/postImage.jpg'),
      require('./../../../assets/img/postImage2.jpg'),
      require('./../../../assets/img/postImage3.jpg'),
    ],
    comments: [
      {
        id: 2,
        commentatorName: 'Kat Williams',
        commentText:
          'User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice. ',
        commentImage: null,
        likesCommentAmount: 56,
        commentatorAvatar: require('./../../../assets/img/userAvatar.jpg'),
        commentTime: '25 сент. в 22:12',
        subcomments: [
          {
            id: 3,
            subcommentatorName: 'Kat Williams',
            subcommentText:
              'User experience design for the Web (and its siblings. ',
            likesSubcommentAmount: 56,
            subcommentatorAvatar: require('./../../../assets/img/subcommentAvatar.jpg'),
            subcommentTime: '25 сент. в 22:12',
            subcommentImage: null,
          },
        ],
      },
      {
        id: 4,
        commentatorName: 'Kat Williams',
        commentText: null,
        commentImage: require('./../../../assets/img/heart.jpg'),
        likesCommentAmount: 56,
        commentatorAvatar: require('./../../../assets/img/userAvatar.jpg'),
        commentTime: '25 сент. в 22:12',
        subcomments: [],
      },
      {
        id: 6,
        commentatorName: 'Kat Williams',
        commentText:
          'Acer experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice. ',
        commentImage: null,
        likesCommentAmount: 56,
        commentatorAvatar: require('./../../../assets/img/userAvatar.jpg'),
        commentTime: '25 сент. в 22:12',
        subcomments: [],
      },
      {
        id: 8,
        commentatorName: 'Kat Williams',
        commentText:
          'How interaction design, UI design, et al has traditionally been a deliverables-based practice. ',
        commentImage: null,
        likesCommentAmount: 56,
        commentatorAvatar: require('./../../../assets/img/userAvatar.jpg'),
        commentTime: '25 сент. в 22:12',
        subcomments: [],
      },
    ],
  },
];

const setPostAC = post => {
  return {type: SET_POST, post};
};

const toggleIsFetchingAC = isFetching => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};

export const getPost = () => dispatch => {
  dispatch(toggleIsFetchingAC(true));
  setTimeout(() => {
    dispatch(setPostAC(simulationData));
    dispatch(toggleIsFetchingAC(false));
  }, 500);
};
