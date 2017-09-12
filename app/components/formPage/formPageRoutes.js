(function () {
    'use strict';

    angular
        .module('app.formPage')
        .config($stateProvider => {
            $stateProvider
                .state('formPageState', {
                    url: '/form',
                    templateUrl: './app/components/formPage/formPage.html',
                    controller: 'formPageController',
                    controllerAs: 'formPageCtrl',
                    resolve: {}
                });
        });

})();

