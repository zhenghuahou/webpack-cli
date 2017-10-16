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
    if (err) {
        return console.error(err)
    }
    const jsonStats = stats.toJson()
    if(jsonStats.errors.length > 0) {
        return console.log(jsonStats.errors)
    }
    if(jsonStats.warnings.length > 0) {
        return console.log(jsonStats.warnings)
    }
    console.log('ok')
})
