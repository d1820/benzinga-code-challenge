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
      <div className="search-container row">
        <div className="col-md-8 text-left"><h3>Simple Stock Exchange</h3></div>
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span></span>
            <input type="text" id="searchterm" className="form-control" aria-label="Enter Symbol" placeholder="Enter Symbol" value={this.state.searchTerm} onChange={this.onSearchTextChange} />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.searchClick} disabled={!this.state.searchTerm}>Lookup</button>
            </span>
          </div>
        </div>
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
