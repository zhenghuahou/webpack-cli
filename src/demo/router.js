//测试页面
const test = () => import(/* webpackChunkName: "test" */ "./views/test");

export default [
    {
        path: "/test",
        name: "test",
        meta: {
            title: "test页面"
        },
        component: test
    }
];
