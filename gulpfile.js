'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task("concatScripts", function() {
  gulp.src(['js/scripts.js', 'js/jquery-3.1.1.js', 'js/calculator-interface.js'])
  .pipe(concat("js/app.js"))
  .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function() {
  gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("default", ["hello"], function() {
  console.log("this is a default");
});
