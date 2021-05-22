module.exports = {
  mode: 'production',
  entry: {
    index: [
      './source/js/accordeon.js',
      './source/js/api.js',
    ],
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
  },
};
