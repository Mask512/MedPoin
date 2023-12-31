const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    watchFiles: ['./src/templates/index.html'],
    port: 9100,
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
  },
  output: {
    filename: '[name].dev.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].dev.css',
    }),
    new Dotenv({
      path: '.env.development'
    }),
  ],
});
