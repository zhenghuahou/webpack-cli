import path from 'path';
import { resolve } from "../util";

const alias = {
    // vueComponents:'./src/components/index.js',//全局组件
    vueComponents:resolve('src','components','index.js'),//全局组件
    '@': resolve('src')
}

Object.keys(alias).forEach((name) => alias[name] = path.resolve(alias[name]));
export default alias;
