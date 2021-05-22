module.exports = {
  mode: 'production',
  entry: {
    index: './source/js/index.js',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
  },
};
