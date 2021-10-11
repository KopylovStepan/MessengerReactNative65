import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './MessengerUserStyle';

const MessengerUser = ({img, name, city}) => {
  return (
    <View style={styles.user}>
      <Image style={styles.user__avatar} source={img} />
      <View style={styles.user__info}>
        <Text style={styles.user__name}> {name}</Text>
        <Text style={styles.user__city}> {city}</Text>
      </View>
    </View>
  );
};

export default MessengerUser;
