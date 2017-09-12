const gulp = require('gulp');

require('require-dir')('./config/gulp');

gulp.task('lint', ['build', 'linter']);

gulp.task('build', ['scripts', 'styles']);

gulp.task('build:vendor', ['scripts:vendor', 'styles:vendor']);

gulp.task('all', ['build', 'scripts:vendor', 'styles:vendor', 'watch']);

gulp.task('default', ['build', 'watch']);
