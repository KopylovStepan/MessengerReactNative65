import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './MessengerUserStyle';

const MessengerUser = ({firstName, lastName, city, img}) => {
  return (
    <View style={styles.user}>
      <Image style={styles.user__avatar} source={{uri: img}} />
      <View style={styles.user__info}>
        <Text style={styles.user__name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.user__city}>{city}</Text>
      </View>
    </View>
  );
};

export default MessengerUser;
