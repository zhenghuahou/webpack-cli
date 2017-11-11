import config from "./config.json";

// const panel = () => import(/* webpackChunkName: "panel" */ "./pages/panel");
// const grid = () => import(/* webpackChunkName: "grid" */ "./pages/grid");

//example页面
const example = () => import(/* webpackChunkName: "demo" */ "./demos");

const registerRoute = config => {
    return config.map(({ path, name, meta = {} }) => ({
        path: `/example${path}`,
        name,
        component: () =>
            import(`./pages${path}`),
        meta
    }));
};

const routes = registerRoute(config);
routes.unshift({
    path: "/example",
    name: "example",
    meta: {
        title: "example页面"
    },
    component: example
});

console.warn(" routes:", routes);

export default routes;