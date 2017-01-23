
import { ACTIONS, SESSION } from 'shared/const';
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

    const totalcost = (quantity * stock.askPrice).roundMoney();
    const updatedState = Object.assign({}, state, {
      portfolio: {
        cash: state.portfolio.cash - totalcost,
        myStocks: [...state.portfolio.myStocks, createStockItem(stock, quantity)]
      }
    });
    sessionManager.save(SESSION.PORTFOLIO, updatedState.portfolio);
    dispatch(buyStockComplete(updatedState.portfolio));
  };
}

export function sellStockComplete(updatedPortfolio) {
  return {
    type: ACTIONS.SELL_STOCK_COMPLETE,
    updatedPortfolio
  };
}

export function sellStock(stock, quantity) {
  return function (dispatch, getState) {
    const state = getState().stocks;

    const totalcost = (quantity * stock.bidPrice).roundMoney();
    const updatedArray = Array.from(state.portfolio.myStocks);
    let matchIndex = -1;
    //if no shares left remove
    const match = state.portfolio.myStocks.find((item, index) => {
      const isMatch = item.symbol.toUpperCase() === stock.symbol.toUpperCase();
      if (isMatch) {
        matchIndex = index;
      }
      return isMatch;
    });
    if (match) {
      if (match.quantity - quantity <= 0) {
        updatedArray.splice(matchIndex, 1);
      } else {
        const currentItem = updatedArray[matchIndex];
        currentItem.quantity -= quantity;
        currentItem.total -= totalcost;
      }
    }

    const updatedState = Object.assign({}, state, {
      portfolio: {
        cash: state.portfolio.cash + totalcost,
        myStocks: updatedArray
      }
    });
    sessionManager.save(SESSION.PORTFOLIO, updatedState.portfolio);
    dispatch(sellStockComplete(updatedState.portfolio));
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
    const currentPortfolio = sessionManager.load(SESSION.PORTFOLIO);
    if (currentPortfolio) {
      dispatch(loadPortfolioComplete(currentPortfolio));
    }
  };
}
