import webpack from 'webpack'
import webpackConfig from './webpack.config.babel.min'
import {argv}  from 'yargs'

const dir = argv.dist || 'dist';
console.log('__dirname:',__dirname);
console.log(' process:',process.argv);
console.log(' yargs:',argv,argv.dist);
webpackConfig.output.path = `${__dirname}/${dir}`;
console.log(' webpackConfig：',webpackConfig);
const webpackCompiler = webpack(webpackConfig,function(err,stats){
  
})
