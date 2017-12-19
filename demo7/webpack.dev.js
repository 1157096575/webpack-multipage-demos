const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    index: './src/js/index.js',
    demo: './src/js/demo.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 9000,
    open: true,
  }
});