'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    rigger = require('gulp-rigger'),
    spritesmith = require('gulp.spritesmith'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

// @TODO: add rimraf to cleanup old files
// @TODO: add icon font creation
// @TODO: add jade task
// @TODO: move all paths to these variables
var src = {
    root    : 'src',
    jade    : 'src/jade',
    sass    : 'src/sass/',
    js      : 'src/js',
    img     : 'src/img',
    svg     : 'src/img/svg',
    helpers : 'src/helpers'
};

//** dest paths **
var dest = {
    root : 'site',
    html : 'site',
    css  : 'site/css',
    js   : 'site/js',
    img  : 'site/img'
};



//sass
gulp.task('sass', function() {

    var processors = [
        autoprefixer({browsers: ['last 4 versions'], cascade: false})
    ];

    return sass('src/sass/*.sass', {
        sourcemap: true,
        style: 'compact'
    }) 
    .on('error', function (err) {
      console.error('Error', err.message);
    })
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('site/css/'));
});


// sprite
gulp.task('sprite', function() {
    var spriteData = gulp.src(src.img + '/icons/*.png')
    // .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(spritesmith({
        imgName: 'icons.png',
        cssName: '_sprite.sass',
        imgPath: '../img/icons.png',
        cssFormat: 'sass',
        padding: 10,
        // algorithm: 'top-down',
        cssTemplate: src.helpers + '/sprite.template.mustache'
    }));
    spriteData.img
        .pipe(gulp.dest(dest.img)); 
    spriteData.css
        .pipe(gulp.dest(src.sass));
});

// html includes
gulp.task('html', function () {
    gulp.src('src/*.html') 
        .pipe(rigger())
        .pipe(gulp.dest('site/'))
        .pipe(reload({stream: true}));
});
 
// js includes
gulp.task('js', function () {
    gulp.src('src/js/**/*.js') 
        .pipe(rigger())
        .pipe(gulp.dest('site/js/'))
        .pipe(reload({stream: true}));
});
gulp.task('copy', function() {
   gulp.src('src/img/*.*')
   .pipe(gulp.dest('site/img/')); 
});


//webserver
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: dest.root,
            // directory: true,
            // index: 'index.html'
        },
        files: [dest.html + '/*.html', dest.css + '/*.css', dest.js + '/*.js'],
        port: 8080,
        notify: false,
        ghostMode: false, 
        online: false,
        open: false
    });
});

gulp.task('watch', function() {
    gulp.watch(src.sass + '/**/*', ['sass']);
    gulp.watch('src/js/*', ['js']);
    gulp.watch('src/img/*', ['copy']);
    gulp.watch(['src/*.html', 'src/partials/*.html'], ['html']);
    gulp.watch(src.img + '/icons/*.png', ['sprite']);
});


gulp.task('default', ['browser-sync', 'watch'], function() {});