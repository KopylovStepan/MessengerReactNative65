import React from 'react';
import {Text} from 'react-native';
import styles from './MessengerTextDetailsInfoStyle';

const MessengerTextDetailsInfo = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default MessengerTextDetailsInfo;
