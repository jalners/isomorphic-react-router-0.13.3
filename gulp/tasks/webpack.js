var gulp = require('gulp');
var config = require('../../webpack.config');
var webpack = require('webpack');
var logger = require('../lib/compileLogger');
var gutil = require('gulp-util');

gulp.task('webpack', function() {
  webpack(config).watch(200, function(err, stats) {
    logger(err, stats);
  });
})