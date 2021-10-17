import React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import styles from './ProfileStyle';
import ProfileHeader from './../../components/ProfileHeader/index';
import ProfileMoreDetails from './../../components/ProfileMoreDetails/index';
import ProfileMenu from './../../components/ProfileMenu/index';

const data = [
  require('./../../../assets/img/Photo1.jpg'),
  require('./../../../assets/img/Photo2.jpg'),
  require('./../../../assets/img/Photo3.jpg'),
  require('./../../../assets/img/Photo4.jpg'),
  require('./../../../assets/img/Photo5.jpg'),
  require('./../../../assets/img/Photo6.jpg'),
  require('./../../../assets/img/Photo7.jpg'),
  require('./../../../assets/img/Photo8.jpg'),
  require('./../../../assets/img/Photo9.jpg'),
];

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
  console.log(`out ${profile}`);

  return (
    <>
      {isFetching ? (
        <Text>...Загрузка</Text>
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.container}>
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
              data={data}
              renderItem={object => (
                <Image
                  key={object.id}
                  style={styles.photo}
                  source={object.item}
                />
              )}
              keyExtractor={item => item}
            />
          </View>
          <Text>{console.log(`in ${profile} and ${isFetching}`)}</Text>
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
      )}
    </>
  );
};

export default Profile;
