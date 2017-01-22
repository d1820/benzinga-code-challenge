/* Combine all available reducers to a single root reducer. */
import { combineReducers } from 'redux';
import search from 'components/search/searchReducer';
import stocks from 'components/stocks/stockReducer';
import shared from 'shared/sharedReducer';

const reducers = {
  search,
  stocks,
  shared
};
const combinedReducers = combineReducers(reducers);
module.exports = combinedReducers;
