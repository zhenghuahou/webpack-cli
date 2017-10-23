//测试页面
const test = () => import(/* webpackChunkName: "test" */ './views/test') //ok
// const test = (resolve) => import(/* webpackChunkName: "test" */ './views/test').then(function(r){
//   console.warn('resolve------------>',resolve,'  \n arguments------->',arguments,' \n r:',r,resolve === arguments[0],resolve === r);
//   r.call(null,arguments[1]);
// }.bind(this,resolve)); // ok
 
// console.warn(' test:',test,' --->',resolve => import(/* webpackChunkName: "test" */ './views/test'))
export default [{
    path: '/test',
    name: 'test',
    meta:{
      title:'test页面',
    },
    component:test
  }
]