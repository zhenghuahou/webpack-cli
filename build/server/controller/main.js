import util from "../util";

const { ip, port } = util;

export default {
    //首页
    index: async function(ctx, next) {
        ctx.res.setHeader(
            "keys",
            JSON.stringify({
                koa: "koa2",
                vue: "vue + vuex + vue-router"
            })
        );
        await ctx.render("index", {
            title: "欢迎使用无后端开发模式",
            staticUrl: `http://${ip}:${port}`
        });
    }
};
