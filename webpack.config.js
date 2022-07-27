const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ENVIRONMENT } = require('./.env');
const { environment } = require('./manifest');

const OUTPUTDIRECTORY = 'build';
const PORT = 8081;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, OUTPUTDIRECTORY),
    filename: '[name].js',
    clean: true, // Remove unused files from the output folder
  },
  devtool: (environment === 'development') ? 'eval-source-map' : 'source-map', // Source map for meaningful error references (https://webpack.js.org/configuration/devtool/)
  devServer: {
    static: OUTPUTDIRECTORY,
    port: PORT,
    hot: true, // Enable default hot module reload, for advanced config read docs(https://webpack.js.org/guides/hot-module-replacement/)
    open: true,
  },
  optimization: {
    runtimeChunk: 'single', // Necessary for webpack devServer if there is more than one entry file(https://bundlers.tooling.report/code-splitting/multi-entry/)
  },
  plugins: [
    new HtmlWebpackPlugin({ // Checkout documentation for options here: https://github.com/jantimon/html-webpack-plugin
      template: './public/index.html',
      title: 'Node/React/TS Template',
    }),
  ],
  resolve: {
    //* * Enable imports without extensions, will resolve duplicate filenames in order of array */
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.jsx',
      '.json',
    ],
    //* * Enable alias resolution for file imports (https://webpack.js.org/configuration/resolve/#resolvealias) */
    alias: {
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { // Style Loaders
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { // Images can be added using webpackV5 built-in Asset Modules(https://webpack.js.org/guides/asset-modules/)
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]', // Place image assets into specific output folder
        },
      },
      { // Font Loaders
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      { // CSV support
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      { // XML support
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
};
