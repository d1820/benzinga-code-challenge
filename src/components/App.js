import React from 'react';
import store2 from 'store2';
import YeomanImage from './YeomanImage';
import './app.less';

class AppComponent extends React.Component {

  render() {
    //store2.session('test', {test: 'tes45454'}.getJson());
    return (
      <div className="index">
        <YeomanImage />
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

