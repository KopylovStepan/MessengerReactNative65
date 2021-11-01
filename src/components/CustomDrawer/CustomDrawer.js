import React from 'react';
import {Text, View, Image} from 'react-native';
import {useEffect} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import styles from './CustomDrawerStyle';
import colors from '../../constants/colors';
import Icon from '../Icon/Icon';

const CustomDrawer = ({navigation, profileInfo, getUserProfileInfo, error}) => {
  useEffect(() => {
    getUserProfileInfo();
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.user}>
        <Image
          style={styles.user__avatar}
          source={{uri: profileInfo?.photo_100}}
        />
        <View style={styles.user__info}>
          <Text style={styles.user__name}>
            {profileInfo?.first_name} {profileInfo?.last_name}
          </Text>
          <Text style={styles.user__inst}>@{profileInfo?.domain}</Text>
        </View>
      </View>
      <DrawerContentScrollView>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name={'Profile'} size={22} color={colors.white} />
          )}
          label="Home"
          labelStyle={styles.item__text}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name={'Profile'} size={22} color={colors.white} />
          )}
          label="Мой профиль"
          labelStyle={styles.item__text}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name={'group'} size={19} color={colors.white} />
          )}
          label="Друзья"
          labelStyle={styles.item__text}
          onPress={() => {
            navigation.navigate('Friends');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name={'search'} size={22} color={colors.white} />
          )}
          label="Поиск"
          labelStyle={styles.item__text}
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name={'settings-cog'} size={22} color={colors.white} />
          )}
          label="Настройки"
          labelStyle={styles.item__text}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name={'settings-cog'} size={22} color={colors.white} />
          )}
          label="Пост"
          labelStyle={styles.item__text}
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;
