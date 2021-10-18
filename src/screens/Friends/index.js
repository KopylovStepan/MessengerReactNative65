import Friends from './Friends';
import {connect} from 'react-redux';
import React from 'react';
import {getFriends} from '../../redux/actions/friends-action';

const FriendsContainer = props => {
  return <Friends {...props} />;
};

let mapStateToProps = state => {
  return {
    friends: state.friendsPage.friends,
    isFetching: state.friendsPage.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFriends: () => dispatch(getFriends()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
