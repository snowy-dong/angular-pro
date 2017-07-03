const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackBrowserPlugin = require('webpack-browser-plugin');
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "js/[name].[hash].js",
  },
  module: {
    loaders: [{
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules)/,
        loader: "url-loader"

      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-runtime']
        }
      }, {

        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css'],
    alias: {
      app: __dirname + '/app',
      style: __dirname + '/app/style',
      components: __dirname + '/app/components'
    }
  },
  plugins: [
    // new WebpackBrowserPlugin(),
    new ExtractTextPlugin("css/[name].[contenthash].css"),
    new HtmlWebpackPlugin({ //为您的Web应用程序生成一个坚实的基础html页面，其中包含所有Webpack生成的css和js文件。支持自定义模板，favicon，html-minification等：
      filename: "./index.html",
      template: "./index.html",
      minify: { //压缩html文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true // 删除空白符与换行符
      }
    }),
    //提取公共库
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "js/vendor.[hash].js"
    }),
  ]
}