import { render, getData } from "../api";
import util from "../util";
import path from "path";

const {ip,port} = util;

const Api = {
    //首页
    renderList: async function(ctx, next) {
        let dir = path.join(__dirname, "../api/", ctx.path);

        const files = await util.readdir(dir).catch(function(err) {
            console.error(`【${err}】`);
        });

        if (!files) {
            return render(ctx, "不存在该文件目录", { status: 404 });
        }

        const apiJson = files.map(name => {
            return { name, link: `${ctx.path}${name}` };
        });
        await ctx.render("api", {
            title: "api接口列表",
            staticUrl:`http://${ip}:${port}`,
            apiJson
        });
    },

    index: async function(ctx, next) {
        let { path: pathname } = ctx;
        const ext = path.extname(pathname);

        //url是文件目录的情况
        if (pathname.slice(-1) == path.sep) {
            return Api.renderList(ctx, next);
        }
        //没有后缀的情况
        !ext && (pathname = `${pathname}.json`);

        ctx.pathname = pathname;
        const content = await getData(ctx);
        render(ctx, content);
    }
};

export default Api;
