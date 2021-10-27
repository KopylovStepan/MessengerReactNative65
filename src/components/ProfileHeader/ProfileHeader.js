import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './ProfileHeaderStyle';
import colors from '../../constants/colors';
import MessengerButton from '../ui-kit/buttons/MessengerButton';
import Icon from '../Icon/Icon';

const ProfileHeader = ({
  showProfileMoreDetails,
  showProfileMenu,
  navigation,
  profile,
}) => {
  return (
    <View style={styles.container}>
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
          source={{uri: profile?.photo_100}}
        />
        <Text style={styles.profile__name}>
          {profile?.first_name} {profile?.last_name}
        </Text>
        <Text style={styles.profile__inst}>@{profile?.domain}</Text>
        <Text style={styles.profile__location}>
          {profile?.country?.title}, {profile?.city?.title}
        </Text>
        <Text style={styles.profile__job}>Место работы: {profile?.career}</Text>
      </View>
      <View style={styles.socialPanel}>
        <View style={styles.socialPanel__item}>
          <Text style={styles.socialPanel__amount}>
            {profile?.counters?.followers}
          </Text>
          <Text style={styles.socialPanel__info}>Followers</Text>
        </View>
        <View style={styles.socialPanel__item}>
          <Text style={styles.socialPanel__amount}>
            {profile?.counters?.friends}
          </Text>
          <Text style={styles.socialPanel__info}>Following</Text>
        </View>
        <MessengerButton show={showProfileMoreDetails} text={'Подробнее'} />
      </View>
      <View style={styles.info}>
        <Text style={styles.info__type}>Фотографии</Text>
        <Text style={styles.info__amount}>{profile?.counters?.photos}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
