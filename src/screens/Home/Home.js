import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../constants/colors';
import styles from './HomeStyle';
import HomePost from '../../components/HomePost';

const postData = [
  {
    id: 1,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '1h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: [
      require('./../../../assets/img/postImage.jpg'),
      require('./../../../assets/img/postImage2.jpg'),
      require('./../../../assets/img/postImage3.jpg'),
    ],
    postText: '',
  },
  {
    id: 2,
    userName: 'Tony Monta',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '8h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: null,
    postText: 'Writing code is not so bad!',
  },
  {
    id: 3,
    userName: 'Tony Monta',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '1h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: [require('./../../../assets/img/postImage.jpg')],
    postText: '',
  },
  {
    id: 4,
    userName: 'Tony Monta',
    userAvatar: require('./../../../assets/img/postAvatar.jpg'),
    postTime: '1h ago',
    likesAmount: 8998,
    commentsAmount: 145,
    images: [require('./../../../assets/img/postImage.jpg')],
    postText: 'Как',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.header__menu}>
          <Feather name="menu" size={25} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.header__right}>
          <TouchableOpacity style={styles.header__search}>
            <Ionicons name="md-search" size={25} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.header__alert}>
            <Fontisto name="bell" size={25} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.posts}
        data={postData}
        renderItem={object => <HomePost item={object.item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
