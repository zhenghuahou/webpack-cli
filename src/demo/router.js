//测试页面
const test = r => require.ensure([], () => r(require('./views/test.vue')), 'test')

 
export default [{
    path: '/test',
    name: 'test',
    meta:{
      title:'test页面',
    },
    component: test,
    // 路由独享的钩子
    // beforeEnter:(to, from, next)=>{
    // 	next();
    // }
  }
]