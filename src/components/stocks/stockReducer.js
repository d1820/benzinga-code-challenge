import { ACTIONS } from 'shared/const';


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
    case ACTIONS.BUY_STOCK_COMPLETE:
      return Object.assign({}, state, {
        portfolio: action.updatedPortfolio
      });
    case ACTIONS.SELL_STOCK_COMPLETE:
      return Object.assign({}, state, {
        portfolio: action.updatedPortfolio
      });
    case ACTIONS.LOAD_PORTFOLIO_COMPLETE:
      return Object.assign({}, state, {
        portfolio: action.portfolio
      });
    default:
      return state;
  }
}
