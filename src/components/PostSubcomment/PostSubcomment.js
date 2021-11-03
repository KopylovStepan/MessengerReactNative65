import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './PostSubcommentStyle';
import colors from '../../constants/colors';
import Icon from '../Icon/Icon';

const PostSubcomment = ({subcomment, timeConverter}) => {
  return (
    <View style={styles.subcomment}>
      <Image
        style={styles.subcomment__avatar}
        source={{uri: subcomment.photo_50_subcommentator}}
      />
      <View style={styles.subcomment__info}>
        <Text style={styles.subcomment__userName}>
          {subcomment.name_subcommentator
            ? subcomment.name_subcommentator
            : `${subcomment.first_name_subcommentator} ${subcomment.last_name_subcommentator}`}
        </Text>
        <View style={styles.subcomment__container}>
          <View style={styles.subcomment__content}>
            <Text style={styles.subcomment__text}>{subcomment.text}</Text>
          </View>
          <View style={styles.subcomment__likes}>
            <Icon name="like" size={16} color={colors.white} />
            <Text style={styles.subcomment__likesText}>
              {subcomment.likesCount}
            </Text>
          </View>
        </View>
        <View style={styles.subcomment__footer}>
          <Text style={styles.subcomment__time}>
            {timeConverter(subcomment.date)}
          </Text>
          <TouchableOpacity style={styles.subcomment__button}>
            <Text style={styles.subcomment__buttonText}>Ответить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostSubcomment;
