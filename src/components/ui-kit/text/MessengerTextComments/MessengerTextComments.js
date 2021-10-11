import React from 'react';
import {Text} from 'react-native';
import styles from './MessengerTextCommentsStyle';

const MessengerTextComments = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default MessengerTextComments;
