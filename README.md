## 技术栈
+ vue2 + vuex + vue-router + axios  SPA
+ koa2 + koa-router + lowdb + ejs 模板
+ webpack3 + HMR
+ 模拟后端 + 环境配置 + 打包 
+ ES6+构建，ES6+代码

## 开发环境：
node: **V8+**
> 为了能正常运行,建议node升级到V8+


## 使用方法
``` bash
npm run dev
```
1. 本地开发的时候运行此命令,不需要启动后端服务,会自动开启本地服务。
2. 开发服务器启动后，双击命令行上的链接地址即可在浏览器中打开首页。你可以在`config`文件夹中修改你的开发服务器配置。
编写代码保存，浏览器即可热刷新。
3. 因为前端入口文件只有一个`build/server/views/template.ejs`,用`html-webpack-plugin`插件渲染,通过给`html-webpack-plugin`传递`showHtmlWebpackPlugin:true`可以在页面渲染的时候输出`htmlWebpackPlugin`信息
4. 为了方便，`npm run dev`改成不走后端路由

``` bash
npm run build
```
 构建生成未压缩的代码到dist目录，方便检查打包之后，而又没有压缩的代码。没有热加载功能
    
``` bash   
npm run prod
```
打包生成测试环境或者线上环境代码时使用这个命令,此时代码是压缩过的


``` bash   
npm run server
```
开启本地mock api server服务,如果没有dist/manifest.json文件,则会在额外执行一次`npm run build --banwatch`打包前端代码到硬盘,如果dist/manifest.json文件已经存在,则不会再执行`npm run build --banwatch`


``` bash   
npm start
```
同时开启本地mock api server服务和前端自动化构建服务(带有前端热加载功能)


``` bash   
npm watch
```
用`nodemon`监听`build`目录里的代码变化(即监听构建代码),如果代码有变化则会自动重启服务


``` bash   
npm run build  distcustom
```
自定义输出目录为distcustom

``` bash   
npm run build distcustom --banwatch
```
自定义输出目录为distcustom,执行一次打包后就退出,即不监听文件变化

``` bash   
npm run build --report
```
使用[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)插件分析webpack打包生成的资源


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
|　　|---test 业务级文件入口
|　　|　　|---assets 业务资源图片以及样式 
|　　|　　|---components 业务组件  
|　　|　　|---views 业务入口 
|　　|　　|---api.js  api调用
|　　|　　|---router.js 业务路由
|　　|---example components组件demo案例目录  
|　　|　　|---pages  demo案例
|　　|　　|---config.json  demo路由相关配置
|　　|　　|---demos.vue demo入口文件
|　　|　　|---router.js demo路由 
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

## 温馨提示
vscode安装的`vetur`插件默认不格式`html`,格式化`html`,要在`首选项`下的`设置`中配置:
```js
//https://github.com/vuejs/vetur/issues/99
"vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      // js-beautify-html settings, see https://github.com/vuejs/vetur/blob/master/server/src/modes/template/services/htmlFormat.ts
      "wrap_attributes": "force-aligned"
    }
  }
```
