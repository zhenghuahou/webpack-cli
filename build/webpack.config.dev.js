import webpack from "webpack";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import WebpackNotifierPlugin from "webpack-build-notifier";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import chalk from "chalk";
import path from "path";
import ip from "ip";
import autoprefixer from "autoprefixer";
import postcssPxtorem from "postcss-pxtorem";
import ManifestPlugin from "./plugins/manifest";
import { timestamp } from "./util";
import { entry, alias, provide, loader } from "./config";
import { cssLoaders, styleLoaders } from "./util";

//https://github.com/webpack/loader-utils/issues/56
process.noDeprecation = true

const nodeModulesPath = path.resolve(process.cwd(), "node_modules");
const srcPath = path.resolve(__dirname, "../src");

const loaderOptions = {
    sourceMap: false,
    extract: false
};
const loaders = cssLoaders(loaderOptions);
const styleloaders = styleLoaders(loaderOptions);

//process.cwd()
//Users/houzhenghua/workspace/static/qqd-wxent

const config = {
    watch: true,
    entry: entry,
    // devtool: 'eval-source-map',
    // devtool: 'cheap-module-eval-source-map',
    devtool: "source-map",
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
                // exclude: /node_modules/,//ok
                // exclude: [nodeModulesPath], //exclude 优先
                //exclude,include如果包含重叠的区域，会exclude这个重叠区域
                //underscore.js不经过babel编译,否则会报Cannot read property '_' of undefined
                exclude: [
                    path.resolve(__dirname, "../src/global/lib/underscore.js")
                ],
                include: [srcPath],
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
        //上线时需要后端加上版本号的文件
        new ManifestPlugin({
            versionFiles: ["common.css", "common.js", "app.js", "app.css"],
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
                    chalk.cyan(timestamp()) +
                        chalk.green.bold(
                            " ---------buildTime:" + buildTime + "---------"
                        )
                );
            }
        }),

        // https://github.com/RoccoC/webpack-build-notifier
        new WebpackNotifierPlugin({
            title: `鹊桥贷企业号`,
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
