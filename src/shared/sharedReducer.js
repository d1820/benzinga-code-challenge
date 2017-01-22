import { ACTIONS } from './const';


const initialState = {
  isRequesting: false,
  waitText: 'Loading...'
};
export default function shared(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REQUESTING_DATA:
      return Object.assign({}, state, {
        isRequesting: action.isRequesting
      });
    default:
      return state;
  }
}
