const panel = () => import(/* webpackChunkName: "panel" */ './panel/demo')
const grid = () => import(/* webpackChunkName: "grid" */ './grid/demo')

//ui demo页面
const demo = () => import(/* webpackChunkName: "demo" */ './demo')


export default [{
        path:'/demo',
        name:'demo',
        meta:{
          title:'ui demo页面',
        },
        component: demo
    },  
    {
    path: '/demo/panel',
    name: 'demo-panel',
    component: panel,
    meta: {
      title: 'demo-panel 页面'
    }
  },
  {
    path: '/demo/grid',
    name: 'demo-grid',
    component: grid,
    meta: {
      title: 'demo-grid 页面'
    }
  }
];