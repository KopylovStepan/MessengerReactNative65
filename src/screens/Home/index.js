import Home from './Home';
import {connect} from 'react-redux';
import React from 'react';
import {getPosts} from '../../redux/actions/home-action';

const HomeContainer = props => {
  return <Home {...props} />;
};

let mapStateToProps = state => {
  return {
    posts: state.homePage.posts,
    loading: state.homePage.loading,
    error: state.homePage.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
