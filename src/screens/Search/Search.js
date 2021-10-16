import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import MessengerUser from '../../components/ui-kit/user/MessengerUser/index';
import styles from './SearchStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const searchData = [
  {
    id: 1,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 2,
    userName: 'Bla bla',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 3,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 4,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 5,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 6,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 7,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 8,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 9,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 10,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 11,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 12,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
  {
    id: 13,
    userName: 'Kate Williams',
    userAvatar: require('./../../../assets/img/userAvatar.jpg'),
    city: 'Санкт-Петербург',
  },
];

const Search = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [active, setActive] = useState('Все');

  const setActiveAll = () => {
    setActive('Все');
  };
  const setActivePeople = () => {
    setActive('Люди');
  };
  const setActiveGroups = () => {
    setActive('Сообщества');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name={'arrow-left'} size={22} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.header__inputContainer}>
            <View style={styles.header__icon}>
              <Icon name={'search'} size={19} color={colors.pearlPurple} />
            </View>
            <TextInput
              style={styles.header__input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Поиск"
              placeholderTextColor={colors.pearlPurple}
            />
          </View>
        </View>
        <View style={styles.categories}>
          <TouchableOpacity
            onPress={setActiveAll}
            style={
              active === 'Все'
                ? styles.categories__btnActive
                : styles.categories__btn
            }>
            <Text
              style={
                active === 'Все'
                  ? styles.categories__textActive
                  : styles.categories__text
              }>
              Все
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={setActivePeople}
            style={
              active === 'Люди'
                ? styles.categories__btnActive
                : styles.categories__btn
            }>
            <Text
              style={
                active === 'Люди'
                  ? styles.categories__textActive
                  : styles.categories__text
              }>
              Люди
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={setActiveGroups}
            style={
              active === 'Сообщества'
                ? styles.categories__btnActive
                : styles.categories__btn
            }>
            <Text
              style={
                active === 'Сообщества'
                  ? styles.categories__textActive
                  : styles.categories__text
              }>
              Сообщества
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.search}
          data={searchData}
          renderItem={object => (
            <MessengerUser
              name={object?.item?.userName}
              city={object?.item?.city}
              img={object?.item?.userAvatar}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Search;
