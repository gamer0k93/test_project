(function () {
    'use strict';

    angular
        .module('app.homePage.firstSubpage')
        .config($stateProvider => {
            $stateProvider
                .state('homePageState.firstSubpage', {
                    url: '/first_subpage',
                    params: {date: null},
                    templateUrl: '/app/components/homePage/firstSubpage/firstSubpage.html',
                    controller: 'firstSubpageController',
                    controllerAs: 'firstSubpageCtrl',
                    resolve: {}
                });
        });
        
})();

