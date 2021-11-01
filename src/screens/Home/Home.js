import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import HomePost from '../../components/HomePost';
import styles from './HomeStyle';
import colors from '../../constants/colors';
import Icon from '../../components/Icon/Icon';

const simulationData = [
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

const Home = ({navigation, posts, loading, getPosts}) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.header__menu}>
            <Icon name="menu" size={22} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.header__right}>
            <TouchableOpacity style={styles.header__search}>
              <Icon name="search" size={22} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.header__alert}>
              <Icon name="Alert" size={22} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <FlatList
            style={styles.posts}
            data={posts}
            renderItem={object => <HomePost item={object.item} />}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
