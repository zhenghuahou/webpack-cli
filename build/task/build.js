/**
 * 构建生成未压缩的代码到dist目录，方便检查
 */
import webpack from 'webpack'
import ip from 'ip'
import chalk from 'chalk'
import webpackConfig from '../webpack.config.prod'
import config from "../../config";

const port = config.bkdServerPort;

// remove webpack.optimize.UglifyJsPlugin
webpackConfig.plugins.splice(webpackConfig.plugins.findIndex((p) => p instanceof webpack.optimize.UglifyJsPlugin), 1);

webpackConfig.watch = true;
webpackConfig.output.publicPath =  `http://${ip.address()}:${port}/`;

webpack(webpackConfig, function(err, stats) {
    // console.log(' stats:',stats);
    if (err) {
        return console.error(err)
    }
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log(stats.toString({
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules:false,
        chunkModules: false,
        children: false,
        errorDetails : true
      }))
    if(stats.hasErrors() || stats.hasWarnings()) {
        return console.log(chalk.yellow.bold('==================编译过程有错误或者警告=================='));
    }
    console.log(chalk.yellow.bold("==================前端构建完成=================="));
})
