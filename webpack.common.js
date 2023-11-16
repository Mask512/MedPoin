const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: './src/scripts/index.js',
    login: './src/scripts/login.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'static/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|ico|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/assets/ico/favicon.ico'),
      template: path.resolve(__dirname, 'src/templates/index.html'),
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      favicon: path.resolve(__dirname, 'src/assets/ico/favicon.ico'),
      template: path.resolve(__dirname, 'src/templates/login.html'),
      chunks: ['login'],
    }),
    new Dotenv(),
  ],
};
