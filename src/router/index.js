import Vue from "vue";
import VueRouter from "vue-router";

import uiRouter from "@/components/router";
import demo from "@/demo/router";

Vue.use(VueRouter);

let routes = [...demo, ...(__DEV__ ? uiRouter : [])];

console.table(routes);

routes.push({
    path: "*",
    redirect: { name: "test" }
});

export default new VueRouter({
    mode: "history",
    routes
});
