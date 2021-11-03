import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './PostCommentStyle';
import colors from '../../constants/colors';
import PostSubcomment from './../PostSubcomment/index';
import Icon from '../Icon/Icon';

function timeConverter(UNIX_time) {
  var months = [
    'Янв',
    'Фев',
    'Март',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сен',
    'Ост',
    'Нояб',
    'Дек',
  ];
  let a = new Date(UNIX_time * 1000);
  var month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
  let time = `${date} ${month}. в ${hour}:${min}`;
  return time;
}

const PostComment = ({comment}) => {
  return (
    <>
      <View style={styles.comment}>
        <Image
          style={styles.comment__avatar}
          source={{uri: comment.photo_50}}
        />
        <View style={styles.comment__info}>
          <Text style={styles.comment__userName}>
            {comment.name
              ? comment.name
              : `${comment.first_name} ${comment.last_name}`}
          </Text>
          <View style={styles.comment__container}>
            <View style={styles.comment__content}>
              {comment.text ? (
                <Text style={styles.comment__text}>{comment.text}</Text>
              ) : null}
            </View>
            <View style={styles.comment__likes}>
              <Icon name="like" size={16} color={colors.white} />
              <Text style={styles.comment__likesText}>
                {comment.likesCount}
              </Text>
            </View>
          </View>
          <View style={styles.comment__footer}>
            <Text style={styles.comment__time}>
              {timeConverter(comment.date)}
            </Text>
            <TouchableOpacity style={styles.comment__button}>
              <Text style={styles.comment__buttonText}>Ответить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.subcomments}>
        {comment?.subComments.map(element => {
          return (
            <PostSubcomment
              key={element.subcommentId}
              subcomment={element}
              timeConverter={timeConverter}
            />
          );
        })}
      </View>
    </>
  );
};

export default PostComment;
