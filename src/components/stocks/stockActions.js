
import { ACTIONS } from 'shared/const';
import { sessionManager } from '../../shared/sessionManager';
import { createStockItem } from './stockFactory';


export function setActiveStock(searchTerm, stock) {
  let stockItem = null;
  if (stock[searchTerm]) {
    stockItem = stock[searchTerm];
  }
  return {
    type: ACTIONS.SET_ACTIVE_STOCK,
    stock: stockItem
  };
}

export function buyStockComplete(updatedPortfolio) {
  return {
    type: ACTIONS.BUY_STOCK_COMPLETE,
    updatedPortfolio
  };
}

export function buyStock(stock, quantity) {
  return function (dispatch, getState) {
    const state = getState().stocks;

    const totalcost = quantity * stock.askPrice;
    const updatedPortfolio = Object.assign({}, state, {
      portfolio: {
        cash: state.portfolio.cash - totalcost,
        myStocks: [...state.portfolio.myStocks, createStockItem(stock, quantity)]
      }
    });
    sessionManager.save('portfolio', updatedPortfolio);
    dispatch(buyStockComplete(updatedPortfolio));
  };
}



export function sellStock(stock, quantity) {
  return {
    type: ACTIONS.SELL_STOCK,
    stock,
    quantity
  };
}

export function loadPortfolioComplete(portfolio) {
  return {
    type: ACTIONS.LOAD_PORTFOLIO_COMPLETE,
    portfolio
  };
}

export function loadPortfolioAsync() {
  return function (dispatch) {
    const currentPortfolio = sessionManager.load('portfolio');
    if (currentPortfolio) {
      dispatch(loadPortfolioComplete(currentPortfolio));
    }
  };
}
