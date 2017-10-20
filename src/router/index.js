import Vue from 'vue'
import VueRouter from 'vue-router'

import helloWorld from '@/components/HelloWorld'
import demo from '@/demo/router'

Vue.use(VueRouter)


let routes = [
  ...demo
];
console.log(' demo:',demo,' routes:',routes);

// routes.push({
//   path: '*',
//   redirect: { name: 'demo' },
// });

export default new VueRouter({
  mode: 'history',
  routes
})
