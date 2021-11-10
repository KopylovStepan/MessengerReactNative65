import Home from './Home';
import {connect} from 'react-redux';
import React from 'react';
import {getPosts, getPostsMore} from '../../redux/actions/home-action';

const HomeContainer = props => {
  return <Home {...props} />;
};

let mapStateToProps = state => {
  return {
    posts: state.homePage.posts,
    loading: state.homePage.loading,
    error: state.homePage.error,
    next_from: state.homePage.next_from,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    },
    getPostsMore: next_from => {
      dispatch(getPostsMore(next_from));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
