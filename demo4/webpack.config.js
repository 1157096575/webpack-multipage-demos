var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //把 CSS 分离成文件
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {  //代替webpack -d --watch
    port: 9000,
    //open: true,
    contentBase: "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
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
        //loader: 'style-loader!css-loader'
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'postcss-loader',options: {
            plugins: [
              require('postcss-import'),
              require('autoprefixer')
            ],
            browser: ['last 5 versions']
          }},
          {loader:'less-loader'},
          {loader:'sass-loader'}
        ],
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
      /*{
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        query: {
          name: 'assets/[name]-[hash:5].[ext]' //路径 文件名 5位数hash 后缀名
        }
      },*/
      /*{
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'url-loader', //可以指定limit参数 打包成base64编码
        query: {
          limit:50000,//50k
          name: 'assets/[name]-[hash:5].[ext]'
        }
      }*/
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
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      title: "hello world",
      /*minify: {
        collapseWhitespace: true,
      },*/
      hash: true
    }),
    new ExtractTextPlugin('css/index.css')
  ]
}