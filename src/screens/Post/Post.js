import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header/index';
import PostHeader from '../../components/PostHeader/index';
import PostComment from '../../components/PostComment/index';
import styles from './PostStyle';
import colors from '../../constants/colors';
import Icon from '../../components/Icon/Icon';

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

const Post = ({navigation, loading, route, postComments, getPostComments}) => {
  const [text, onChangeText] = useState('');
  const postInfo = route.params.post;

  useEffect(() => {
    getPostComments(postInfo.id, postInfo.source_id);
  }, [postInfo.id, postInfo.source_id]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header text={'Запись'} navigation={navigation} />
        {loading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <>
            <FlatList
              style={styles.comments}
              ListHeaderComponent={<PostHeader postInfo={postInfo} />}
              data={postComments}
              renderItem={object => {
                return <PostComment comment={object.item} />;
              }}
              keyExtractor={item => item.commentId}
            />
            <View style={styles.footer}>
              <View style={styles.footer__container}>
                <TextInput
                  style={styles.footer__input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Комментарий"
                  placeholderTextColor={colors.pearlPurple}
                />
                <TouchableOpacity>
                  <Icon
                    name={'paper-airplane'}
                    size={22}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Post;
