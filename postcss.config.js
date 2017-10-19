var autoprefixer = require('autoprefixer');
module.exports =  (ctx) => ({
    plugins: [
        autoprefixer({
            browsers: ["last 2 versions", "iOS >= 7", "Android >= 4"]
        })
    ]
});
