import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header/index';
import PostHeader from '../../components/PostHeader/index';
import PostComment from '../../components/PostComment/index';
import styles from './PostStyle';
import colors from '../../constants/colors';
import Icon from '../../components/Icon/Icon';

const Post = ({navigation, loading, route, postComments, getPostComments}) => {
  const [text, onChangeText] = useState('');
  const postInfo = route.params.post;

  useEffect(() => {
    getPostComments(postInfo.id, postInfo.source_id);
  }, [postInfo.id, postInfo.source_id]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Header text={'Запись'} navigation={navigation} />
        {loading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <>
            <FlatList
              style={styles.comments}
              ListHeaderComponent={<PostHeader postInfo={postInfo} />}
              data={postComments}
              renderItem={object => {
                return <PostComment comment={object.item} />;
              }}
              keyExtractor={item => item.commentId}
            />
            <View style={styles.footer}>
              <View style={styles.footer__container}>
                <TextInput
                  style={styles.footer__input}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Комментарий"
                  placeholderTextColor={colors.pearlPurple}
                />
                <TouchableOpacity>
                  <Icon
                    name={'paper-airplane'}
                    size={22}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Post;
