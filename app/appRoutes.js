(function () {
    'use strict';

    angular.module('app')
        .config($urlRouterProvider => {
            /**
             * If the path doesn't match any of the configured urls
             */
            $urlRouterProvider.otherwise('/');
        });
})();
