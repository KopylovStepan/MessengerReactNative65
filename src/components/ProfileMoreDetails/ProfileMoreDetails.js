import React from 'react';
import {Modal, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import MessengerTextHeadline from './../ui-kit/text/MessengerTextHeadline/index';
import styles from './ProfileMoreDetailsStyle';
import colors from '../../constants/colors';
import Icon from '../Icon/Icon';

const ProfileMoreDetails = ({active, setActive, profile}) => {
  const item = (nameIcon, text) => {
    return (
      <View style={styles.details__item}>
        <Icon name={nameIcon} size={22} color={colors.white} />
        <Text style={styles.details__text}>{text}</Text>
      </View>
    );
  };

  const close = () => {
    setActive(false);
  };

  return (
    <Modal
      animationType={'fade'}
      transparent
      visible={active}
      onRequestClose={close}>
      <StatusBar backgroundColor={colors.status} />
      <View style={styles.container}>
        <View style={styles.window}>
          <View style={styles.details}>
            <View style={styles.details__header}>
              <MessengerTextHeadline text={'Подробнее'} />
              <TouchableOpacity onPress={close}>
                <Icon name="backspace" size={13} color={colors.pearlPurple} />
              </TouchableOpacity>
            </View>
            {item('chat', profile.status)}
            {item('cake', `День рождения: ${profile.birthday}`)}
            {item('location-marker', `Город: ${profile.location}`)}
            {item('briefcase', profile.education)}
          </View>
          <View style={styles.contacts}>
            <View style={styles.contacts__header}>
              <MessengerTextHeadline text={'Контакты'} />
            </View>
            {item('arrow-up-right', profile.telegram)}
            {item('twitter', profile.twitter)}
            {item('instagram', profile.instagram)}
            {item('facebook', profile.facebook)}
            {item('telegram', profile.paper)}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileMoreDetails;
