/*
  后端服务
*/
import path from "path";
import ip from "ip";
import koa from "koa";
import chalk from "chalk";
import views from "koa-views";
import serve from "koa-static";
import router from "./router";
import config from "../../config";

const app = new koa();
const {bkdServerPort} = config;

app.use(views(`${__dirname}/views`, { extension: "ejs" }));
app.use(serve(path.resolve(process.cwd(), 'dist/')))
//add router
router(app);

app.listen(bkdServerPort, () => {
    console.warn(
        `server at ${chalk.magenta.underline(
            `http://${ip.address()}:${bkdServerPort}/`
        )}`
    );
});