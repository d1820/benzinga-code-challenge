import React from 'react';
import store2 from 'store2';
import YeomanImage from './YeomanImage';
import SearchBar from 'components/search/SearchBar';
import Stock from 'components/stocks/Stock';
import Wait from 'shared/components/wait/Wait';
import './app.less';

class AppComponent extends React.Component {

  render() {
    //store2.session('test', {test: 'tes45454'}.getJson());
    return (
      <div className="index">
        <YeomanImage />
        <SearchBar></SearchBar>
        <Stock></Stock>
        <Wait></Wait>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

