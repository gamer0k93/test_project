const
    mainBowerFiles = require('main-bower-files'),
    vendor = require('gulp-concat-vendor'),
    gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    filter = require('gulp-filter'),
    config = require(path.resolve('./config/gulp/config'));

gulp.task('styles:vendor', function() {
    let vendors = mainBowerFiles();
    return gulp.src(vendors)
        .pipe(filter('**/*.css'))
        .pipe(concat(config.build.vendorCss))
        .on('error', config.swallowError)
        .pipe(gulp.dest(config.build.path));
});