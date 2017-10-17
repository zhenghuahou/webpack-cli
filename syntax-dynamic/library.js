import {a,b} from "./abc";
export { a as default, b, c } from "./abc";
export { add as reexportedAdd, multiply as reexportedMultiply } from "./math";
//压缩后的代码里面不会有b,c的代码,也不会有multiply代码


console.warn(' b:',b);//压缩后的代码里面有b的代码
// console.warn('c:',c);//Uncaught ReferenceError: c is not defined
// console.warn(' reexportedMultiply:',reexportedMultiply) //Uncaught ReferenceError: reexportedMultiply is not defined