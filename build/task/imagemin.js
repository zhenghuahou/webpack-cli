"use strict";
var gulp = require('gulp');
// var path = require('path');
var tinypng = require('gulp-tinypng');

gulp.task('imagemini', function (done) {
    console.log('图片正在压缩中..................');
    let t1 = +new Date;
    gulp.src('src/**/*.min.+(png|jpg|jpeg|gif)')
        .pipe(tinypng('cNJZ3e97EZZWg9olNwloydhswxJsQAPx'))
        .pipe(gulp.dest('src'))
        .on('end', function () {
            let t2 = +new Date;
            console.error(`图片已经压缩完毕!\n合计用时:${Math.round((t2 - t1) / 1000)}s`);
            done();// callback to signal end of build
        });
});

gulp.task('default', gulp.series('imagemini', function (done) {
    done();
}));