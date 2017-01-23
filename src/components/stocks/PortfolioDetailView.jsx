import React, { Component, PropTypes } from 'react';


class PortfolioDetailView extends Component {
  renderMyStocksHeader() {
    return (

      <tr key="header">
        <td >Company</td>
        <td className=" text-center" >Quantity</td>
        <td className=" text-center" >Price Paid</td>
        <td >&nbsp;</td>
      </tr>
    );
  }
  renderMyStocks(stocks) {
    if (!stocks) return null;
    const props = this.props;
    const myStockList = [];

    stocks.forEach(function (item, index) {
      const title = `Price per share: ${item.price}`;
      myStockList.push((
        <tr key={item.symbol}>
          <td className=" col-md-5">{item.name} ({item.symbol})</td>
          <td className=" text-center  col-md-2">{item.quantity}</td>
          <td className=" text-center  col-md-3" >{item.total.formatMoney()}&nbsp;&nbsp;<span aria-hidden="true" title={title} className="total-paid-info glyphicon glyphicon-info-sign"></span></td>
          <td className=" text-right col-md-2">
            <button className="btn btn-info" onClick={() => props.onViewClick(item.symbol)}>View Stock</button>
          </td>
        </tr>
      ));
    });
    return myStockList;
  }
  renderEmptyRow() {
    return (
      <tr key="emptyRow">
        <td colSpan="4" className=" col-md-12">No stocks found in portfolio</td>
      </tr>
    );
  }
  render() {
    let mystocks = this.renderMyStocks(this.props.stocks);
    let mystocksHeader = null;
    mystocksHeader = this.renderMyStocksHeader();
    if (mystocks && mystocks.length === 0) {
      mystocks = this.renderEmptyRow();
    }
    return (
      <div className="mystock-container">
        <div className="row header">
          <div className="col-md-6 text-left">Current Portfolio</div>
          <div className="col-md-6 text-right">Cash: {this.props.availableCash.formatMoney(2)}</div>
        </div>
        <table className="table stock-table">
          <thead>
            {mystocksHeader}
          </thead>
          <tbody>
            {mystocks}
          </tbody>
        </table>
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
