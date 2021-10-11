import React from 'react';
import {Text} from 'react-native';
import styles from './MessengerTextHeadlineStyle';

const MessengerTextHeadline = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default MessengerTextHeadline;
