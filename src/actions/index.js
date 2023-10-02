// src/actions/index.js
import { SET_SEARCH_TERM, SET_CURRENT_PAGE } from './types';

export const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
