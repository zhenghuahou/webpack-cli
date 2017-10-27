## 实现
+ vue2 + vuex + vue-router   SPA
+ koa2 + koa-router + lowdb + ejs 模板
+ webpack3 + HMR
+ 模拟后端 + 环境配置 + 打包 
+ ES6+构建，ES6+代码

## 使用方法
``` bash
npm run dev
```
1. 本地开发的时候运行此命令,不需要启动后端服务,会自动开启本地服务。后端模板,路由在build/server中进行修改,添加
2. 开发服务器启动后，双击命令行上的链接地址即可在浏览器中打开首页。你可以在`config`文件夹中修改你的开发服务器配置。
编写代码保存，浏览器即可热刷新。
3. 因为前端入口文件只有一个,首页server/router.js配置路由的时候也都是走通用模板,不需要建立多个后端模板文件

``` bash
npm run build
```
 构建生成未压缩的代码到dist目录，方便检查打包之后，而又没有压缩的代码,没有热加载功能
    
``` bash   
npm run prod
```
打包生成测试环境或者线上环境代码时使用这个命令,此时代码是压缩过的


``` bash   
npm run server
```
开启本地server服务,支持本地mock api 数据


``` bash   
npm start
```
同时开启本地server服务和前端自动化构建服务，在联调接口时用这条命令


## 目录结构

项目根目录

``` 
|---build 项目构建代码  
|　　|---config 构建项目用到的配置  
|　　|---task 构建任务入口  
|　　|---server 本地server服务器 
|　　|---webpack.config.dev.js webpack开发配置  
|　　|---webpack.config.prod.js webpack上线配置  
|---config 项目配置  
|---node_modules node模块  
|---src 应用源码目录  
|　　|---demo 业务级文件入口
|　　|　　|---assets 业务资源图片以及样式 
|　　|　　|---components 业务组件  
|　　|　　|---views 业务入口 
|　　|　　|---api.js  api调用
|　　|　　|---router.js 业务路由 
|　　|---global 全局性资源  
|　　|　　|---assets   图片以及css文件  
|　　|　　|---iconfont 字体图标 
|　　|---router SPA站点路由 
|　　|　　|---index.js 
|　　|---store vuex模块
|　　|　　|---index.js 
|---dist 打包生成代码目录  
|---zip  zip包目录  
|---.babelrc      babel运行时配置  
|---.editorconfig 编辑器配置  
|---.gitignore    git忽略配置  
|---package.json  npm配置  
|---postcss.config.js postcss插件配置  
|---README.md 项目自述  
``` 