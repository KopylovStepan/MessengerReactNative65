import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './PostHeaderStyle';
import colors from '../../constants/colors';
import MessengerButton from '../ui-kit/buttons/MessengerButton';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const PostHeader = ({postData}) => {
  return (
    <View style={styles.post}>
      <View style={styles.post__user}>
        <Image style={styles.post__avatar} source={postData[0].userAvatar} />
        <View style={styles.post__userInfo}>
          <Text style={styles.post__userName}>{postData[0].userName}</Text>
          <Text style={styles.post__time}>{postData[0].postTime}</Text>
        </View>
      </View>
      <View style={styles.post__content}>
        {postData[0].images.map((img, i) => {
          return <Image key={i} style={styles.post__img} source={img} />;
        })}
        {postData[0].postText ? (
          <Text style={styles.post__text}>{postData[0].postText}</Text>
        ) : null}
      </View>
      <View style={styles.post__info}>
        {postData[0].likesAmount ? (
          <View style={styles.post__infoItem}>
            <Icon name="like" size={22} color={colors.white} />
            <Text style={styles.post__textLikes}>
              {postData[0].likesAmount}
            </Text>
          </View>
        ) : null}
        <Icon name="bookmark" size={22} color={colors.white} />
      </View>
      {postData[0].commentsAmount ? (
        <Text style={styles.post__textComments}>
          {postData[0].commentsAmount} комментариев
        </Text>
      ) : null}
    </View>
  );
};

export default PostHeader;
