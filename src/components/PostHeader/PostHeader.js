import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './PostHeaderStyle';
import colors from '../../constants/colors';
import Icon from '../Icon/Icon';

function timeConverter(UNIX_time) {
  let a = new Date(UNIX_time * 1000);
  let year = a.getFullYear();
  let month = a.getMonth();
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
  let time = `${date}.${month}.${year} в ${hour}:${min}`;
  return time;
}
const PostHeader = ({postInfo}) => {
  return (
    <View style={styles.post}>
      <View style={styles.post__user}>
        <Image style={styles.post__avatar} source={{uri: postInfo.photo_50}} />
        <View style={styles.post__userInfo}>
          <Text style={styles.post__userName}>
            {postInfo.name
              ? postInfo.name
              : `${postInfo.first_name} ${postInfo.last_name}`}
          </Text>
          <Text style={styles.post__time}>{timeConverter(postInfo.date)}</Text>
        </View>
      </View>
      <View style={styles.post__content}>
        {postInfo?.images.map((img, i) => {
          return <Image key={i} style={styles.post__img} source={{uri: img}} />;
        })}
        {postInfo?.text ? (
          <Text style={styles.post__text}>{postInfo.text}</Text>
        ) : null}
      </View>
      <View style={styles.post__info}>
        <View style={styles.post__infoItem}>
          <Icon name="like" size={22} color={colors.white} />
          {postInfo?.likesCount ? (
            <Text style={styles.post__textLikes}>{postInfo?.likesCount}</Text>
          ) : null}
        </View>

        <Icon name="bookmark" size={22} color={colors.white} />
      </View>
      {postInfo?.commentsCount ? (
        <Text style={styles.post__textComments}>
          {postInfo?.commentsCount} комментариев
        </Text>
      ) : null}
    </View>
  );
};

export default PostHeader;
