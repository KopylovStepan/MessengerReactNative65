import Profile from './Profile';
import {connect} from 'react-redux';
import React from 'react';
import {
  getUserProfileInfo,
  getUserProfilePhotos,
} from '../../redux/actions/profile-actions';

const ProfileContainer = props => {
  return <Profile {...props} />;
};

let mapStateToProps = state => {
  return {
    profileInfo: state.profilePage.profileInfo,
    profilePhotos: state.profilePage.profilePhotos,
    loadingInfo: state.profilePage.loadingInfo,
    loadingPhotos: state.profilePage.loadingPhotos,
    error: state.profilePage.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfileInfo: () => {
      dispatch(getUserProfileInfo());
    },
    getUserProfilePhotos: () => {
      dispatch(getUserProfilePhotos());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
