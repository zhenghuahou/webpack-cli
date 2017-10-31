import koa from "koa";
import ip from "ip";
import chalk from "chalk";
import path from "path";
import webpack from "webpack";
import { devMiddleware, hotMiddleware } from "koa-webpack-middleware";

import serve from "koa-static";
import views from "koa-views";
// import Router from 'koa-router'
// import router from "../server/router";

import config from "../../config";
import router from "../server/router";
import webpackConfig from "../webpack.config.dev";

const hotclient = ["webpack-hot-middleware/client?noInfo=true&reload=true"];
const entry = webpackConfig.entry;

//把热加载配置插入到每个entry
Object.keys(entry).forEach(name => {
    const value = entry[name];
    if (Array.isArray(value)) {
        value.unshift(...hotclient);
    } else {
        entry[name] = [...hotclient, value];
    }
});

// /Users/houzhenghua/github/webpack-demos/build/server/views
// console.warn(" dist:", path.resolve(__dirname, "../server/views"));
const compiler = webpack(webpackConfig);

// const devMiddleware = webpackDevMiddleware(compiler, {
const devMw = devMiddleware(compiler, {
    // serverSideRender: true,
    publicPath: compiler.options.output.publicPath,
    headers: { "X-Custom-Header": "yes" },
    //`quiet: true` display nothing to the console
    quiet: false,
    // `noInfo:true` display no info to console (only warnings and errors)
    noInfo: true,
    // reload: true,
    // lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
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
        errorDetails: true
    }
});
const hotMw = hotMiddleware(compiler, {
    log: console.log
});

const app = new koa();

app.use(devMw);
app.use(hotMw);

app.use(
    views(path.resolve(__dirname, "../server/views"), { extension: "ejs" })
);
app.use(serve(path.resolve(process.cwd(), "dist/")));

//add router
router(app);

app.listen(config.devServerPort, function() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(
        `dev-server at ${chalk.magenta.underline(
            `http://${ip.address()}:${this.address().port}/`
        )}`
    );
});
