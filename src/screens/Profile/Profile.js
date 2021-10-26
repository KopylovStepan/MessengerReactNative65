import React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, FlatList, ActivityIndicator} from 'react-native';
import styles from './ProfileStyle';
import ProfileHeader from './../../components/ProfileHeader/index';
import ProfileMoreDetails from './../../components/ProfileMoreDetails/index';
import ProfileMenu from './../../components/ProfileMenu/index';
import colors from '../../constants/colors';

const simulationData = {
  photos: [
    require('./../../../assets/img/Photo1.jpg'),
    require('./../../../assets/img/Photo2.jpg'),
    require('./../../../assets/img/Photo3.jpg'),
    require('./../../../assets/img/Photo4.jpg'),
    require('./../../../assets/img/Photo5.jpg'),
    require('./../../../assets/img/Photo6.jpg'),
    require('./../../../assets/img/Photo7.jpg'),
    require('./../../../assets/img/Photo8.jpg'),
    require('./../../../assets/img/Photo9.jpg'),
  ],
  photosAmount: 245,
  userName: 'Kat Williams',
  birthday: '08 октября 1992',
  location: 'Россия, Санкт-Петербург',
  job: 'Artist by Passion!',
  followersAmount: 2467,
  followingAmount: 1589,
  status: 'They never ask people to do things they wouldn’t do themselves.',
  education: 'ВГУЮ в г. Санкт-Петербург',
  telegram: 'http://t.me/durov',
  twitter: 'Durov',
  instagram: 'Pavel Durov',
  facebook: 'durov',
  paper: 'durov',
  tag: '@Williams',
};

const Profile = ({navigation, profile, isFetching, getUserProfile}) => {
  // useEffect(() => {
  //   getUserProfile();
  // }, [profile]);

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
                profile={simulationData}
              />
            }
            data={simulationData.photos}
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
      <ProfileMoreDetails
        active={modalProfileDetails}
        setActive={setModalProfileDetails}
        profile={simulationData}
      />
      <ProfileMenu active={modalProfileMenu} setActive={setModalProfileMenu} />
    </View>
  );
};

export default Profile;
