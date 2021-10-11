import React from 'react';
import {Modal, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import styles from './ProfileMoreDetailsStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessengerTextHeadline from './../ui-kit/text/MessengerTextHeadline/index';
import colors from '../../constants/colors';

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
                <Ionicons
                  name="md-close"
                  size={24}
                  color={colors.pearlPurple}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.details__item}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color={colors.white}
              />
              <Text style={styles.details__text}>
                They never ask people to do things they wouldn’t do themselves.
              </Text>
            </View>
            <View style={styles.details__item}>
              <FontAwesome
                name="birthday-cake"
                size={24}
                color={colors.white}
              />
              <Text style={styles.details__text}>
                День рождения: 08 октября 1992
              </Text>
            </View>
            <View style={styles.details__item}>
              <Ionicons
                name="location-outline"
                size={24}
                color={colors.white}
              />
              <Text style={styles.details__text}>Город: Санкт-Петербург</Text>
            </View>
            <View style={styles.details__item}>
              <Ionicons
                name="md-briefcase-outline"
                size={24}
                color={colors.white}
              />
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
              <MaterialCommunityIcons
                name="arrow-top-right"
                size={24}
                color={colors.white}
              />
              <Text style={styles.contacts__text}>http://t.me/durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <SimpleLineIcons
                name="social-twitter"
                size={24}
                color={colors.white}
              />
              <Text style={styles.contacts__text}>Durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <Ionicons name="logo-instagram" size={24} color={colors.white} />
              <Text style={styles.contacts__text}>Pavel Durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <SimpleLineIcons
                name="social-facebook"
                size={24}
                color={colors.white}
              />
              <Text style={styles.contacts__text}>durov</Text>
            </View>
            <View style={styles.contacts__item}>
              <FontAwesome
                name="paper-plane-o"
                size={24}
                color={colors.white}
              />
              <Text style={styles.contacts__text}>durov</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileMoreDetails;
