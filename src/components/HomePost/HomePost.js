import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../constants/colors';
import styles from './HomePostStyle';

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
          <Entypo
            name="dots-three-vertical"
            size={25}
            color={colors.pearlPurple}
          />
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
              <AntDesign name="like2" size={25} color={colors.white} />
              <Text style={styles.post__infoText}>{item.likesAmount}</Text>
            </View>
          ) : null}
          {item.commentsAmount ? (
            <View style={styles.post__infoItem}>
              <Ionicons
                name="ios-chatbubble-ellipses-outline"
                size={25}
                color={colors.white}
              />
              <Text style={styles.post__infoText}>{item.commentsAmount}</Text>
            </View>
          ) : null}
        </View>
        <Feather name="bookmark" size={25} color={colors.white} />
      </View>
    </View>
  );
};

export default HomePost;
