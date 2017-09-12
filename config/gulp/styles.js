const 
    gulp = require('gulp'),
    path = require('path'),
    config = require(path.resolve('./config/gulp/config')),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    bulkSass = require('gulp-sass-bulk-import'),
    gulpif = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src(config.dev.css)
        .pipe(bulkSass())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat(config.build.css))
        .on('error', config.swallowError)
        .pipe(gulp.dest(config.build.path));
});