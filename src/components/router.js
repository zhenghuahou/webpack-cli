const panel = r => require.ensure([], () => r(require('@/components/panel/demo')), 'panel');
const grid = r => require.ensure([], () => r(require('@/components/grid/demo')), 'grid');

//ui demo页面
const demo = r => require.ensure([], () => r(require('@/components/demo')), 'demo');

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