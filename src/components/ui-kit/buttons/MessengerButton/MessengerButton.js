import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './MessengerButtonStyle';

const MessengerButton = ({text, show}) => {
  return (
    <TouchableOpacity onPress={show} style={styles.button}>
      <Text style={styles.button__text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MessengerButton;
