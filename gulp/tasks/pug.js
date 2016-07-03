// var gulp = require('gulp');
// var notify = require('gulp-notify');
// var plumber = require("gulp-plumber");
// var pug = require("gulp-pug");
// var config = require('../config');
// // var changed = require("gulp-changed");

// gulp.task('pug', function() {
//     return gulp.src([
//             config.src.pug + '/*.pug', 
//             '!' + config.src.pug + '/_*.pug', 
//             '!' + config.src.pug + '/includes/*.pug'])
//         .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
//         // .pipe(changed(dest.html, {extension: '.html'}))
//         .pipe(pug({pretty: true}))
//         .pipe(gulp.dest(config.dest.html));
// });


// gulp.task('pug-all', function() {
//     return gulp.src([
//         config.src.pug + '/*.pug', 
//         '!' + config.src.pug + '/_*.pug', 
//         '!' + config.src.pug + '/includes/*.pug'])
//         .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
//         .pipe(pug({pretty: true}))
//         .pipe(gulp.dest(config.dest.html));
// });

// gulp.task('pug:watch', function() {
//     gulp.watch(config.src.pug + '/**/*.pug', ['pug']);
//     gulp.watch([config.src.pug + '/_*.pug', config.src.pug + '/includes/*.pug'], ['pug-all']);
// });
