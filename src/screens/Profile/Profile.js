import React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, FlatList, ActivityIndicator} from 'react-native';
import styles from './ProfileStyle';
import ProfileHeader from './../../components/ProfileHeader/index';
import ProfileMoreDetails from './../../components/ProfileMoreDetails/index';
import ProfileMenu from './../../components/ProfileMenu/index';
import colors from '../../constants/colors';

const Profile = ({navigation, profile, isFetching, getUserProfile}) => {
  useEffect(() => {
    getUserProfile();
  }, [profile]);

  const [modalProfileDetails, setModalProfileDetails] = useState(false);
  const [modalProfileMenu, setModalProfileMenu] = useState(false);

  const showProfileMenu = () => {
    setModalProfileMenu(true);
  };
  const showProfileMoreDetails = () => {
    setModalProfileDetails(true);
  };
  // console.log(`out ${profile}`);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {isFetching ? (
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
                  profile={profile}
                />
              }
              data={profile.photos}
              renderItem={object => (
                <Image
                  key={object.id}
                  style={styles.photo}
                  source={object.item}
                />
              )}
              keyExtractor={item => item}
            />
          )}
        </View>
        {/* <Text>{console.log(`in ${profile} and ${isFetching}`)}</Text> */}
        <ProfileMoreDetails
          active={modalProfileDetails}
          setActive={setModalProfileDetails}
          profile={profile}
        />
        <ProfileMenu
          active={modalProfileMenu}
          setActive={setModalProfileMenu}
        />
      </View>
    </>
  );
};

export default Profile;
