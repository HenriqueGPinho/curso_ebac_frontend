const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));

function defaultTask() {
  return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/style'));
}

exports.default = defaultTask;
exports.watch = function () {
  gulp.watch('./source/main.scss', ['sass']);
}