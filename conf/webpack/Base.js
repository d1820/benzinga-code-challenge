'use strict';  // eslint-disable-line

/**
 * Webpack configuration base class
 */
const fs = require('fs');
const path = require('path');

const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {

  constructor() {
    this._config = {};
  }

  /**
   * Get the list of included packages
   * @return {Array} List of included packages
   */
  get includedPackages() {
    return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)));
  }

  /**
   * Set the config data.
   * This will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @return {Object} config Final webpack config
   */
  get config() {
    return this._config;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dev';
  }

  /**
   * Get the absolute path to src directory
   * @return {String}
   */
  get srcPathAbsolute() {
    return path.resolve('./src');
  }

  /**
   * Get the absolute path to tests directory
   * @return {String}
   */
  get testPathAbsolute() {
    return path.resolve('./test');
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {
    const cssModulesQuery = {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:5]'
    };

    return {
      context: this.srcPathAbsolute,
      devtool: 'eval',
      devServer: {
        contentBase: './src/',
        publicPath: '/assets/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 3001,
        proxy: {
          '/api': {
            target: 'http://data.benzinga.com/',
            secure: false,
            changeOrigin: true,
            pathRewrite: {'^/api' : '/rest/richquoteDelayed'}
          }
        }
      },
      entry: './client.js',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js?$/,
            include: this.srcPathAbsolute,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },

          { test: /\.css$/, loader: 'style-loader!css-loader' },

          { test: /\.json$/, loader: 'json-loader' },

          { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]?[hash]' },

          { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
          {
            test: /\.(js|jsx)$/,
            include: [].concat(
              this.includedPackages,
              [this.srcPathAbsolute]
            ),
            loaders: [
              // Note: Moved this to .babelrc
              { loader: 'babel-loader' }
            ]
          }
        ]
      },
      output: {
        path: path.resolve('./dist/assets'),
        filename: 'app.js',
        publicPath: './assets/'
      },
      plugins: [],
      resolve: {
        alias: {
          actions: `${this.srcPathAbsolute}/actions/`,
          reducers: `${this.srcPathAbsolute}/reducers/`,
          components: `${this.srcPathAbsolute}/components/`,
          config: `${this.srcPathAbsolute}/config/${this.env}.js`,
          images: `${this.srcPathAbsolute}/images/`,
          sources: `${this.srcPathAbsolute}/sources/`,
          stores: `${this.srcPathAbsolute}/stores/`,
          styles: `${this.srcPathAbsolute}/styles/`,
          shared: `${this.srcPathAbsolute}/shared/`
        },
        extensions: ['.js', '.jsx'],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      }
    };
  }
}

module.exports = WebpackBaseConfig;
