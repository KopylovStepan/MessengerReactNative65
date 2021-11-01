import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './HomePostStyle';
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
  const getPostId = () => {
    console.log(item.id);
    console.log(item.source_id);
  };
  return (
    <View style={styles.post}>
      <View style={styles.post__header}>
        <View style={styles.post__user}>
          <Image style={styles.post__avatar} source={{uri: item.photo_50}} />
          <View style={styles.post__userInfo}>
            <Text style={styles.post__userName}>
              {item.name ? item.name : `${item.first_name} ${item.last_name}`}
            </Text>
            <Text style={styles.post__time}>{timeConverter(item.date)}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.post__edit}>
          <Icon name="dots-vertical" size={22} color={colors.pearlPurple} />
        </TouchableOpacity>
      </View>
      <View style={styles.post__content}>
        {item.text ? <Text style={styles.post__text}>{item.text} </Text> : null}
        {item?.images?.length === 1 ? (
          <Image style={styles.post__img} source={{uri: item.images[0]}} />
        ) : item?.images?.length > 1 ? (
          <View style={styles.post__slider}>
            <ScrollView
              onScroll={({nativeEvent}) => onChange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.post__slider}>
              {item.images.map((e, index) => (
                <Image key={index} style={styles.post__img} source={{uri: e}} />
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
          <View style={styles.post__infoItem}>
            <Icon name="like" size={22} color={colors.white} />
            {item.likesCount ? (
              <Text style={styles.post__infoText}>{item.likesCount}</Text>
            ) : null}
          </View>

          <View style={styles.post__infoItem}>
            <TouchableOpacity onPress={getPostId}>
              <Icon name="chat" size={22} color={colors.white} />
            </TouchableOpacity>
            {item.commentsCount ? (
              <Text style={styles.post__infoText}>{item.commentsCount}</Text>
            ) : null}
          </View>
        </View>
        <Icon name="bookmark" size={22} color={colors.white} />
      </View>
    </View>
  );
};

export default HomePost;
