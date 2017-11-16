import fs from "fs";
import path from "path";
import shell from "shelljs";
import chalk from "chalk";
import config from "../../config";
import importFresh from "import-fresh";

try {
    var manifest = require("../../dist/manifest.json");
} catch (e) {
    const cmd = `npm run build --banwatch`;
    console.log(`【${chalk.redBright(`dist/manifest.json`)}】文件不存在>>>运行${chalk.redBright(cmd)}`);
    // Run external tool synchronously
    shell.exec(cmd, { silent: true });
}
// console.warn(' manifest：',manifest);

let util = {
    ip: config.ip,
    manifest
};

/*
*@params {string} arrays:过滤数组
*@params {string} fn:自定义的过滤函数
*
*使用方法：
*filter(
*    ["demo.js", "api.js"],
*    filename => filename !== path.basename(__filename)
*);
*/
function filter(arrays, fn) {
    return arrays.filter(fn);
}

function getManifest() {
    var file = path.resolve(__dirname, "../../dist", "manifest.json");
    var mainfest = importFresh(file);
    // console.warn(' importFresh  mainfest',mainfest);
    return mainfest;
}

/*
*批量把node api异步方法封装为async函数
*/
["readdir", "readFile"].forEach(function(name) {
    util[name] = async function(...args) {
        const [path = "", options = ""] = args;
        return await new Promise(function(resolve, reject) {
            fs[name](path, options, function(err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    };
});

/*
*@params {string} path:要读取的文件路径
*@return {string} 目标文件内容
*/
// async function readFile(path) {
//     return await new Promise(function(resolve, reject) {
//         fs.readFile(path, "utf8", function(err, data) {
//             if (err) {
//                return reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

/*
*@params {string} dirname:要查找的文件目录
*@return {Array} dirname下的文件名称数组
*/
// async function readdir(dirname = "") {
//     return await new Promise(function(resolve, reject) {
//         fs.readdir(dirname, function(err, files) {
//             if (err) {
//                 return reject(err);
//             }
//             resolve(files);
//         });
//     });
// }

// export { readdir, filter, readFile };
export { filter, getManifest };
// export { filter };
export default util;
