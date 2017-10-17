import webpack from 'webpack'
import webpackConfig from './webpack.config'
import {argv}  from 'yargs'

const dir = typeof argv.dist ==="string" ? argv.dist : 'dist';
// console.log(' yargs:',argv);
const path = `${__dirname}/${dir}`;
webpackConfig.output.path = `${path}`;
webpackConfig.output.publicPath = `${path}/`;
const webpackCompiler = webpack(webpackConfig,function(err,stats){
  
})
