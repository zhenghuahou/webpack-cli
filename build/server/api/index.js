import fs from "fs";
import path from "path";
import lowdb from "lowdb";
import Router from "koa-router";
// import { getFiles, readFile } from "../util";
import util from "../util";
import FileAsync from "lowdb/adapters/FileAsync";

const router = new Router();

async function getData(ctx) {
    const data = await util
        .readFile(`${__dirname}${ctx.pathname}`, "utf8")
        .catch(function(error) {
            // console.error(`【${error}】`,error.status);
        });
    return data;
    // return await getLowdb(`${__dirname}${ctx.pathname}`);
    //ok,但是访问不存在的api,会在mock文件夹下面生成一相应的json文件
}

async function getLowdb(filename) {
    const adapter = new FileAsync(filename);
    return lowdb(adapter).then(db => {
        // console.warn(" db:", db);
        return db.get("data");
    });
}

function render(ctx, content, options = {}) {
    ctx.status = options.status || 200;
    ctx.type = options.type || "json";
    if (!content) {
        ctx.status = 404;
        content = {
            status: -1,
            message: "访问不到该api接口"
        };
    }
    ctx.body = content;
}

export { render, getData };
