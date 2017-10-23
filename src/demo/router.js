//测试页面
// const test = () => import(/* webpackChunkName: "test" */ './views/test') //ok
const test = resolve => import(/* webpackChunkName: "test" */ './views/test').then(resolve);
 
export default [{
    path: '/test',
    name: 'test',
    meta:{
      title:'test页面',
    },
    component:test
  }
]