var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //把 CSS 分离成文件
//const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除文件
const webpack = require('webpack');
var path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['latest']
        }
      },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.(less|css|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader:'css-loader', options: {url: false}}, //css路径不变
            {loader:'postcss-loader',options: {
              plugins: [
                require('postcss-import'),
                require('autoprefixer')
              ],
              browser: ['last 5 versions']
            }},
            {loader:'less-loader'},
            {loader:'sass-loader'}
          ]
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        /*loaders: [
          'url-loader?limit=50000&name=assets/[name]-[hash:5].[ext]',
          'image-webpack-loader' //压缩图片 跟url-loader file-loader 搭配使用
        ],*/
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(), //模块热替换
    new webpack.HotModuleReplacementPlugin(), //模块热替换
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      title: "hello world",
      /*minify: {
        collapseWhitespace: true,
      },*/
      excludeChunks: ['demo'],
      hash: true
    }),
    new htmlWebpackPlugin({
      filename: 'demo.html',
      template: 'demo.html',
      chunks: ['demo'],
      hash: true
    }),
    new ExtractTextPlugin(
      {
        filename: 'css/[name].[contenthash].css',
        //filename: 'css/[name].css',
        disable: false
        //disable: !isProd
      }
    ),
    new webpack.ProvidePlugin({ //使用 webpack 的一个插件ProvidePlugin 插件来处理像 jQuery 这样的第三方包
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ]
}