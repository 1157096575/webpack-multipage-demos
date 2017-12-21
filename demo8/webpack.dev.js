const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '10.41.3.23',
    inline: true,
    port: 9000,
    open: true,
  }
});