var autoprefixer = require('autoprefixer');
var postcssPxtorem = require('postcss-pxtorem');

module.exports =  (ctx) => ({
    plugins: [
        autoprefixer({
            browsers: ["last 2 versions", "iOS >= 7", "Android >= 4"]
        }),
        postcssPxtorem({
            rootValue: 100,
            unitPrecision: 5,
            propWhiteList: [],
            selectorBlackList: [/^html$/],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        })
    ]
});
