import Post from './Post';
import {connect} from 'react-redux';
import React from 'react';
import {getPostComments} from '../../redux/actions/post-actions';

const PostContainer = props => {
  return <Post {...props} />;
};

let mapStateToProps = state => {
  return {
    postComments: state.postPage.postComments,
    loading: state.postPage.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPostComments: (postId, ownerId) => {
      dispatch(getPostComments(postId, ownerId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
