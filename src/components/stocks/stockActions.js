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
