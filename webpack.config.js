const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
    unsafe: './unsafe.js',
    withMentions: './withMentions.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'syndromica-markdown.[name].js',
    library: 'syndromicaMarkdown',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
};
