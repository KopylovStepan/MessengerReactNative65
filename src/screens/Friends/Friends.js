import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import MessengerUser from '../../components/ui-kit/user/MessengerUser/index';
import Header from '../../components/Header/index';
import styles from './FriendsStyle';
import colors from '../../constants/colors';

const Friends = ({navigation, friends, loading, getFriends}) => {
  useEffect(() => {
    getFriends();
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header text={'Друзья'} navigation={navigation} />
        {loading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <FlatList
            style={styles.friends}
            data={friends}
            renderItem={object => (
              <MessengerUser
                firstName={object?.item?.first_name}
                lastName={object?.item?.last_name}
                city={object?.item?.city?.title}
                img={object?.item?.photo_50}
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
