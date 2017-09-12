(function () {
    'use strict';

    angular
        .module('app.calendar.weekView')
        .config($stateProvider => {
            $stateProvider
                .state('calendarState.weekView', {
                    url: '/',
                    params: {date: null},
                    templateUrl: '/app/components/calendar/weekView/weekView.html',
                    controller: 'weekViewController',
                    controllerAs: 'weekViewCtrl',
                    resolve: {}
                });
        });
        
})();

