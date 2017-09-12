const   
	gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    config = require(path.resolve('./config/gulp/config'));

gulp.task('watch', () => {
    /**
     * Watch scripts and templates
     */
    gulp.watch([config.dev.js, config.dev.html], ['scripts']);
    /**
     * Watch styles
     */
    gulp.watch([config.dev.css], ['styles']);
});