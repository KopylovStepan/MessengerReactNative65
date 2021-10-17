import Profile from './Profile';
import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {getUserProfile} from './../../redux/profile-reducer';

const ProfileContainer = props => {
  return <Profile {...props} />;
};

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => dispatch(getUserProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
