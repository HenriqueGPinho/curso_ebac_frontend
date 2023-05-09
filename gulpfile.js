const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const imgmin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function sourceMaps() {
  return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/style'));
}

function imageMin() {
  return gulp.src('./source/img/*')
    .pipe(imgmin())
    .pipe(gulp.dest('./build/img'));
}

function uglifyJS() {
  return gulp.src('./source/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
}

exports.default = gulp.parallel(sourceMaps, imageMin, uglifyJS);