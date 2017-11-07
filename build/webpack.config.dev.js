import webpack from "webpack";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import WebpackNotifierPlugin from "webpack-build-notifier";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ManifestPlugin from "webpack-assets-manifest";
import chalk from "chalk";
import path from "path";
import { timestamp } from "./util";
import { entry, alias, provide, loader, logoPath } from "./config";
import mineConfig from "../config";
import { cssLoaders, styleLoaders } from "./util";

const { ip, bkdServerPort: port } = mineConfig;

const loaderOptions = {
    sourceMap: false,
    extract: false
};
const loaders = cssLoaders(loaderOptions);
const styleloaders = styleLoaders(loaderOptions);

const config = {
    watch: true,
    entry: entry,
    // devtool: 'eval-source-map',
    // devtool: "source-map",
    devtool: "cheap-module-eval-source-map",
    output: {
        hashDigestLength: 8,
        path: `${process.cwd()}/dist`,
        filename: "[name].js",
        chunkFilename: "[name]_" + "[chunkhash]" + ".js",
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
        //上线时需要后端加上版本号的文件
        // new ManifestPlugin({
        //     space: 4,
        //     output: 'dev/manifest.json',
        //     writeToDisk:true
        // }),
        new webpack.ProvidePlugin(provide),
        //进度条插件
        new ProgressBarPlugin({
            summary: false,
            format:
                chalk.green.bold("[:bar] :percent ") +
                chalk.yellow("(:elapsed seconds) :msg"),
            customSummary(buildTime) {
                process.stdout.write(
                    chalk.cyan(timestamp()) +
                        chalk.green.bold(
                            " ---------buildTime:" + buildTime + "---------\n"
                        )
                );
            }
        }),

        // https://github.com/RoccoC/webpack-build-notifier
        new WebpackNotifierPlugin({
            title: `前端自动化打包完成`,
            logo: logoPath,
            successSound: "Submarine",
            failureSound: "Glass",
            suppressSuccess: true
        }),

        //定义环境变量
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"development"'
            },
            __BASEAPI__:JSON.stringify(`http://${ip}:${port}`),
            // __IP__:JSON.stringify(ip),
            // __PORT__:port,
            __DEV__: true,
            __PROD__: false
        }),

        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            //[hash]:每次重新编译都会变,可以使用，但是不建议在开发环境使用
            filename: "[name].js",
            // filename: 'vendor.[hash].js',//hash:每次重新编译都会变,可以使用，但是不建议在开发环境使用

            //https://github.com/webpack/webpack-dev-server/issues/377
            // filename: 'vendor.[chunkhash].js',//开发环境下，热加载的HotModuleReplacementPlugin和[chunkhash]不能同时起作用，否则会报错
            minChunks: Infinity
        }),

        //允许错误不打断程序
        new webpack.NoEmitOnErrorsPlugin(),
        //https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            chunks: ["vendor", "app"],
            title: "首页",
            template: "build/server/views/template.ejs",
            inject: "body",
            showHtmlWebpackPlugin: false // true:在模板页面显示`htmlWebpackPlugin`信息
        })
    ]
};

export default config;
