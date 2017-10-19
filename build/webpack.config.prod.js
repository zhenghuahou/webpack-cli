import webpack from "webpack";
import chalk from "chalk";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import WebpackNotifierPlugin from "webpack-build-notifier";
import autoprefixer from "autoprefixer";
import postcssPxtorem from "postcss-pxtorem";
import ManifestPlugin from "./plugins/manifest";
import ip from "ip";
import path from "path";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ZipWebpackPlugin from "zip-webpack-plugin";
import { entry, alias, provide, upload } from "./config";
import { cssLoaders, styleLoaders } from "./util";

const srcPath = path.resolve(__dirname, "../src");

const loaderOptions = {
    minimize: true, //压缩css
    extract: true //提取css到单独文件
};
const loaders = cssLoaders(loaderOptions);
const styleloaders = styleLoaders(loaderOptions);

export default {
    watch: false,
    entry: entry,
    devtool: false,
    output: {
        path: `${process.cwd()}/dist`,
        filename: "[name].js",
        chunkFilename: "[name]_" + "[chunkhash:7]" + ".js",
        publicPath: `http://${ip.address()}/qqd-wxent/`
        // publicPath: 'http://house-test-water.oss.aliyuncs.com/resource/qqd-wxent_test/'
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: alias
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader",
                //underscore.js不经过babel编译,否则会报Cannot read property '_' of undefined
                exclude: [
                    path.resolve(__dirname, "../src/global/lib/underscore.js")
                ],
                include: [srcPath],
                options: {
                    compact: false
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
        //上线时需要后端加上版本号的文件
        new ManifestPlugin({
            versionFiles: ["common.css", "common.js", "app.js"],
            hashNum: 7
        }),
        new webpack.ProvidePlugin(provide),
        //进度条插件
        new ProgressBarPlugin({
            summary: false,
            format: chalk.green.bold("[:bar] :percent ") +
                chalk.yellow("(:elapsed seconds) :msg"),
            customSummary(buildTime) {
                process.stdout.write(
                    chalk.green.bold(
                        " ---------buildTime:" + buildTime + "---------"
                    )
                );
            }
        }),

        // https://github.com/RoccoC/webpack-build-notifier
        new WebpackNotifierPlugin({
            title: "鹊桥贷企业号",
            logo: "global/img/logo.png",
            successSound: "Submarine",
            failureSound: "Glass",
            suppressSuccess: true
        }),

        //定义环境变量
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            },
            __DEV__: false,
            __PROD__: true
        }),
        new ExtractTextPlugin({
            filename: "[name].css"
            // filename:path.join('static',  "css/[name].[contenthash].css")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: Infinity
        }),

        // https://github.com/johnagan/clean-webpack-plugin
        new CleanWebpackPlugin(["dist", "zip"], {
            root: process.cwd(),
            verbose: false
        }),

        // https://github.com/erikdesjardins/zip-webpack-plugin
        new ZipWebpackPlugin({
            path: "../zip", //relative (to Webpack output path)
            filename: `${upload.project}.zip`
        }),

        //允许错误不打断程序
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    ]
};
