import React from 'react';
import {Text, View, TouchableOpacity, BackHandler} from 'react-native';
import styles from './SettingsStyle';
import colors from '../../constants/colors';
import Header from '../../components/Header/index';
import Icon from '../../components/Icon/Icon';

const Settings = ({navigation}) => {
  const renderItem = (nameIcon, text, color, styleText, callback) => {
    return (
      <TouchableOpacity onPress={callback} style={styles.settings__item}>
        <Icon name={nameIcon} size={22} color={color} />
        <Text style={styleText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header navigation={navigation} text={'Настройки'} />
        <View style={styles.settings}>
          {renderItem(
            'color-swatch',
            'Внешний вид',
            colors.white,
            styles.settings__text,
          )}
          {renderItem(
            'information-circle',
            'О приложении',
            colors.white,
            styles.settings__text,
            () => navigation.navigate('About'),
          )}
          {renderItem(
            'logout',
            'Выйти',
            colors.pearlPurple,
            styles.settings__textOut,
            () => BackHandler.exitApp(),
          )}
        </View>
      </View>
    </View>
  );
};

export default Settings;
