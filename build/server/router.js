/*
  后端服务页面路由
*/

import Router from 'koa-router'
import main from './controller/main'

const router = new Router()

// index
router.get('/', main.index)

export default router

//todo
// api
// router.get('/api/xxx.json', api.xx)
