import {LOAD_ALL, LOAD_PEOPLE, LOAD_GROUPS} from './../types/search-types';

export const getSearchAll = searchText => {
  return {
    type: LOAD_ALL,
    searchText: searchText,
  };
};

export const getSearchPeople = searchText => {
  return {
    type: LOAD_PEOPLE,
    searchText: searchText,
  };
};

export const getSearchGroups = searchText => {
  return {
    type: LOAD_GROUPS,
    searchText: searchText,
  };
};
