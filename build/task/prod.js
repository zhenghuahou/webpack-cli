import webpack from 'webpack'
import promptly from 'promptly'
import chalk from 'chalk'
import path from 'path'
import webpackConfig from '../webpack.config.prod'
import {upload as uploadConfig} from '../config'

//https://github.com/IndigoUnited/node-promptly
 promptly.choose(`请选择发布${chalk.yellow.bold('test')}/beta/prod环境:`, ['test', 'beta','prod'], 
    { default: 'test'}, (err, env) => {
    handlerConfig(env);
    build();
});


//处理webpack
function handlerConfig(env = 'test'){
    //保存当前用户输入的环境,供task/upload.js用
    uploadConfig.env=env;
    webpackConfig.output.publicPath = (function (argument) {
        var obj = {
                    "test":`http://house-test-water.oss.aliyuncs.com/resource/${uploadConfig.project}_test/`,
                    "beta":`http://house-test-water.oss.aliyuncs.com/resource/${uploadConfig.project}_beta/`,
                    "prod":`http://resource.iwjw.com/${uploadConfig.project}/`
                };
         return  obj[env];
     }());
    console.log(chalk.cyan(`您正在为${env}环境打包`));
}

function build(){
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw err
        }
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
        console.log(stats.toString({
            colors: true,
            hash: false,
            version: true,
            timings: true,
            assets: true,
            chunks: false,
            children: false
        }))
        
        if(uploadConfig.env === 'prod'){
           
            console.log(chalk.yellow.bold("　💛　❤️　💙　zip包已生成,执行【python ftp.py 项目名 版本号】提交压缩包到ftp即可"));
            
            return process.exit(0); //退出当前进程
        }

    });
}


