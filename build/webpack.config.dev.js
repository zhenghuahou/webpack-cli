import webpack from "webpack";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import WebpackNotifierPlugin from "webpack-build-notifier";
import chalk from "chalk";
import path from "path";
import ip from "ip";
import ManifestPlugin from "./plugins/manifest";
import { timestamp } from "./util";
import { entry, alias, provide, loader } from "./config";
import { cssLoaders, styleLoaders } from "./util";

const srcPath = path.resolve(__dirname, "../src");

const loaderOptions = {
    sourceMap: false,
    extract: false
};
const loaders = cssLoaders(loaderOptions);
const styleloaders = styleLoaders(loaderOptions);

//process.cwd():Users/houzhenghua/github/webpack-demos
//__dirname: /Users/houzhenghua/github/webpack-demos/build

const config = {
    watch: true,
    entry: entry,
    // devtool: 'eval-source-map',
    // devtool: "source-map",
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: `${process.cwd()}/dist`,
        filename: "[name].js",
        chunkFilename: "[name]_" + "[hash:7]" + ".js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: alias
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    compact: false,
                    cacheDirectory: true
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: loaders
                }
            },
            ...styleloaders,
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader",
                options: {
                    name: "[name]_[sha512:hash:base64:7].[ext]"
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin(provide),
        //进度条插件
        new ProgressBarPlugin({
            summary: false,
            format: chalk.green.bold("[:bar] :percent ") +
                chalk.yellow("(:elapsed seconds) :msg"),
            customSummary(buildTime) {
                process.stdout.write(
                    chalk.cyan(timestamp()) +
                        chalk.green.bold(
                            " ---------buildTime:" + buildTime + "---------"
                        )
                );
            }
        }),

        // https://github.com/RoccoC/webpack-build-notifier
        new WebpackNotifierPlugin({
            title: `前端自动化打包完成`,
            logo: "global/img/logo.png",
            successSound: "Submarine",
            failureSound: "Glass",
            suppressSuccess: true
        }),

        //定义环境变量
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"development"'
            },
            __DEV__: true,
            __PROD__: false
        }),

        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: Infinity
        }),

        //允许错误不打断程序
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

export default config;
