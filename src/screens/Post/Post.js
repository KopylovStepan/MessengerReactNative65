import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Header from '../../components/Header/index';
import PostHeader from '../../components/PostHeader/index';
import styles from './PostStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
import PostComment from '../../components/PostComment/index';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const postData = [
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

const Post = ({navigation}) => {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header text={'Запись'} navigation={navigation} />
        <FlatList
          style={styles.comments}
          ListHeaderComponent={<PostHeader postData={postData} />}
          data={postData[0].comments}
          renderItem={object => {
            return <PostComment item={object.item} />;
          }}
          keyExtractor={item => item.id}
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
              <Icon name={'paper-airplane'} size={22} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
