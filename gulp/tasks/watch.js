var gulp = require('gulp');
var config = require('../config');
var watch = require('gulp-watch');

gulp.task('watch', function(){
  watch(config.html.watch, function() {
    gulp.start('html');
  });
});