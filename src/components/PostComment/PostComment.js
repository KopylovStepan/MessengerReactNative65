import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './PostCommentStyle';
import colors from '../../constants/colors';
import PostSubcomment from './../PostSubcomment/index';
import Icon from '../Icon/Icon';

const PostComment = ({item}) => {
  return (
    <>
      <View style={styles.comment}>
        <Image style={styles.comment__avatar} source={item.commentatorAvatar} />
        <View style={styles.comment__info}>
          <Text style={styles.comment__userName}>{item.commentatorName}</Text>
          <View style={styles.comment__container}>
            <View style={styles.comment__content}>
              {item.commentText ? (
                <Text style={styles.comment__text}>{item.commentText}</Text>
              ) : null}
              {item.commentImage ? (
                <Image
                  style={styles.comment__image}
                  source={item.commentImage}
                />
              ) : null}
            </View>
            <View style={styles.comment__likes}>
              <Icon name="like" size={16} color={colors.white} />
              <Text style={styles.comment__likesText}>
                {item.likesCommentAmount}
              </Text>
            </View>
          </View>
          <View style={styles.comment__footer}>
            <Text style={styles.comment__time}>{item.commentTime}</Text>
            <TouchableOpacity style={styles.comment__button}>
              <Text style={styles.comment__buttonText}>Ответить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.subcomments}>
        {item?.subcomments.map(element => {
          return <PostSubcomment key={element.id} subcomment={element} />;
        })}
      </View>
    </>
  );
};

export default PostComment;
