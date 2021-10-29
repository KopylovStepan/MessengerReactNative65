import Friends from './Friends';
import {connect} from 'react-redux';
import React from 'react';
import {getFriends} from '../../redux/actions/friends-actions';

const FriendsContainer = props => {
  return <Friends {...props} />;
};

let mapStateToProps = state => {
  return {
    friends: state.friendsPage.friends,
    loading: state.friendsPage.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFriends: () => {
      dispatch(getFriends());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
