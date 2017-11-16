/*
  后端服务页面路由
*/
import fs from "fs";
import path from "path";
import Router from "koa-router";
import main from "./controller/main";
import api from "./controller/api";
import config from "../../config";


const { devServerPort, bkdServerPort } = config;

export default function(app) {
    const router = new Router();

    app.port = app.port || devServerPort;

    //首页
    router.get("/", main.index);

    //api mock数据
    router.get("/mock(/.+)?", api.index);

    //其他的路径都定位到首页
    router.get(/^[\w|\/]+$/, main.index);

    app.use(router.routes());
    app.use(router.allowedMethods());
}
