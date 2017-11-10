import Vue from "vue";
import VueRouter from "vue-router";

import uiRouter from "@/example/router";
import demo from "@/demo/router";

Vue.use(VueRouter);
// let routes = [...demo, ...(__DEV__ ? uiRouter : [])];
let routes = [...demo, ... uiRouter];

console.table(routes);

routes.push({
    path: "*",
    redirect: { name: "test" }
});

export default new VueRouter({
    mode: "history",
    routes
});
