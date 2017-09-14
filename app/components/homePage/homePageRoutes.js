(function () {
    'use strict';

    angular
        .module('app.homePage')
        .config($stateProvider => {
            $stateProvider
                .state('homePageState', {
                    abstract: true,
                    url: '',
                    templateUrl: './app/components/homePage/homePage.html',
                    controller: 'homePageController',
                    controllerAs: 'homePageCtrl',
                    resolve: {
                        testResolve: ()=>{
                            console.log("Launching a common resolve");
                        }
                    }
                });
        });

})();

