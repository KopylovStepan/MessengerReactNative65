import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './SettingsStyle';
import colors from '../../constants/colors';
import Header from '../../components/Header/index';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Settings = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header navigation={navigation} text={'Настройки'} />
        <View style={styles.settings}>
          <TouchableOpacity style={styles.settings__item}>
            <Icon name={'color-swatch'} size={22} color={colors.white} />
            <Text style={styles.settings__text}>Внешний вид</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings__item}>
            <Icon name={'information-circle'} size={22} color={colors.white} />
            <Text style={styles.settings__text}>О приложении</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings__item}>
            <Icon name={'logout'} size={22} color={colors.pearlPurple} />
            <Text style={styles.settings__textOut}>Выйти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
