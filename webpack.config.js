const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/[name].js',
    // filename: '[name].js',
    assetModuleFilename: '[name][ext][query]',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: {
                filter: url => url.startsWith('~'),
              },
            }
          },
        ],
      },
      {
        test: /\.ext1$/,
        type: 'asset/resource',
        generator: {
          outputPath: 'ext1',
          publicPath: '/dist/ext1/',
        }
      },
      {
        test: /\.ext2$/,
        type: 'asset/resource',
        generator: {
          outputPath: 'ext2',
          publicPath: '/dist/ext2/',
        }
      },
    ],
  },
  optimization: {
    chunkIds: 'named',
    moduleIds: 'deterministic',
    concatenateModules: false,
    minimizer: [],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      // filename: '[name].css',
    }),
  ],
};
