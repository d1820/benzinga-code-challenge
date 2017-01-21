import { connect } from 'react-redux';
import component from './SearchBarView';
import { searchAsync, searchTermChanged } from './searchActions';

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: state.search.searchTerm
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearchClick: (searchTerm) => {
      dispatch(searchAsync(searchTerm));
    },
    onPropertyChanged: (value) => {      
      dispatch(searchTermChanged(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(component);
