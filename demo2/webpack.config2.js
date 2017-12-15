var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require('autoprefixer')({
          browser: ['last 5 versions']
        })]
      }
    })
  ]
}