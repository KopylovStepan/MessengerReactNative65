import React from 'react';
import {Modal, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import MessengerTextHeadline from './../ui-kit/text/MessengerTextHeadline/index';
import styles from './ProfileMenuStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const ProfileMenu = ({active, setActive}) => {
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
          <TouchableOpacity style={styles.window__itemShare}>
            <Icon name="share" size={22} color={colors.white} />
            <Text style={styles.window__text}>Поделиться</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.window__itemCopy}>
            <Icon name="document-duplicate" size={22} color={colors.white} />
            <Text style={styles.window__text}>Скопировать ссылку</Text>
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
