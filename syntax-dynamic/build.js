import webpack from 'webpack'
import webpackConfig from './webpack.config'
import {argv}  from 'yargs'

const dir = typeof argv.dist ==="string" ? argv.dist : 'dist';
const path = `${__dirname}/${dir}`;

webpackConfig.output.path = `${path}`;
webpackConfig.output.publicPath = `${path}/`;
const compiler = webpack(webpackConfig);// 测试用的
const webpackCompiler = webpack(webpackConfig,function(err,stats){
    if (err) {
        return console.error(err)
    }
    // console.log(' stats:',stats);
    // const jsonStats = stats.toJson()
    console.log(stats.toString({
        colors: true,
        hash: true,
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: false,
        children: false,
        modules: false,
        errorDetails : false
      }))
    if(stats.hasErrors() || stats.hasWarnings()) {
        return console.log(' =========编译过程有错误或者警告=========')
    }
    console.log('=========构建完成=========')
});
/*
compiler 与 webpackCompiler 返回的是2个结构不一样对象。
compiler的结构与webpackCompiler.compiler很像，只是比webpackCompiler.compiler对象少了_lastCompilationContextDependencies，_lastCompilationFileDependencies这2个属性
*/