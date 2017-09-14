const   
    gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    config = require(path.resolve('./config/gulp/config')),
    browserify = require('gulp-browserify');

gulp.task('scripts', () => {
    return gulp.src(config.dev.js)
        /**
         * Concat app files
         */
        .pipe(concat(config.build.js))
        .on('error', config.swallowError)
        /**
         * Setting up babel
         */
        .pipe(babel({
            presets: ['es2015'],
            compact: true
        }))
        .on('error', config.swallowError)
        .pipe(gulp.dest(config.build.path))
        .on('error', config.swallowError)
        
        
});