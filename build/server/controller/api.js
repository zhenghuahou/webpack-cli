import { render, getData } from "../api";
import util from "../util";
import path from "path";

const { ip, manifest } = util;
const { sep } = path;

const Api = {
    //列表
    renderList: async function(ctx, next) {
        let dir = path.join(__dirname, "../api/", ctx.path);

        const files = await util.readdir(dir).catch(function(err) {
            console.dir(err);
            throw err
        });
        if (files && !files.length) {
             render(ctx, "该目录暂无api接口");
             return true;
        }
        const { port } = ctx.app;
        const { path: pathname } = ctx;
        const separator = pathname.slice(-1) === sep ? "" : sep;
        const apiJson = files.map(name => {
            return { name, link: `${pathname}${separator}${name}` };
        });

        await ctx.render("api", {
            title: "api接口列表",
            staticUrl: `http://${ip}:${port}`,
            vendorJS: manifest[`vendor.js`],
            appJS: manifest[`app.js`],
            css: manifest[`app.css`],
            apiJson
        });
        return true;
    },

    index: async function(ctx, next) {
        let { path: pathname } = ctx;
        const ext = path.extname(pathname);
        let done = false;
        //先找文件目录，如果文件目录不存在，则找后缀为.json文件
        if (!ext) {
            try{
                done = await Api.renderList(ctx, next);
            }catch(e){
                console.error(`该目录不存在:【${e.path}】`);
            }
            //如果文件目录不存在，则查找后缀为.json的文件
            pathname = `${pathname}.json`;
        }
       
        //直接返回json文件
        if(!done){
            ctx.pathname = pathname;
            const content = await getData(ctx);
            render(ctx, content);
        }
    }
};

export default Api;
