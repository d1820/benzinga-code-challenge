/* Exports all the actions from a single point.
Allows to import actions like so:
import {action1, action2} from '../actions/'
*/

import * as searchActs from 'components/search/searchActions';
import * as stockActs from 'components/stocks/stockActions';
import * as sharedActs from 'shared/sharedActions';

// const actions = {
//   searchActions: { ...searchActions},
//   stockActions: { ...stockActions},
//   sharedActions: { ...sharedActions}
// };
export const searchActions = { ...searchActs};
export const stockActions = { ...stockActs};
export const sharedActions = { ...sharedActs};

