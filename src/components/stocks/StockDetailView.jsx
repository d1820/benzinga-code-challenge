import React, { Component, PropTypes } from 'react';

class StockDetailView extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onBuy = this.onBuy.bind(this);
    this.onSell = this.onSell.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.state = {
      quantity: '',
      error: null
    };
  }

  onBuy() {
    this.props.buyClick(this.state.quantity);
    this.setState({
      quantity: ''
    });
  }
  onSell() {
    this.props.sellClick(this.state.quantity);
    this.setState({
      quantity: ''
    });
  }
  setQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }
  renderStock(stock) {
    if (!stock) return null;
    const props = this.props;
    return (
      <div className="stock-detail-container">
        <h2>{stock.symbol}</h2>
        <div className="form-group">
          <input type="text" id="bnuysellamount" className="form-control" placeholder="Quantity" value={this.state.quantity} onChange={this.setQuantity} />
        </div>
        <button className="btn btn-primary" onClick={this.onBuy} disabled={!this.state.quantity}>Buy</button>
        <button className="btn btn-primary" onClick={this.onSell} disabled={!this.state.quantity}>Sell</button>
      </div>
    );
  }

  render() {
    const stockDetail = this.renderStock(this.props.stock);
    return (
      <div>
        {stockDetail}
      </div>
    );
  }
}
StockDetailView.propTypes = {
  stock: PropTypes.object,
  buyClick: PropTypes.func.isRequired,
  sellClick: PropTypes.func.isRequired
};
StockDetailView.defaultProps = {
  stock: null,
};
export default StockDetailView;
