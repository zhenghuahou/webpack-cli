import path from 'path';
import webpack from 'webpack'
// import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

export default {
  watch:true,
  context: path.resolve(__dirname),
  entry: {
    app: './example.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename:'[name].[chunkhash:5].js',
    publicPath: ''
  },
  stats:"verbose",
  plugins:[
    //  new UglifyJSPlugin()
    //  new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_debugger: true,
    //     drop_console: true
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // })
  ]
}