import React from 'react';
import SearchBar from 'components/search/SearchBar';
import Stock from 'components/stocks/Stock';
import Wait from 'shared/components/wait/Wait';
import YeomanImage from './YeomanImage';
import './app.less';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="container index ">
        <div className="row">
          <SearchBar />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Stock />
          </div>
        </div>
        <div className="created-by">
          Code Challenge 2017 - <a href="https://www.linkedin.com/in/danturco1" rel="noopener noreferrer" target="_blank">Dan Turco</a>
        </div>
        <Wait />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

