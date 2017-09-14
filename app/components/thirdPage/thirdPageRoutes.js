(function () {
    'use strict';

    angular
        .module('app.thirdPage')
        .config($stateProvider => {
            $stateProvider
                .state('thirdPageState', {
                    url: '/third',
                    templateUrl: './app/components/thirdPage/thirdPage.html',
                    controller: 'thirdPageController',
                    controllerAs: 'thirdPageCtrl',
                    resolve: {}
                });
        });

})();

