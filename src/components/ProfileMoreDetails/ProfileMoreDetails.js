import React from 'react';
import {Modal, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import MessengerTextHeadline from './../ui-kit/text/MessengerTextHeadline/index';
import styles from './ProfileMoreDetailsStyle';
import colors from '../../constants/colors';
import Icon from '../Icon/Icon';

const ProfileMoreDetails = ({active, setActive, profile}) => {
  const renderItem = (nameIcon, text) => {
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
            {renderItem('chat', profile?.status)}
            {renderItem('cake', `День рождения: ${profile?.bdate}`)}
            {renderItem(
              'location-marker',
              `Город: ${profile?.country?.title}, ${profile?.city?.title}`,
            )}
            {renderItem('briefcase', profile?.university_name)}
          </View>
          <View style={styles.contacts}>
            <View style={styles.contacts__header}>
              <MessengerTextHeadline text={'Контакты'} />
            </View>
            {renderItem('arrow-up-right', profile?.exports?.telegram)}
            {renderItem('twitter', profile?.exports?.twitter)}
            {renderItem('instagram', profile?.exports?.instagram)}
            {renderItem('facebook', profile?.exports?.facebook)}
            {renderItem('telegram', profile?.exports?.paper)}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileMoreDetails;
