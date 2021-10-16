import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './HeaderStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Header = ({navigation, text}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name={'arrow-left'} size={22} color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.header__text}>{text}</Text>
      <Text style={styles.header__void}></Text>
    </View>
  );
};

export default Header;
