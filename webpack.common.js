const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

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
      headPreconnect: ['https://fonts.gstatic.com'],
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      favicon: path.resolve(__dirname, 'src/assets/ico/favicon.ico'),
      template: path.resolve(__dirname, 'src/templates/login.html'),
      chunks: ['login'],
      headPreconnect: ['https://fonts.gstatic.com'],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        level: 8,
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
    new GenerateSW({
      swDest: './sw.bundle.js',
    }),    
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  
};
