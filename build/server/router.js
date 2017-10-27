/*
  后端服务页面路由
*/
import Router from 'koa-router'
import main from './controller/main'
import api from './controller/api'

const router = new Router()

// index
router.get('/', main.index)

// router.get('/api', async function(ctx,next){
//     next()//执行下一个匹配的路由
// });

//api mock数据
router.get('/mock(/.+)?',api.index);

//其他的都定位到首页
router.get('*',main.index)

// console.warn(' router:',router);

export default router
