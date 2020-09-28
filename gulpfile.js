'use strict';

const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');

function compileTask() {
  return src(['./src/sass/**/*.scss'])
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(dest('./dist/css/'));
}

function watchTask() {
  watch(['./src/sass/**/*.scss'], parallel(compileTask));
}

exports.default = series(parallel(compileTask), watchTask);
