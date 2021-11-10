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
import Icon from '../../components/Icon/Icon';

const Home = ({
  navigation,
  posts,
  loading,
  getPosts,
  getPostsMore,
  next_from,
}) => {
  useEffect(() => {
    getPosts();
  }, []);

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
        {loading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <FlatList
            style={styles.posts}
            data={posts}
            renderItem={object => (
              <HomePost post={object.item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
            onEndReached={() => {
              getPostsMore(next_from);
            }}
            onEndReachedThreshold={0.25}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
