import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

import { Col, Row, Menu, Submenu, MenuItem } from "element-ui";

//注册为全局组件
Vue.use(Col);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

const app = new Vue({
    el: ".mod-app",
    router,
    store,
    render: h => h(App)
});
