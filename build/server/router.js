/*
  后端服务页面路由
*/
import config from '../../config'
import ip from 'ip'

 let localIP = ip.address(), 
     port = config.devServerPort;

var defaultConfig = {
    title:'',
    staticTag:'app',
    localIP:localIP,
    port:port
}

//路由
export default function(app){
   
    // app.get('/index/my',function(req, res){ 
    //arguments 3个参数,第一个req,第二个参数 res 第三个参数next方法
    //console.log('arguments------>',arguments,arguments[0]===app,arguments.length);
    //匹配路径:http://10.7.248.201:9091/index/bind/
    app.get('/index/bind',(req, res)=>{
        res.render('./layouts/main',defaultConfig);
    });

    app.get('/isLive.action', (req,res) => {
        // console.log(' req:',req);
        res.send('success');
    });
    
    //走通用模板
    //匹配路径 例如 a a/b a/b/c
    //’/‘在[]直接可以不用转码
    app.use(/^[\w|/]+$/,function(req, res,next){
        // console.log('req.params:',req.params);
        res.render('./layouts/main',defaultConfig);
    });

    //因为开启了热加载,所有的js文件都是通过'http://10.7.248.201:9091/app.js'这种路径形式访问的
    //但是此项目又用了按需加载，如果访问页面的路径是http://10.7.248.201:9091/index/bind,那么按需加载的js文件路径就是
    //http://10.7.248.201:9091/index/bind_5126021.js,但是开启了热加载之后，这个路径就访问不到
    //所以通过中间件的形式对 /index/bind_xxx.js /a/b/demo.js这样的js文件进行过滤重定向到根目录
    //即访问 http://10.7.248.201:9091/index/bind_5126021.js会自动重定向到http://10.7.248.201:9091/bind_5126021.js
    app.use(/^([\w|\/]+)+\/(\w+)\.js$/,function(req,res,next) {
         // console.log('request.originalUrl:',req.originalUrl);
         // console.log('request.params:',req.params);
         // console.log('request.path:',req.path);
         // console.log('req.params[1]:',req.params[1]);
         if(req.params[1]){
            res.redirect(`/${req.params[1]}.js`);
         }
         res.end();
    });

}