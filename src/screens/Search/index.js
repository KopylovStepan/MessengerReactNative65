import Search from './Search';
import {connect} from 'react-redux';
import React from 'react';

const SearchContainer = props => {
  return <Search {...props} />;
};

let mapStateToProps = state => {
  return {
    searchData: state.searchPage.searchData,
    isFetching: state.searchPage.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
