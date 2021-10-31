import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_FAILURE,
  LOAD_PEOPLE,
  LOAD_PEOPLE_SUCCESS,
  LOAD_PEOPLE_FAILURE,
  LOAD_GROUPS,
  LOAD_GROUPS_SUCCESS,
  LOAD_GROUPS_FAILURE,
} from './../types/search-types';

let initialState = {
  allData: [],
  peopleData: [],
  groupsData: [],
  searchText: '',
  loading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ALL_SUCCESS:
      return {
        ...state,
        allData: action.allData,
        loading: false,
      };
    case LOAD_ALL_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case LOAD_PEOPLE:
      return {
        ...state,
        loading: true,
      };
    case LOAD_PEOPLE_SUCCESS:
      return {
        ...state,
        peopleData: action.peopleData,
        loading: false,
      };
    case LOAD_PEOPLE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case LOAD_GROUPS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_GROUPS_SUCCESS:
      return {
        ...state,
        groupsData: action.groupsData,
        loading: false,
      };
    case LOAD_GROUPS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
