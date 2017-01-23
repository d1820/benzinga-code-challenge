import React, { Component, PropTypes } from 'react';


class PortfolioDetailView extends Component {
  renderMyStocksHeader() {
    return (
      <div className="row" key="header">
        <div className="col-md-3">Company</div>
        <div className="col-md-3">Quantity</div>
        <div className="col-md-3">Price Paid</div>
        <div className="col-md-3">&nbsp;</div>
      </div>
    );
  }
  renderMyStocks(stocks) {
    if (!stocks) return null;
    const props = this.props;
    const myStockList = [];
    if (stocks.length > 0) {
      myStockList.push(this.renderMyStocksHeader());
    }
    stocks.forEach(function (item, index) {
      const title = `Price per share: ${item.price}`;
      myStockList.push((
        <div className="row" key={item.symbol}>
          <div className="col-md-3">{item.name} ({item.symbol})</div>
          <div className="col-md-3">{item.quantity}</div>
          <div className="col-md-3" >{item.total.toFixed(2)} <span aria-hidden="true" title={title} className="total-paid-info glyphicon glyphicon-info-sign"></span></div>
          <div className="col-md-3">
            <button className="btn btn-info" onClick={() => props.onViewClick(item.symbol)}>View Stock</button>
          </div>
        </div>
      ));
    });
    return myStockList;
  }
  render() {
    const mystocks = this.renderMyStocks(this.props.stocks);
    return (
      <div className="mystock-container">
        <div className="row">
          <div className="col-md-6">Current Portfolio</div>
          <div className="col-md-6">{this.props.availableCash.toFixed(2)}</div>
        </div>
        {mystocks}
      </div>
    );
  }
}
PortfolioDetailView.propTypes = {
  stocks: PropTypes.array.isRequired,
  availableCash: PropTypes.number.isRequired,
  onViewClick: PropTypes.func.isRequired
};
export default PortfolioDetailView;
