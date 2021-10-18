import Post from './Post';
import {connect} from 'react-redux';
import React from 'react';
import {getPost} from '../../redux/actions/post-action';

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
  return {
    getPost: () => dispatch(getPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
