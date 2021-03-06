import { connect } from 'react-redux';
import { stockActions, searchActions } from 'actions';
import component from './StockView';


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
      dispatch(searchActions.searchTermChanged(value));
    },
    onBuyClick: (stock, quantity) => {
      dispatch(stockActions.buyStock(stock, quantity));
    },
    onSellClick: (stock, quantity) => {
      dispatch(stockActions.sellStock(stock, quantity));
    },
    onViewClick: (symbol) => {
      dispatch(searchActions.searchTermChanged(symbol));
      dispatch(searchActions.searchAsync(symbol));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(component);




