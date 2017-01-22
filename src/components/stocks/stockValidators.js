
export default class StockValidator {

  static validate(portfolio, stock, quantity) {
    const match = portfolio.myStocks.find((item) => {
      return item.symbol === stock.symbol;
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

}



