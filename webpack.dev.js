const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9100,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  output: {
    filename: '[name].dev.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.dev.css',
    }),
  ],
});
