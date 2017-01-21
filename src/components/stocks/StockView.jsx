import React from 'react';
import './stocks.less';

class StockView extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.buyClick = this.buyClick.bind(this);
    this.sellClick = this.sellClick.bind(this);
  }
  buyClick() {
    // this.props.onSearchClick(this.props.searchTerm);
    console.log('d');
  }
  sellClick() {
    // this.props.onSearchClick(this.props.searchTerm);
    console.log('f;');
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
          <input type="text" id="bnuysellamount" className="form-control" placeholder="Quantity" onChange={(evt) => { props.onPropertyChanged(evt.target.value); } } />
        </div>
        <button className="btn btn-primary" onClick={this.buyClick}>Buy</button>
        <button className="btn btn-primary" onClick={this.sellClick}>Sell</button>
      </div>
    );
  }
  render() {
    const props = this.props;
    let children = null;
    if (props.stock) {
      children = this.renderStock(props);
    } else if (props.hasSearchError) {
      children = this.renderError(props);
    }

    return (
      <div>
        {children}
      </div>
    );
  }
}
StockView.propTypes = {

};
export default StockView;
