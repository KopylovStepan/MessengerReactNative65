import React from 'react';
import {Modal, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import MessengerTextHeadline from './../ui-kit/text/MessengerTextHeadline/index';
import styles from './ProfileMoreDetailsStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const ProfileMoreDetails = ({active, setActive}) => {
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
            <View style={styles.details__item}>
              <Icon name="chat" size={22} color={colors.white} />
              <Text style={styles.details__text}>
                They never ask people to do things they wouldn’t do themselves.
              </Text>
            </View>
            <View style={styles.details__item}>
              <Icon name="cake" size={22} color={colors.white} />
              <Text style={styles.details__text}>
                День рождения: 08 октября 1992
              </Text>
            </View>
            <View style={styles.details__item}>
              <Icon name="location-marker" size={22} color={colors.white} />
              <Text style={styles.details__text}>Город: Санкт-Петербург</Text>
            </View>
            <View style={styles.details__item}>
              <Icon name="briefcase" size={22} color={colors.white} />
              <Text style={styles.details__text}>
                ВГУЮ в г. Санкт-Петербург
              </Text>
            </View>
          </View>
          <View style={styles.contacts}>
            <View style={styles.contacts__header}>
              <MessengerTextHeadline text={'Контакты'} />
            </View>
            <View style={styles.contacts__item}>
              <Icon name="arrow-up-right" size={22} color={colors.white} />
              <Text style={styles.contacts__text}>http://t.me/durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <Icon name="twitter" size={22} color={colors.white} />
              <Text style={styles.contacts__text}>Durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <Icon name="instagram" size={22} color={colors.white} />
              <Text style={styles.contacts__text}>Pavel Durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <Icon name="facebook" size={22} color={colors.white} />
              <Text style={styles.contacts__text}>durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <Icon name="telegram" size={22} color={colors.white} />
              <Text style={styles.contacts__text}>durov</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileMoreDetails;
