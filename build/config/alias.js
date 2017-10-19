import path from 'path';

function resolve (dir) {
  return path.join(__dirname, '../..', dir)
}
const alias = {
    global:'./src/global/module/global.js',
    vueComponents:'./src/components/index.js',//鹊桥贷全局组件
    '@': resolve('src/components'), //鹊桥贷公用业务组件
}

Object.keys(alias).forEach((name) => alias[name] = path.resolve(alias[name]));
export default alias;
