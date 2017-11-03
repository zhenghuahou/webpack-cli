import webpack from "webpack";
import chalk from "chalk";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import WebpackNotifierPlugin from "webpack-build-notifier";
import ManifestPlugin from "webpack-assets-manifest";
import autoprefixer from "autoprefixer";
import postcssPxtorem from "postcss-pxtorem";
import ip from "ip";
import path from "path";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ZipWebpackPlugin from "zip-webpack-plugin";
import { entry, alias, provide, conf, logoPath } from "./config";
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
        hashDigestLength: 8,
        path: `${process.cwd()}/dist`,
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name]_" + "[chunkhash]" + ".js",
        publicPath: `http://${ip.address()}/`
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
            space: 4,
            output: "manifest.json"
        }),
        new webpack.ProvidePlugin(provide),
        //进度条插件
        new ProgressBarPlugin({
            summary: false,
            format:
                chalk.green.bold("[:bar] :percent ") +
                chalk.yellow("(:elapsed seconds) :msg"),
            customSummary(buildTime) {
                process.stdout.write(
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
                NODE_ENV: '"production"'
            },
            __DEV__: false,
            __PROD__: true
        }),
        new ExtractTextPlugin({
            filename: "[name].[contenthash:8].css"
        }),
        // keep module.id stable when vender modules does not change
        //https://webpack.js.org/plugins/hashed-module-ids-plugin/#src/components/Sidebar/Sidebar.jsx
        new webpack.HashedModuleIdsPlugin(),

        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        //"manifest" should be placed at the end
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor","manifest"],
            minChunks: Infinity
        }),
        // equal to :
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     minChunks: Infinity
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "manifest",
        //     chunks: ["vendor"]
        // }),

        // https://github.com/johnagan/clean-webpack-plugin
        new CleanWebpackPlugin(["dist", "zip"], {
            root: process.cwd(),
            verbose: false
        }),

        // https://github.com/erikdesjardins/zip-webpack-plugin
        new ZipWebpackPlugin({
            path: "../zip", //relative (to Webpack output path)
            filename: `${conf.name}.zip`
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
