import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

const app = new Vue({
  el: '.mod-app',
  router,
  store,
  render: h => h(App)
});
