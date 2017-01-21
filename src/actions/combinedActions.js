/* Exports all the actions from a single point.
Allows to import actions like so:
import {action1, action2} from '../actions/'
*/

import search from 'components/search/searchActions';
import stocks from 'components/stocks/stockActions';

const actions = {
  search,
  stocks
};
module.exports = actions;
