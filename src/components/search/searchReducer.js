import { ACTIONS } from 'shared/const';

function visibilityFilter(state = 'SHOW', action) {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return state;
    default:
      return state;
  }
}

export default function search(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter('SHOW', action)
  };
}
