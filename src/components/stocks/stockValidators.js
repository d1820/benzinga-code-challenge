
export default class StockValidator {

  static validateBuy(portfolio, stock, quantity) {
    if (quantity < 1) {
      return 'Quantity must be greater than 0';
    }
    const match = portfolio.myStocks.find((item) => {
      return item.symbol.toUpperCase() === stock.symbol.toUpperCase();
    });
    if (match) {
      return `Stock ${stock.name} was already purchased`;
    }
    const cost = quantity * stock.askPrice;
    if (cost > portfolio.cash) {
      return `Insufficient funds to purchase ${stock.name}`;
    }
    return null;
  }

  static validateSell(portfolio, stock, quantity) {
    if (quantity < 1) {
      return 'Quantity must be greater than 0';
    }
    const match = portfolio.myStocks.find((item) => {
      return item.symbol.toUpperCase() === stock.symbol.toUpperCase();
    });
    if (!match) {
      return `Stock ${stock.name} was not found in portfolio`;
    }
    const cost = quantity * stock.askPrice;
    if (match.quantity < quantity) {
      return `Cannot sell more shares of ${stock.name} then owned.`;
    }
    return null;
  }

}



