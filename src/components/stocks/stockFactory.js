export function createStockItem(stock, quantity) {
  return {
    symbol: stock.symbol,
    name: stock.name,
    price: stock.askPrice,
    total: stock.askPrice * quantity,
    quantity
  };
}
