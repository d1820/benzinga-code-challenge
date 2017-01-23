import React, { Component, PropTypes } from 'react';
import { createUniqueId } from 'shared/utils';

class StockSearchErrorView extends Component {
  render() {
    const errorList = [];
    this.props.errors.forEach(function (item, index) {
      if (item) {
        const id = createUniqueId('error');
        errorList.push((
          <li key={id}>{item}</li>
        ));
      }
    });
    return (
      <div className="error-container">
        <ul>
          {errorList}
        </ul>
      </div>
    );
  }
}
StockSearchErrorView.propTypes = {
  errors: PropTypes.array
};
StockSearchErrorView.defaultProps = {
  errors: null,
};
export default StockSearchErrorView;
