import {SET_SEARCH_PEOPLE, TOGGLE_IS_FETCHING} from './../types/search-types';

let initialState = {
  searchData: [],
  isFetching: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_PEOPLE:
      return {
        ...state,
        searchData: action.searchData,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default searchReducer;
