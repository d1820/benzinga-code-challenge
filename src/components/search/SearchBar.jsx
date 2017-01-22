import { connect } from 'react-redux';
import { searchActions } from 'actions';
import component from './SearchBarView';

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: state.search.searchTerm,
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearchClick: (searchTerm) => {
      if (!searchTerm) {
        return;
      }
      dispatch(searchActions.searchAsync(searchTerm));
    },
    onPropertyChanged: (value) => {
      dispatch(searchActions.searchTermChanged(value));
    },
    ...ownProps
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(component);
