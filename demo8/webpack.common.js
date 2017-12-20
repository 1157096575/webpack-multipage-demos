var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //把 CSS 分离成文件
const webpack = require('webpack');
var path = require('path');
var glob = require('glob');

//路径定义
var srcDir = path.resolve(process.cwd(), 'src');
//多入口文件
var entries = function() {
  var jsDir = path.resolve(__dirname, srcDir+'/static/js/')
  var entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
  var map = {};
  for (var i = 0; i < entryFiles.length; i++) {
    var filePath = entryFiles[i];
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    map[filename] = filePath;
  }
  return map;
}
//多个html
var html_plugins = function () {
  var entryHtml = glob.sync(srcDir + '/*.html')
  var r = []
  var entriesFiles = entries()
  for (var i = 0; i < entryHtml.length; i++) {
      var filePath = entryHtml[i];
      var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
      var conf = {
          template: '' + filePath,
          filename: filename + '.html'
      }
      if (filename in entriesFiles) {
          conf.inject = 'body'
          conf.chunks = [filename]
      }
      r.push(new HtmlWebpackPlugin(conf))
  }
  return r
};
//插件 用来拓展webpack功能
var plugins = [
  new webpack.NamedModulesPlugin(), //模块热替换
  new webpack.HotModuleReplacementPlugin(), //模块热替换
  new ExtractTextPlugin(
    {
      filename: 'css/[name].[contenthash].css',
      disable: false
    }
  ),
  new webpack.ProvidePlugin({ //使用 webpack 的一个插件ProvidePlugin 插件来处理像 jQuery 这样的第三方包
    $: "jquery",
    jQuery: "jquery",
    "windows.jQuery": "jquery"
  })
];
module.exports = {
  entry: entries(),
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
            {loader:'css-loader', options: {url: false}}, //css路径不变(有缺陷)
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
  plugins: plugins.concat(html_plugins())
}