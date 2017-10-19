import express from 'express'
import ip from 'ip'
import chalk from 'chalk'
import path from 'path';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import httpProxyMiddleware from 'http-proxy-middleware'
import exphbs from 'express-handlebars'

import config from '../../config'
import router from '../server/router'
import webpackConfig from '../webpack.config.dev'

const hotclient = ['webpack-hot-middleware/client?noInfo=true&reload=true']
const entry = webpackConfig.entry;

//把热加载配置插入到每个entry
Object.keys(entry).forEach((name) => {
    const value = entry[name]
    if (Array.isArray(value)) {
        value.unshift(...hotclient)
    } else {
        entry[name] = [...hotclient, value]
    }
})

const webpackCompiler = webpack(webpackConfig)
const devMiddleware = webpackDevMiddleware(webpackCompiler, {
    serverSideRender: true,
    publicPath: webpackCompiler.options.output.publicPath,
    //`quiet: true` display nothing to the console
    quiet: false,
    // `noInfo:true` display no info to console (only warnings and errors)
    noInfo:true,
    stats: {
        colors: true,
        hash: true,
        version: false,
        timings: true,
        assets: false,
        chunks: false,
        children: false,
        chunkModules: false,
        // Add details to errors (like resolving log)
        errorDetails : true
    }
})
const hotMiddleware = webpackHotMiddleware(webpackCompiler, {
    log: false
})

const devServer = express()

devServer.use(devMiddleware)
devServer.use(hotMiddleware)

// 设置模版引擎
devServer.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname:'.hbs',
    layoutsDir:path.join(__dirname,'../server/views/layouts')
}));
devServer.set('view engine', '.hbs');
devServer.set('views',path.join(__dirname,'../server/views'));


//add router
router(devServer);

devServer.listen(config.devServerPort, function () {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log(`dev-server at ${chalk.magenta.underline(`http://${ip.address()}:${this.address().port}/`)}`)
})


