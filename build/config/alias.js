import path from "path";
import { resolve } from "../util";

const alias = {
    common: resolve("src", "global/common"), // 公用函数
    // vueComponents:resolve('src','components','index.js'),//全局组件
    "@": resolve("src")
};

Object.keys(alias).forEach(name => (alias[name] = path.resolve(alias[name])));
export default alias;
