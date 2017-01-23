import baseConfig from './base';

const config = {
  appEnv: 'dist',
  apiHostUrl: 'https://mysterious-fjord-82734.herokuapp.com'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
