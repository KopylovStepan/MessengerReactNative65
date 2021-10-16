import React from 'react';
import {View, FlatList} from 'react-native';
import MessengerUser from '../../components/ui-kit/user/MessengerUser/index';
import Header from '../../components/Header/index';
import styles from './FriendsStyle';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const friendsData = [
  {
    id: 1,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 2,
    userName: 'Bla bla',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 3,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 4,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 5,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 6,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 7,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 8,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 9,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 10,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 11,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 12,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 13,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
];

const Friends = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header text={'Друзья'} navigation={navigation} />

        <FlatList
          style={styles.friends}
          data={friendsData}
          renderItem={object => (
            <MessengerUser
              name={object?.item?.userName}
              city={object?.item?.city}
              img={object?.item?.userAvatar}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Friends;
