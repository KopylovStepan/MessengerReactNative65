import Search from './Search';
import {connect} from 'react-redux';
import React from 'react';
import {
  getSearchAll,
  getSearchPeople,
  getSearchGroups,
} from '../../redux/actions/search-action';

const SearchContainer = props => {
  return <Search {...props} />;
};

let mapStateToProps = state => {
  return {
    allData: state.searchPage.allData,
    peopleData: state.searchPage.peopleData,
    groupsData: state.searchPage.groupsData,
    loading: state.searchPage.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchAll: searchText => {
      dispatch(getSearchAll(searchText));
    },
    getSearchPeople: searchText => {
      dispatch(getSearchPeople(searchText));
    },
    getSearchGroups: searchText => {
      dispatch(getSearchGroups(searchText));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
