(function () {
    'use strict';

    angular
        .module('app.homePage.blankSubpage')
        .config($stateProvider => {
            $stateProvider
                .state('homePageState.blankSubpage', {
                    url: '/',
                    params: {date: null},
                    templateUrl: '/app/components/homePage/blankSubpage/blankSubpage.html',
                    controller: 'blankSubpageController',
                    controllerAs: 'blankSubpageCtrl',
                    resolve: {}
                });
        });
        
})();

