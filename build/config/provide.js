/**
 * 无需导入可以直接使用的
 */
export default {
    //common中的代码会打包到vendor chunk中,即使entry.js中指定打包到app chunk,依然不起作用，最终还是会打包到vendor chunk中
    global: "common"  
};
