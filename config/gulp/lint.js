const 
    gulp = require('gulp'),
    path = require('path'),
    config = require(path.resolve('./config/gulp/config')),
    eslint = require('gulp-eslint');

gulp.task('linter', function () {
    return gulp.src([config.dev.js])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});