import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import HomePost from '../../components/HomePost';
import styles from './HomeStyle';
import colors from '../../constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Home = ({navigation, posts, isFetching, getPosts}) => {
  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.header__menu}>
            <Icon name="menu" size={22} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.header__right}>
            <TouchableOpacity style={styles.header__search}>
              <Icon name="search" size={22} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.header__alert}>
              <Icon name="Alert" size={22} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <FlatList
            style={styles.posts}
            data={posts}
            renderItem={object => <HomePost item={object.item} />}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
