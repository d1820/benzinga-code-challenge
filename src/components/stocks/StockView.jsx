import React, { Component, PropTypes } from 'react';
import StockValidator from './stockValidators';
import PortfolioDetailView from './PortfolioDetailView';
import StockDetailView from './StockDetailView';
import StockSearchErrorView from './StockSearchErrorView';
import './stocks.less';


class StockView extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.buyClick = this.buyClick.bind(this);
    this.sellClick = this.sellClick.bind(this);
    this.viewStockClick = this.viewStockClick.bind(this);
    this.state = {
      error: null
    };
  }
  buyClick(quantity) {
    const props = this.props;
    if (!quantity) {
      return;
    }
    const errorMessage = StockValidator.validateBuy(this.props.portfolio, props.stock, quantity);
    if (errorMessage) {
      this.setState({
        error: errorMessage
      });
      return;
    }
    this.props.onBuyClick(props.stock, quantity);
    this.setState({
      quantity: '',
      error: null
    });

  }
  sellClick(quantity) {
    const props = this.props;
    if (!quantity) {
      return;
    }
    const errorMessage = StockValidator.validateSell(this.props.portfolio, props.stock, quantity);
    if (errorMessage) {
      this.setState({
        error: errorMessage
      });
      return;
    }

    this.props.onSellClick(this.props.stock, quantity);
    this.setState({
      quantity: ''
    });
  }
  viewStockClick(symbol) {
    this.props.onViewClick(symbol);
  }

  render() {
    const props = this.props;
    const errors = [(props.searchError ? props.searchError.message : null), this.state.error];
    return (
      <div className="stock-container">
        <StockDetailView stock={props.stock} buyClick={this.buyClick} sellClick={this.sellClick} />
        <PortfolioDetailView onViewClick={this.viewStockClick} stocks={props.portfolio.myStocks} />
        <StockSearchErrorView errors={errors} />
      </div>
    );
  }
}
StockView.propTypes = {
  stock: PropTypes.object,
  portfolio: PropTypes.object.isRequired,
  onBuyClick: PropTypes.func.isRequired,
  onSellClick: PropTypes.func.isRequired,
  onViewClick: PropTypes.func.isRequired
};
StockView.defaultProps = {
  stock: null,
};
export default StockView;
