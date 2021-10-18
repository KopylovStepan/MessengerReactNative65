import Search from './Search';
import {connect} from 'react-redux';
import React from 'react';
import {getSearchPeople} from './../../redux/actions/search-action';

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
  return {
    getSearchPeople: () => dispatch(getSearchPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
