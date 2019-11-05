const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const OUTPUT_JS_PATTERN = 'js/[name].[hash:8].js';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: OUTPUT_JS_PATTERN,
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
    host: '10.0.30.241',
    inline: true,
    progress: true,
    port: 9090,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      //'@': resolve('src'),
      'src': path.resolve(__dirname, '../src'),
      'common': path.resolve(__dirname, '../src/common'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            pageSize: Number.MAX_VALUE,
          }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new VueLoaderPlugin()
  ]
}