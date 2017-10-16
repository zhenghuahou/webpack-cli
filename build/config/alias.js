import path from 'path';

function resolve (dir) {
  return path.join(__dirname, '../..', dir)
}
const alias = {
    zepto: './src/global/lib/zepto/zepto.js',
    template: './src/global/lib/template.js',
    store: './src/global/lib/store.js',
    understore:'./src/global/lib/underscore.js',
    global:'./src/global/module/global.js',
    iwjwLog:'./src/global/log/log.js',
    jps:'./src/global/module/jps.js',
    weixin:'./src/global/wx/wxsa.js',
    vueComponents:'./src/components/index.js',//鹊桥贷全局组件
    qqd:'./src/global/qqd/common.js', //鹊桥贷相关公用代码,
    '@': resolve('src/components'), //鹊桥贷公用业务组件
    // 'vue-router':'node_modules/vue-router/dist/vue-router.common.js' //vux-2.0 ui组件
    // vuxx:path.join(process.cwd(), 'node_modules/vuxx/src/components/'), //ok
}

Object.keys(alias).forEach((name) => alias[name] = path.resolve(alias[name]));
export default alias;
