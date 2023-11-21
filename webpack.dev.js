const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
