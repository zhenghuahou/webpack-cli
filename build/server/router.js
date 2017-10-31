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

    // index
    router.get("/", main.index);

    app.port = app.port || devServerPort;

    // router.get('/api', async function(ctx,next){
    //     next()//执行下一个匹配的路由
    // });

    //api mock数据
    router.get("/mock(/.+)?", api.index);

    //其他的都定位到首页
    router.get("*", main.index);

    app.use(router.routes());
    app.use(router.allowedMethods());
}
