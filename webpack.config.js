const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
