import { ACTIONS } from 'shared/const';
import { createStockItem } from './stockFactory';

const initialState = {
  portfolio: {
    cash: 100000,
    myStocks: []
  },
  stock: null,
  error: null
};

export default function stock(state = initialState, action) {
  const self = this;
  switch (action.type) {
    case ACTIONS.SET_ACTIVE_STOCK:
      return Object.assign({}, state, {
        stock: action.stock
      });
    case ACTIONS.BUY_STOCK:
      const totalcost = action.quantity * action.stock.askPrice;
      return Object.assign({}, state, {
        portfolio: {
          cash: state.portfolio.cash - totalcost,
          myStocks: [...state.portfolio.myStocks, createStockItem(action.stock, action.quantity)]
        }
      });
    default:
      return state;
  }
}
