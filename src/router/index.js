import Vue from "vue";
import VueRouter from "vue-router";

import uiRouter from "@/example/router";
import testRouter from "@/test/router";

Vue.use(VueRouter);
// let routes = [...testRouter, ...(__DEV__ ? uiRouter : [])];
let routes = [...testRouter, ... uiRouter];

console.table(routes);

routes.push({
    path: "*",
    redirect: { name: "test" }
});

export default new VueRouter({
    mode: "history",
    routes
});
