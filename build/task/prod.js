import webpack from "webpack";
import promptly from "promptly";
import chalk from "chalk";
import path from "path";
import webpackConfig from "../webpack.config.prod";
import { conf } from "../config";

const { env : envJson} = conf;
const envs = Object.keys(envJson);

//https://github.com/IndigoUnited/node-promptly
promptly.choose(
    `请选择发布${chalk.yellow.bold(envs[0])}/${envs.slice(1).join('/')}环境:`,
    envs,
    { default: "test" },
    (err, env) => {
        build(env);
    }
);

function build(env) {
    webpackConfig.output.publicPath = envJson[env].publicPath;
    console.log(chalk.cyan.bold(`您正在为${env}环境打包`));
    webpack(webpackConfig, function(err, stats) {
        if (err) {
            throw err;
        }
        console.log(
            stats.toString({
                colors: true,
                hash: false,
                version: false,
                timings: false,
                assets: true,
                chunks: false,
                children: false,
                modules: false,
                errorDetails : true
            })
        );
        console.log(chalk.cyan(`${env}环境构建完成`));
        return process.exit(0); //退出当前进程
    });
}
