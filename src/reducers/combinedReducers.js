/* Combine all available reducers to a single root reducer. */
import { combineReducers } from 'redux';
import search from 'components/search/searchReducer';
import stocks from 'components/stocks/stockReducer';

const reducers = {
  search,
  stocks
};
const combinedReducers = combineReducers(reducers);
module.exports = combinedReducers;
