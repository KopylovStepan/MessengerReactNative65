import Profile from './Profile';
import {connect} from 'react-redux';
import React from 'react';

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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
