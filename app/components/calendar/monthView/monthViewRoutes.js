(function () {
    'use strict';

    angular
        .module('app.calendar.monthView')
        .config($stateProvider => {
            $stateProvider
                .state('calendarState.monthView', {
                    url: '/month',
                    params: {date: null},
                    templateUrl: '/app/components/calendar/monthView/monthView.html',
                    controller: 'monthViewController',
                    controllerAs: 'monthViewCtrl',
                    resolve: {}
                });
        });
        
})();

