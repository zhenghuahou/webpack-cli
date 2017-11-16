/**
 * 构建生成未压缩的代码到dist目录，方便检查
 */
import webpack from "webpack";
import ip from "ip";
import chalk from "chalk";
import webpackConfig from "../webpack.config.prod";
import config from "../../config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
// import yargs from 'yargs';
// const argv = yargs.argv;

const port = config.bkdServerPort;

const {
    npm_config_report: report = false,
    npm_config_banwatch: banWatch = false
} = process.env;

// remove webpack.optimize.UglifyJsPlugin
webpackConfig.plugins.splice(
    webpackConfig.plugins.findIndex(
        p => p instanceof webpack.optimize.UglifyJsPlugin
    ),
    1
);

webpackConfig.watch = !banWatch;
webpackConfig.output.publicPath = `http://${ip.address()}:${port}/`;

//https://github.com/webpack-contrib/webpack-bundle-analyzer
report &&
    webpackConfig.plugins.push(
        new BundleAnalyzerPlugin({
            generateStatsFile: true,
            logLevel: "silent"
        })
    );

webpack(webpackConfig, function(err, stats) {
    // console.log(' stats:',stats);
    if (err) {
        return console.error(err);
    }

    console.log(
        stats.toString({
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: true, //true
            chunks: false, //true
            modules: false, //true
            chunkModules: false,
            children: false,
            errorDetails: true
        })
    );

    if (stats.hasErrors() || stats.hasWarnings()) {
        return console.log(
            chalk.yellow.bold("==================编译过程有错误或者警告==================")
        );
    }
    console.log(chalk.yellow.bold("========前端构建完成======="));
});
