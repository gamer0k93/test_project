const 
    mainBowerFiles = require('main-bower-files'),
    gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    filter = require('gulp-filter'),
    config = require(path.resolve('./config/gulp/config'));


gulp.task('scripts:vendor', function() {
    let vendors = mainBowerFiles();
    return gulp.src(vendors)
        .pipe(filter('**/*.js'))
        .pipe(concat(config.build.vendorJs))
        .on('error', config.swallowError)
        .pipe(gulp.dest(config.build.path));
});