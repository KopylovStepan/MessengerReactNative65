import React from 'react';
import {Modal, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import MessengerTextHeadline from './../ui-kit/text/MessengerTextHeadline/index';
import styles from './ProfileMenuStyle';
import colors from '../../constants/colors';
import Icon from '../Icon/Icon';

const ProfileMenu = ({active, setActive}) => {
  const close = () => {
    setActive(false);
  };

  const renderItem = (nameIcon, text) => {
    return (
      <>
        <Icon name={nameIcon} size={22} color={colors.white} />
        <Text style={styles.window__text}>{text}</Text>
      </>
    );
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
          <TouchableOpacity style={styles.window__itemShare}>
            {renderItem('share', 'Поделиться')}
          </TouchableOpacity>
          <TouchableOpacity style={styles.window__itemCopy}>
            {renderItem('document-duplicate', 'Скопировать ссылку')}
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={close} style={styles.window__itemClose}>
          <MessengerTextHeadline text={'Отмена'} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ProfileMenu;
