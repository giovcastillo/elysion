const path = require("path");

module.exports = {
  entry: './browser/src/index.js',
  output: {
    path: path.resolve(__dirname, 'browser'),
    filename: 'elysion-compiler-bundle.js',
  },
  mode: 'production'
};