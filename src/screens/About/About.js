import React from 'react';
import {Text, View} from 'react-native';
import styles from './AboutStyle';
import Header from '../../components/Header/index';

const About = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header navigation={navigation} text={'О приложении'} />
        <View style={styles.about}>
          <Text style={styles.about__text}>
            Данное приложение имеет следующий функционал: {'\n'} 1. Подгрузка
            информации о профиле из Вконтакте{'\n'} 2. Подгрузка фотографий
            профиля{'\n'} 3. Отображение друзей пользователя{'\n'} 4. Реализован
            поиск людей и сообществ{'\n'} 5. Реализована новостная лента с
            возможностью перехода на конкретный пост для просмотра комментариев
            {'\n'}
            Данное приложение реализовано с помощью API VK
          </Text>
        </View>
      </View>
    </View>
  );
};

export default About;
