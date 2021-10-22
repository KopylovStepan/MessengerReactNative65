import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './SettingsStyle';
import colors from '../../constants/colors';
import Header from '../../components/Header/index';
import Icon from '../../components/Icon/Icon';

const Settings = ({navigation}) => {
  const item = (nameIcon, text, color, styleText) => {
    return (
      <>
        <Icon name={nameIcon} size={22} color={color} />
        <Text style={styleText}>{text}</Text>
      </>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header navigation={navigation} text={'Настройки'} />
        <View style={styles.settings}>
          <TouchableOpacity style={styles.settings__item}>
            {item(
              'color-swatch',
              'Внешний вид',
              colors.white,
              styles.settings__text,
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings__item}>
            {item(
              'information-circle',
              'О приложении',
              colors.white,
              styles.settings__text,
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings__item}>
            {item(
              'logout',
              'Выйти',
              colors.pearlPurple,
              styles.settings__textOut,
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
