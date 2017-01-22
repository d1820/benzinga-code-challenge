import { connect } from 'react-redux';
import component from './StockView';
import { buyStock, sellStock } from './stockActions';

const mapStateToProps = (state, ownProps) => {
  return {
    stock: state.stocks.stock,
    portfolio: state.stocks.portfolio,
    searchError: state.search.searchError,
    hasSearchError: state.search.hasSearchError
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPropertyChanged: (value) => {      
      console.log(value);
      //dispatch(searchTermChanged(value));
    },
    onBuyClick: (stock, quantity) => {
      dispatch(buyStock(stock, quantity));
    },
    onSellClick: (stock, quantity) => {
      dispatch(sellStock(stock, quantity));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(component);




