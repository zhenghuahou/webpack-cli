import util,{getManifest} from "../util";
// import util from "../util";
import path from "path";
const { ip } = util;
// const { ip,manifest } = util;

function cleanCache (module) {
    var path = require.resolve(module);
    require.cache[path] = null;
}

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
        const { port } = ctx.app;
        const manifest = getManifest();

        await ctx.render("index", {
            title: "欢迎使用无后端开发模式",
            staticUrl: `http://${ip}:${port}`,
            vendorJS: manifest[`vendor.js`],
            appJS: manifest[`app.js`],
            css: manifest[`app.css`],
            manifest: manifest[`manifest.js`]
        });
    }
};
