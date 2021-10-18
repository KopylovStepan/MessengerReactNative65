import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import MessengerUser from '../../components/ui-kit/user/MessengerUser/index';
import Header from '../../components/Header/index';
import styles from './FriendsStyle';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
import colors from '../../constants/colors';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Friends = ({navigation, friends, isFetching, getFriends}) => {
  useEffect(() => {
    getFriends();
  }, [friends]);
  console.log(friends);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header text={'Друзья'} navigation={navigation} />
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <FlatList
            style={styles.friends}
            data={friends}
            renderItem={object => (
              <MessengerUser
                name={object?.item?.userName}
                city={object?.item?.city}
                img={object?.item?.userAvatar}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Friends;
