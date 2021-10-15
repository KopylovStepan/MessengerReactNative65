import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './PostSubcommentStyle';
import colors from '../../constants/colors';
import MessengerButton from '../ui-kit/buttons/MessengerButton';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const PostSubcomment = ({subcomment}) => {
  return (
    <View style={styles.subcomment}>
      <Image
        style={styles.subcomment__avatar}
        source={subcomment.subcommentatorAvatar}
      />
      <View style={styles.subcomment__info}>
        <Text style={styles.subcomment__userName}>
          {subcomment.subcommentatorName}
        </Text>
        <View style={styles.subcomment__container}>
          <View style={styles.subcomment__content}>
            <Text style={styles.subcomment__text}>
              {subcomment.subcommentText}
            </Text>
          </View>
          <View style={styles.subcomment__likes}>
            <Icon name="like" size={16} color={colors.white} />
            <Text style={styles.subcomment__likesText}>
              {subcomment.likesSubcommentAmount}
            </Text>
          </View>
        </View>
        <View style={styles.subcomment__footer}>
          <Text style={styles.subcomment__time}>
            {subcomment.subcommentTime}
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
