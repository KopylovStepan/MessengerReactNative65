import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import MessengerUser from '../../components/ui-kit/user/MessengerUser/index';
import styles from './SearchStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Search = ({navigation, isFetching, searchData, getSearchPeople}) => {
  const [text, onChangeText] = useState('');
  const [active, setActive] = useState('Все');

  useEffect(() => {
    getSearchPeople();
  }, [searchData]);

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
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
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
        )}
      </View>
    </View>
  );
};

export default Search;
