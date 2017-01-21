import { ACTIONS } from 'shared/const';

function fFilter(state = 'SHOW', action) {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return state;
    default:
      return state;
  }
}

export default function stocks(state = {}, action) {
  return {
    fFilter: fFilter('SHOW', action)
  };
}