const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

console.log(' __dirname:',__dirname,' -->',path.resolve(__dirname));
module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './example.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins:[
  	 new UglifyJSPlugin()
  ]
};