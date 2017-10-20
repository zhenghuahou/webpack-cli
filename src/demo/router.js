//协议页面
const demo = r => require.ensure([], () => r(require('./views/demo.vue')), 'demo')

        
export default [{
    path: '/demo',
    name: 'demo',
    meta:{
      title:'demo页面',
    },
    component: demo,
    // 路由独享的钩子
    // beforeEnter:(to, from, next)=>{
    // 	next();
    // }
  }
]