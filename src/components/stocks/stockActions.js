import { ACTIONS } from 'shared/const';


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

export function buyStock(stock, quantity) {
  return {
    type: ACTIONS.BUY_STOCK,
    stock,
    quantity
  };
}


export function sellStock(stock, quantity) {
  return (dispatch, getState) => {
    //check if can sell stock
    let state = getState();
    console.log(state);
  };
}
