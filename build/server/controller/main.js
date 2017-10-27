import ip from "ip";
import config from "../../../config";

const _ip = ip.address();
const port = config.bkdServerPort;
export default {
    //首页
    index: async function(ctx, next) {
        await ctx.render("index", {
            title: "欢迎使用无后端开发模式",
            staticUrl:`http://${_ip}:${port}`
        });
    }
};
