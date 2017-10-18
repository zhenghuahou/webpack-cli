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
    if (err) {
        return console.error(err)
    }
    // const jsonStats = stats.toJson()
    // if(jsonStats.errors.length > 0) {
    //     return console.log(jsonStats.errors)
    // }
    // if(jsonStats.warnings.length > 0) {
    //     return console.log(jsonStats.warnings)
    // }
    // console.log('ok')
    stats = stats.toJson({
        errorDetails: true
    });
    if(stats.errors.length > 0) {
        return console.log(stats.errors)
    }
    console.log('构建完成')
})
