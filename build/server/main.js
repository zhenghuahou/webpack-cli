/*
  mock后端服务
*/
import path from "path";
import ip from "ip";
import koa from "koa";
import chalk from "chalk";
import views from "koa-views";
import serve from "koa-static";
import cors from "@koa/cors";
import router from "./router";
import config from "../../config";

const app = new koa();

//后端服务接口
const { bkdServerPort } = config;
app.port = bkdServerPort;

//Enable All CORS Requests
app.use(cors());

app.use(views(`${__dirname}/views`, { extension: "ejs" }));
app.use(serve(path.resolve(process.cwd(), "dist/")));

//add router
router(app);

app.listen(app.port, () => {
    console.warn(
        `mock-server at ${chalk.magenta.underline(
            `http://${ip.address()}:${bkdServerPort}/`
        )}`
    );
});
