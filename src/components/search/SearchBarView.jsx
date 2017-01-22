import React from 'react';
import { PropTypes } from 'react';
import './searchbar.less';

class SearchBarView extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.searchClick = this.searchClick.bind(this);
  }
  searchClick() {
    this.props.onSearchClick(this.props.searchTerm);
  }
  render() {
    const props = this.props;
    return (
      <div>
        <h1>Hello, {props.searchTerm}</h1>

        <div className="form-group">
          <label htmlFor="itemtitle">Title</label>
          <input type="text" id="itemtitle" className="form-control" placeholder="Title" value={props.searchTerm} onChange={(evt) => { props.onPropertyChanged(evt.target.value); } } />
        </div>

        <button className="btn btn-primary" onClick={this.searchClick} disabled={!props.searchTerm}>Search</button>
      </div>
    );
  }
}
SearchBarView.propTypes = {
  searchTerm: PropTypes.string,
  onSearchClick: PropTypes.func.isRequired
};
SearchBarView.defaultProps = {
  searchTerm: ''
};
export default SearchBarView;
