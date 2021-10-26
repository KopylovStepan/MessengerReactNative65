import Post from './Post';
import {connect} from 'react-redux';
import React from 'react';

const PostContainer = props => {
  return <Post {...props} />;
};

let mapStateToProps = state => {
  return {
    post: state.postPage.post,
    isFetching: state.postPage.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
