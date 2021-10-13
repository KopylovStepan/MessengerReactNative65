import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './ProfileHeaderStyle';
import colors from '../../constants/colors';
import MessengerButton from '../ui-kit/buttons/MessengerButton';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const ProfileHeader = ({
  showProfileMoreDetails,
  showProfileMenu,
  navigation,
}) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name={'arrow-left'} size={22} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={showProfileMenu}>
          <Icon name={'dots-horizontal'} size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.profile__avatar}
          source={require('./../../../assets/img/Avatar.png')}
        />
        <Text style={styles.profile__name}>Kat Williams</Text>
        <Text style={styles.profile__inst}>@Williams</Text>
        <Text style={styles.profile__location}>Россия, Санкт-Петербург</Text>
        <Text style={styles.profile__job}>
          Место работы: Artist by Passion!
        </Text>
      </View>
      <View style={styles.socialPanel}>
        <View style={styles.socialPanel__item}>
          <Text style={styles.socialPanel__amount}>2,467</Text>
          <Text style={styles.socialPanel__info}>Followers</Text>
        </View>
        <View style={styles.socialPanel__item}>
          <Text style={styles.socialPanel__amount}>1,589</Text>
          <Text style={styles.socialPanel__info}>Following</Text>
        </View>
        <MessengerButton show={showProfileMoreDetails} text={'Подробнее'} />
      </View>
      <View style={styles.info}>
        <Text style={styles.info__type}>Фотографии</Text>
        <Text style={styles.info__amount}>245</Text>
      </View>
    </>
  );
};

export default ProfileHeader;
