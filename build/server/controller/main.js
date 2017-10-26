export default {
    //首页
    index: async function (ctx, next) {
        console.warn(' controller/main.js',arguments);
        await ctx.render('index', {
          title: '欢迎使用无后端开发模式'
        })
    }
  }
  