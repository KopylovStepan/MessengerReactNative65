import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './HomePostStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const HomePost = ({item}) => {
  const [imgActive, setImgActive] = useState(0);
  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <View style={styles.post}>
      <View style={styles.post__header}>
        <View style={styles.post__user}>
          <Image style={styles.post__avatar} source={item.userAvatar} />
          <View style={styles.post__userInfo}>
            <Text style={styles.post__userName}>{item.userName}</Text>
            <Text style={styles.post__time}>{item.postTime}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.post__edit}>
          <Icon name="dots-vertical" size={22} color={colors.pearlPurple} />
        </TouchableOpacity>
      </View>
      <View style={styles.post__content}>
        {item.postText ? (
          <Text style={styles.post__text}>{item.postText} </Text>
        ) : null}
        {item?.images?.length === 1 ? (
          <Image style={styles.post__img} source={item.images[0]} />
        ) : item?.images?.length > 1 ? (
          <View style={styles.post__slider}>
            <ScrollView
              onScroll={({nativeEvent}) => onChange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.post__slider}>
              {item.images.map((e, index) => (
                <Image key={index} style={styles.post__img} source={e} />
              ))}
            </ScrollView>
            <View style={styles.post__wrapDots}>
              {item.images.map((e, index) => (
                <Text
                  key={index}
                  style={
                    imgActive == index
                      ? styles.post__dotActive
                      : styles.post__dot
                  }>
                  ●
                </Text>
              ))}
            </View>
          </View>
        ) : null}
      </View>
      <View style={styles.post__footer}>
        <View style={styles.post__info}>
          {item.likesAmount ? (
            <View style={styles.post__infoItem}>
              <Icon name="like" size={22} color={colors.white} />
              <Text style={styles.post__infoText}>{item.likesAmount}</Text>
            </View>
          ) : null}
          {item.commentsAmount ? (
            <View style={styles.post__infoItem}>
              <Icon name="chat" size={22} color={colors.white} />
              <Text style={styles.post__infoText}>{item.commentsAmount}</Text>
            </View>
          ) : null}
        </View>
        <Icon name="bookmark" size={22} color={colors.white} />
      </View>
    </View>
  );
};

export default HomePost;
