import Vue from 'vue'
import App from './App'
import router from './router'

const app = new Vue({
  el: '.mod-app',
  router,
  render: h => h(App)
});
