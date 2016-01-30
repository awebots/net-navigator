var gulp       = require('gulp');
var browserify = require('browserify');
var watchify   = require('watchify');
var streamify  = require('gulp-streamify');
var cssMin     = require('gulp-css');
var uglify     = require('gulp-uglify');
var notify     = require('gulp-notify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var webserver  = require('gulp-webserver');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('browserify', function () {
    watchify(browserify('./src/index.js'))
        .transform(babelify)
        .bundle()
        .on('error', function(err) {
            console.error(err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify('./dist/')))
        .pipe(gulp.dest('./dist/'))
        .pipe(notify("Built Bundle"));
});

gulp.task('serve', function(){
  gulp.src('./')
        .pipe(webserver({
            livereload: true,
        }));
});

gulp.task('default', ['browserify', 'sass']);

gulp.task('watch', function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
        }));
    gulp.start('default');
    gulp.watch('./src/**/*.{js,jsx}', ['default']);
    gulp.start('sass:watch');
  });
