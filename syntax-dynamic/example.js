var test = import(/* webpackChunkName:"lodasg" */'./abc.js');
window.t1 = test;
window.t2 = test.then(function({aFn,b},d){
    console.log('aFn:',aFn,' arg:',arguments,+new Date);
    aFn();
})
console.log(' test-->:',test,+new Date);
