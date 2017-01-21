import { connect } from 'react-redux';
import component from './StockView';
//import { searchAsyncComplete } from 'components/search/searchActions';

const mapStateToProps = (state, ownProps) => {
  return {
    stock: state.stocks.stock,
    searchError: state.search.searchError,
    hasSearchError: state.search.hasSearchError
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPropertyChanged: (value) => {      
      console.log(value);
      //dispatch(searchTermChanged(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(component);
