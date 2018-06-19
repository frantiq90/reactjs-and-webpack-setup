const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for Webpack (source folder).
  entry: './src/index.js',
  // Output folder.
  output: {
    path: path.join(__dirname, '/dist'),
    // Any name for file.
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        // Look for any .js files.
        test: /\.js$/,
        // Exclude all files from node_modules.
        exclude: /node_modules/,
        // Use Babel loader
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // Specify html template for HtmlWebpackPlugin.
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
