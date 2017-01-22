import React, { Component, PropTypes } from 'react';
import './searchbar.less';

class SearchBarView extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.searchClick = this.searchClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.state = {
      searchTerm: props.searchTerm
    };
  }

  onSearchTextChange(evt) {
    this.setState({
      searchTerm: evt.target.value
    });
  }
  searchClick() {
    this.props.onSearchClick(this.state.searchTerm);
  }
  render() {
    const props = this.props;
    return (
      <div>
        <h1>Hello, {props.searchTerm}</h1>

        <div className="form-group">
          <label htmlFor="itemtitle">Search</label>
          <input type="text" id="searchterm" className="form-control" placeholder="Symbol" value={this.state.searchTerm} onChange={this.onSearchTextChange} />
        </div>

        <button className="btn btn-primary" onClick={this.searchClick} disabled={!this.state.searchTerm}>Search</button>
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
