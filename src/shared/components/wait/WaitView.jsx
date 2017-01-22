import React from 'react';
import Loading from 'react-loading';
import './wait.less';

class WaitView extends React.Component {
  renderLoader(props) {
    return (
      <div>
        <div className="background"></div>
        <div className="content">
          <h4>{props.waitText}</h4>
          <div className="center">
            <Loading type="spin" color="#e3e3e3" delay={100} />
          </div>
        </div>
      </div>
    );
  }
  render() {
    const props = this.props;
    const children = props.isRequesting ? this.renderLoader(props) : null;
    return (
      <div className="loading-container">

        {children}
      </div>
    );
  }
}
WaitView.propTypes = {

};
export default WaitView;
