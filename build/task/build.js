/**
 * 构建
 *
 * 生成未压缩的代码到dist目录，方便检查
 */
import webpack from 'webpack'
import ip from 'ip'
import webpackConfig from '../webpack.config.prod'

// remove webpack.optimize.UglifyJsPlugin
webpackConfig.plugins.splice(webpackConfig.plugins.findIndex((p) => p instanceof webpack.optimize.UglifyJsPlugin), 1);

webpackConfig.watch = true;
// webpackConfig.output.publicPath = `http://${ip.address()}/qqd-wxent/`;

webpack(webpackConfig, function(err, stats) {
    // console.log(' stats:',stats);
    if (err) {
        return console.error(err)
    }
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
})
