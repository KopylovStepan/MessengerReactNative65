import Profile from './Profile';
import {connect} from 'react-redux';
import React from 'react';
import {getUserProfileInfo} from '../../redux/actions/profile-actions';

const ProfileContainer = props => {
  return <Profile {...props} />;
};

let mapStateToProps = state => {
  return {
    profileInfo: state.profilePage.profileInfo,
    profilePhotos: state.profilePage.profilePhotos,
    loading: state.profilePage.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfileInfo: () => {
      dispatch(getUserProfileInfo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
