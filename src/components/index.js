/*
  按需导出组件
*/

// const components = {
//   Grid:() => import(/* webpackChunkName: "grid" */ "./grid"),
//   Panel:() => import(/* webpackChunkName: "panel" */ "./panel"),
// }


export const Grid = () => import(/* webpackChunkName: "grid" */ "./grid");
export const Panel = () => import(/* webpackChunkName: "panel" */ "./panel");
export default {
  Grid,
  Panel
}