'use strict';
const path = require('path');

module.exports = {
    dev: {
        js: './app/**/*.js',
        css: './app/**/*.scss',
        html: './app/components/**/*.html',
        build: './build'
    },
    build: {
        js: 'app.js',
        vendorJs: 'appVendor.js',
        css: 'app.css',
        vendorCss: 'appVendor.css',
        path: 'build'
    },
    debugging: true,
    swallowError: function (error) {
        console.log(error.toString())
        this.emit('end')
    }
};