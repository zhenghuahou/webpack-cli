import webpack from 'webpack'
import webpackConfig from './webpack.config.babel.min'

console.log(' webpackConfig:',webpackConfig);
const webpackCompiler = webpack(webpackConfig,function(err,stats){
  
})
