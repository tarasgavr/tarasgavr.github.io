var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var concatJS = require("gulp-concat");
var pump = require('pump');

gulp.task('CSS', function () {
  return gulp.src(['javascript/css/js6.css', 'javascript/css/reset.css'])
    .pipe(concatCSS("gulp.css"))
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('dest'));
});


gulp.task("JS", function () {
    return gulp.src(['javascript/js/6/*.js'])
          .pipe(concatJS("gulp.js"))
          .pipe(uglify())
        .pipe(gulp.dest("dest"));
});

gulp.task('default', ['JS', 'CSS']);
