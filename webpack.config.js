const path = require('path');
const SRC = path.join(__dirname, '/src/index.js');
const BUILD = path.join(__dirname, '/build');
const HTMLWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/public/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: SRC,
  output: {
    path: BUILD,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{ loader: 'file-loader?limit=1024&name=images/[name].[ext]'}]
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};