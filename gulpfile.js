const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const imgmin = require('gulp-imagemin');

function sourceMaps() {
  return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/style'));
}

function imagemin() {
  return gulp.src('./source/img/*')
    .pipe(imgmin())
    .pipe(gulp.dest('./build/img'));
}

exports.default = gulp.parallel(sourceMaps, imagemin);