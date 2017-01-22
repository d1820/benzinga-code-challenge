import React from 'react';
import SearchBar from 'components/search/SearchBar';
import Stock from 'components/stocks/Stock';
import Wait from 'shared/components/wait/Wait';
import YeomanImage from './YeomanImage';
import './app.less';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <YeomanImage />
        <SearchBar />
        <Stock />
        <Wait />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

