(function () {
    'use strict';

    angular
        .module('app.homePage.secondSubpage')
        .config($stateProvider => {
            $stateProvider
                .state('homePageState.secondSubpage', {
                    url: '/second_subpage',
                    params: {date: null},
                    templateUrl: '/app/components/homePage/secondSubpage/secondSubpage.html',
                    controller: 'secondSubpageController',
                    controllerAs: 'secondSubpageCtrl',
                    resolve: {}
                });
        });
        
})();

