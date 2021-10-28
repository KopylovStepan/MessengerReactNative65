import React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, FlatList, ActivityIndicator} from 'react-native';
import styles from './ProfileStyle';
import ProfileHeader from './../../components/ProfileHeader/index';
import ProfileMoreDetails from './../../components/ProfileMoreDetails/index';
import ProfileMenu from './../../components/ProfileMenu/index';
import colors from '../../constants/colors';

const Profile = ({
  navigation,
  profilePhotos,
  profileInfo,
  loadingInfo,
  loadingPhotos,
  getUserProfileInfo,
  getUserProfilePhotos,
  error,
}) => {
  useEffect(() => {
    getUserProfileInfo();
    getUserProfilePhotos();
  }, []);

  const [modalProfileDetails, setModalProfileDetails] = useState(false);
  const [modalProfileMenu, setModalProfileMenu] = useState(false);

  const showProfileMenu = () => {
    setModalProfileMenu(true);
  };
  const showProfileMoreDetails = () => {
    setModalProfileDetails(true);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {loadingInfo || loadingPhotos ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <FlatList
            style={styles.photos}
            numColumns={3}
            ListHeaderComponent={
              <ProfileHeader
                showProfileMenu={showProfileMenu}
                showProfileMoreDetails={showProfileMoreDetails}
                navigation={navigation}
                profile={profileInfo}
              />
            }
            data={profilePhotos}
            renderItem={object => (
              <Image
                key={object.id}
                style={styles.photo}
                source={{uri: object.item}}
              />
            )}
            keyExtractor={item => item}
          />
        )}
      </View>
      <ProfileMoreDetails
        active={modalProfileDetails}
        setActive={setModalProfileDetails}
        profile={profileInfo}
      />
      <ProfileMenu active={modalProfileMenu} setActive={setModalProfileMenu} />
    </View>
  );
};

export default Profile;
