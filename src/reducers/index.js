// src/reducers/index.js
import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, SET_CURRENT_PAGE } from '../actions/types';

const searchTermReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer = (state = 1, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  searchTerm: searchTermReducer,
  currentPage: currentPageReducer,
});
