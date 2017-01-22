import React from 'react';
import { PropTypes } from 'react';
import StockValidator from './stockValidators';
import './stocks.less';


class StockView extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.buyClick = this.buyClick.bind(this);
    this.sellClick = this.sellClick.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.state = {
      quantity: '',
      error: null
    };
  }
  setQuantity(e) {
    this.setState({
      quantity: e.target.value
    });

  }
  buyClick() {
    const props = this.props;
    if (!this.state.quantity) {
      return;
    }
    const errorMessage = StockValidator.validate(this.props.portfolio, props.stock, this.state.quantity);
    if (errorMessage) {
      this.setState({
        error: errorMessage
      });
      return;
    }
    this.props.onBuyClick(props.stock, this.state.quantity);
    this.setState({
      quantity: '',
      error: null
    });

  }
  sellClick() {
    this.props.onSellClick(this.props.stock, this.state.quantity);
    this.setState({
      quantity: ''
    });
  }
  renderError(props) {
    return (
      <div>ERROR {props.searchError.message}</div>
    );
  }
  renderStock(props) {
    return (
      <div>
        <h2>{props.stock.symbol}</h2>
        <div className="form-group">
          <label htmlFor="itemtitle">Amount</label>
          <input type="text" id="bnuysellamount" className="form-control" placeholder="Quantity" value={this.state.quantity} onChange={this.setQuantity} />
        </div>
        <button className="btn btn-primary" onClick={this.buyClick}>Buy</button>
        <button className="btn btn-primary" onClick={this.sellClick}>Sell</button>
        <div>{this.state.error}</div>
      </div>
    );
  }
  renderPortfolio() {

  }
  renderMyStocks(stocks) {
    console.log('mystocks: ' + stocks);
  }
  render() {
    const props = this.props;
    let children = null;
    if (props.stock) {
      children = this.renderStock(props);
    } else if (props.hasSearchError) {
      children = this.renderError(props);
    }
    const mystocks = this.renderMyStocks(props.portfolio.myStocks);
    return (
      <div>
        {children}
      </div>
    );
  }
}
StockView.propTypes = {
  stock: PropTypes.object,
  portfolio: PropTypes.object.isRequired,
  onBuyClick: PropTypes.func.isRequired,
  onSellClick: PropTypes.func.isRequired
};
StockView.defaultProps = {
  stock: null,
};
export default StockView;
