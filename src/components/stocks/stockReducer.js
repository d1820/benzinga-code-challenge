import { ACTIONS } from 'shared/const';

function visibilFilter(state = 'SHOW', action) {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return state;
    default:
      return state;
  }
}

export default function stock(state = {}, action) {
  return {
    visibilFilter: visibilFilter('SHOW', action)
  };
}
