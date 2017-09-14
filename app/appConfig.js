(function () {
    'use strict';
    angular.module('app', [
        /** Vendor modules */
        'ui.router',
        
        /** Custom modules */
        'app.homePage',
        'app.homePage.blankSubpage',
        'app.homePage.firstSubpage',
        'app.homePage.secondSubpage',
        'app.formPage',
        'app.thirdPage'
    ]);
})();