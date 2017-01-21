import { ACTIONS } from 'shared/const';


const initialState = {
  portfolio: [],
  cash: 100000,
  stock: null
};
export default function stock(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_ACTIVE_STOCK:
      return Object.assign({}, state, {
        stock: action.stock
      });
    default:
      return state;
  }
}
