(function () {
    'use strict';

    angular
        .module('app.calendar.yearView')
        .config($stateProvider => {
            $stateProvider
                .state('calendarState.yearView', {
                    url: '/year',
                    params: {date: null},
                    templateUrl: '/app/components/calendar/yearView/yearView.html',
                    controller: 'yearViewController',
                    controllerAs: 'yearViewCtrl',
                    resolve: {}
                });
        });
        
})();

