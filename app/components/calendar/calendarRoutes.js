(function () {
    'use strict';

    angular
        .module('app.calendar')
        .config($stateProvider => {
            $stateProvider
                .state('calendarState', {
                    abstract: true,
                    url: '',
                    templateUrl: './app/components/calendar/calendar.html',
                    controller: 'calendarController',
                    controllerAs: 'calendarCtrl',
                    resolve: {}
                });
        });

})();

