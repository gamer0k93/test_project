(function () {
    'use strict';
    angular.module('app', [
        /**
         * Vendor modules
         */
        'ui.router',
        'ui-notification',
        /**
         * https://www.npmjs.com/package/angular-local-storage
         */
        'LocalStorageModule',
        /**
         * https://github.com/indrimuska/angular-moment-picker
         */
        'moment-picker',
        /**
         * Custom modules
         */
        'app.calendar',
        'app.calendar.weekView',
        'app.calendar.monthView',
        'app.calendar.yearView'
    ])

    /**
     * Setting up service for notifications
     */
    .config((NotificationProvider, localStorageServiceProvider) => {
        NotificationProvider.setOptions({
            delay: 2500,
            startTop: 20,
            startRight: 20,
            verticalSpacing: 20,
            horizontalSpacing: 10,
            positionX: 'right',
            positionY: 'top'
        });

    /**
     * Install prefix to avoid overwriting any local storage variables 
     */
    localStorageServiceProvider.setPrefix('calendarApp');
    });
})();