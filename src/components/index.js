/*
  对外统一提供接口
*/

//公用头部,不用异步加载
export { default as Header } from './header'; //转换成下面这种形式了，所以改文件访问不到以Header命名的变量
/*
Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});
*/


export const Grid = () => import(/* webpackChunkName: "grid" */ "./grid");
export const Panel = () => import(/* webpackChunkName: "panel" */ "./panel");
export default {
  Grid,
  Panel
}