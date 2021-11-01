import CustomDrawer from './CustomDrawer';

import {connect} from 'react-redux';
import React from 'react';
import {getUserProfileInfo} from '../../redux/actions/profile-actions.js';

const CustomDrawerContainer = props => {
  return <CustomDrawer {...props} />;
};

let mapStateToProps = state => {
  return {
    profileInfo: state.profilePage.profileInfo,
    loadingInfo: state.profilePage.loadingInfo,
    error: state.profilePage.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfileInfo: () => {
      dispatch(getUserProfileInfo());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomDrawerContainer);
