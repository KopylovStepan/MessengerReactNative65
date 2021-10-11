import React from 'react';
import {Modal, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import styles from './ProfileMenuStyle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessengerTextHeadline from './../ui-kit/text/MessengerTextHeadline/index';
import colors from '../../constants/colors';

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
            <EvilIcons name="share-google" size={24} color={colors.white} />
            <Text style={styles.window__text}>Поделиться</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.window__itemCopy}>
            <MaterialCommunityIcons
              name="file-multiple-outline"
              size={24}
              color={colors.white}
            />
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
